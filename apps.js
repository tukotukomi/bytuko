// The featured apps. Order here is the order on the page; the first one
// gets the big hero card. Card text stays short on purpose: anything
// longer belongs in `about`, which only shows in the detail sheet.
// `focus` (optional) is the CSS object-position used when a tall card
// crops a wide screenshot.
window.APPS = [
  {
    id: "farm-hop",
    name: "Betty Lou's Farm Hop",
    tagline: "Hop, pick, grow.",
    eyebrow: "Game of the day",
    category: "Game",
    url: "https://farmhop.fun",
    domain: "farmhop.fun",
    action: "Play",
    icon: "media/farmhop-icon.png",
    image: "media/farmhop.jpg",
    focus: "34% 50%", // keep the FARM HOP sign in frame on phones
    accent: "#7ccf3a",
    facts: ["Free", "Browser + phone", "EN · ES · 中文"],
    about: [
      "Help Betty Lou and friends hop across farm roads, pastures and creeks before the sun sets.",
      "Pick sunflowers on the way, then spend them growing the farm and the Fish Pond back home. Friends can join a Co-Op Hop or jam along from their phones."
    ]
  },
  {
    id: "fractalize-studio",
    name: "Fractalize Studio",
    tagline: "Photos that move to music.",
    eyebrow: "Creative tool",
    category: "Music & visuals",
    url: "https://fractalize.studio",
    domain: "fractalize.studio",
    action: "Open",
    icon: "media/fractalize-icon.svg",
    image: "media/fractalize.jpg",
    video: "media/fractalize.mp4",
    accent: "#c8f5dc",
    facts: ["Free", "Browser", "WebGL"],
    about: [
      "Turn any photo into a living fractal that moves with your music, drawn live in WebGL from the photo's own colors.",
      "Use one of my film photographs or your own (uploads never leave your device). Control it from your phone with a QR code."
    ]
  },
  {
    id: "blue-marble-forecast",
    name: "Blue Marble Forecast",
    tagline: "The weather, on a spinning globe.",
    eyebrow: "Weather",
    category: "Weather",
    url: "https://bluemarbleforecast.com",
    domain: "bluemarbleforecast.com",
    action: "Open",
    icon: "media/bluemarble-icon.png",
    image: "media/bluemarble.jpg",
    focus: "82% 50%", // the globe, not the forecast panel
    accent: "#3a8dde",
    facts: ["Free", "Browser + phone", "EN · ES · 中文"],
    about: [
      "A modern remake of the Wii's Forecast Channel, built around NASA's Blue Marble with real-time day, night and rainfall.",
      "Current conditions, 5-day, regional map, UV index, laundry check and your saved places, all from free public NOAA and NASA data."
    ]
  },
  {
    id: "sharkwork-submarine",
    name: "Sharkwork Submarine",
    tagline: "Dive to the beat of AQUAZEN.",
    eyebrow: "Arcade",
    category: "Game",
    url: "https://sharkworksubmarine.com",
    domain: "sharkworksubmarine.com",
    action: "Play",
    icon: "media/sharkwork-icon.svg",
    image: "media/sharkwork.jpg",
    focus: "38% 50%", // keep the submarine in frame
    video: "media/sharkwork.mp4",
    accent: "#ffd21f",
    facts: ["Free", "Computer browser", "Made in Unity"],
    about: [
      "A little submarine arcade game inspired by Sharkwork's album AQUAZEN, with each level built around a song handcrafted from live loops.",
      "Made in Unity with as little AI as possible, to learn the engine hands-on."
    ],
    links: [
      { label: "AQUAZEN on Bandcamp", url: "https://sharkwork.bandcamp.com/album/aquazen" },
      { label: "Sharkwork on Spotify", url: "https://open.spotify.com/artist/58Qvc4xDrmDAD7V8rKqWRW" }
    ]
  },
  {
    id: "fantasy-radio-companion",
    name: "Fantasy Radio Companion",
    tagline: "An adventure that runs on music.",
    eyebrow: "Idle RPG",
    category: "Music & games",
    url: "https://fantasyradiocompanion.com",
    domain: "fantasyradiocompanion.com",
    action: "Play",
    icon: "media/radio-icon.png",
    image: "media/radio.jpg",
    focus: "50% 100%", // the party at the campfire
    accent: "#f0a04b",
    facts: ["Free", "Browser + phone", "EN · ES · 中文"],
    about: [
      "A pixel-art idle RPG: tune in to an internet radio station and your party adventures for as long as the music plays.",
      "Days and seasons pass, new heroes join at the tavern and monsters wander in to be fought. Every station has a Support button for the people keeping the music on."
    ]
  }
];
