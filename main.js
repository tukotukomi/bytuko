(function () {
  "use strict";

  var apps = window.APPS || [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // App Store "Today" style date line, in the visitor's own language.
  try {
    document.getElementById("today").textContent = new Date().toLocaleDateString(undefined, {
      weekday: "long", month: "long", day: "numeric"
    });
  } catch (e) { /* date line is decoration only */ }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Image, or a muted looping video with the image as its poster. With
  // reduced motion the video never starts, so the poster is what shows.
  function media(app) {
    if (app.video) {
      var v = el("video");
      v.src = app.video;
      v.poster = app.image;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      v.setAttribute("aria-hidden", "true");
      v.preload = "metadata";
      return v;
    }
    var img = el("img");
    img.src = app.image;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    return img;
  }

  function getButton(app, extraClass) {
    var a = el("a", "get" + (extraClass ? " " + extraClass : ""), app.action);
    a.href = app.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", app.action + " " + app.name);
    return a;
  }

  // ---- cards ----
  var cards = document.getElementById("cards");
  apps.forEach(function (app, i) {
    var card = el("article", "card" + (i === 0 ? " hero" : ""));
    card.style.setProperty("--accent", app.accent);

    var m = el("div", "card-media");
    var mm = media(app);
    if (app.focus) mm.style.objectPosition = app.focus;
    m.appendChild(mm);
    card.appendChild(m);

    var head = el("div", "card-head");
    head.appendChild(el("p", "eyebrow", app.eyebrow));
    head.appendChild(el("h2", "card-title", app.tagline));
    card.appendChild(head);

    var bar = el("div", "card-bar");
    var icon = el("img", "icon");
    icon.src = app.icon;
    icon.alt = "";
    bar.appendChild(icon);
    var txt = el("div", "app-text");
    txt.appendChild(el("p", "name", app.name));
    txt.appendChild(el("p", "sub", app.category));
    bar.appendChild(txt);
    bar.appendChild(getButton(app, "on-card"));
    card.appendChild(bar);

    // The whole card opens the detail sheet; the Play/Open pill sits on
    // top of this button and goes straight to the site instead.
    var hit = el("button", "card-hit");
    hit.type = "button";
    hit.setAttribute("aria-label", "More about " + app.name);
    hit.addEventListener("click", function () { open(app, true); });
    card.insertBefore(hit, bar);

    cards.appendChild(card);
  });

  // Play card videos only while they are on screen.
  var videos = cards.querySelectorAll("video");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !reduceMotion.matches && !sheet.open) e.target.play().catch(function () {});
        else e.target.pause();
      });
    }, { threshold: 0.25 });
    videos.forEach(function (v) { io.observe(v); });
  }

  // ---- detail sheet ----
  var sheet = document.getElementById("sheet");
  var current = null;

  function open(app, push) {
    current = app;
    sheet.style.setProperty("--accent", app.accent);
    var sm = document.getElementById("sheet-media");
    sm.textContent = "";
    var m = media(app);
    sm.appendChild(m);

    document.getElementById("sheet-icon").src = app.icon;
    document.getElementById("sheet-name").textContent = app.name;
    document.getElementById("sheet-tagline").textContent = app.tagline;
    var get = document.getElementById("sheet-get");
    get.href = app.url;
    get.textContent = app.action;
    get.setAttribute("aria-label", app.action + " " + app.name + " at " + app.domain);

    var facts = document.getElementById("sheet-facts");
    facts.textContent = "";
    app.facts.forEach(function (f) { facts.appendChild(el("li", null, f)); });

    var about = document.getElementById("sheet-about");
    about.textContent = "";
    app.about.forEach(function (p) { about.appendChild(el("p", null, p)); });

    var links = document.getElementById("sheet-links");
    links.textContent = "";
    var all = [{ label: app.domain, url: app.url }].concat(app.links || []);
    all.forEach(function (l) {
      var li = el("li");
      var a = el("a", null, l.label);
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      links.appendChild(li);
    });

    videos.forEach(function (v) { v.pause(); });
    if (!sheet.open) sheet.showModal();
    sheet.querySelector(".sheet-inner").scrollTop = 0;
    document.documentElement.classList.add("locked");
    if (m.tagName === "VIDEO" && !reduceMotion.matches) m.play().catch(function () {});
    if (push && location.hash !== "#" + app.id) history.pushState({ app: app.id }, "", "#" + app.id);
  }

  function close() {
    if (sheet.open) sheet.close();
  }

  sheet.addEventListener("close", function () {
    document.documentElement.classList.remove("locked");
    document.getElementById("sheet-media").textContent = "";
    current = null;
    // Opened from a card: step back off the #app entry we pushed, so Back
    // doesn't reopen it. Opened from a shared link: just clear the hash.
    if (history.state && history.state.app) history.back();
    else if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    videos.forEach(function (v) {
      var r = v.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight && !reduceMotion.matches) v.play().catch(function () {});
    });
  });

  document.getElementById("close").addEventListener("click", close);
  // Click on the dimmed backdrop (outside the panel) closes.
  sheet.addEventListener("click", function (e) { if (e.target === sheet) close(); });

  function fromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var app = apps.filter(function (a) { return a.id === id; })[0];
    if (app) open(app, false);
    else close();
  }
  window.addEventListener("popstate", fromHash);
  if (location.hash) fromHash();
})();
