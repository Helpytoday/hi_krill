// Each answer is ["canonical answer|accepted alias", estimated popularity %].
// These are game estimates, not live survey results. A 0 means no votes in this
// game's reference pool; it does NOT mean the answer is objectively impossible.
const BANK = [
  {q:"Name a fruit", a:[["apple",28],["banana",22],["orange",12],["strawberry",9],["grape",6],["mango",5],["watermelon",5],["pineapple",4],["pear",3],["cherry",3],["blueberry",3],["kiwi",2],["lime",1],["papaya",1],["guava",0],["dragon fruit|dragonfruit",0],["jackfruit",0]]},
  {q:"Name a color", a:[["blue",30],["red",22],["green",15],["purple",9],["yellow",7],["black",6],["orange",4],["pink",4],["white",2],["teal",2],["cyan",1],["maroon",1],["beige",1],["chartreuse",0],["periwinkle",0]]},
  {q:"Name an animal", a:[["dog",25],["cat",18],["elephant",12],["lion",10],["tiger",6],["giraffe",5],["dolphin",4],["horse",4],["monkey",3],["bear",3],["wolf",2],["fox",2],["penguin",2],["koala",1],["axolotl",0],["platypus",0]]},
  {q:"Name a city", a:[["new york|nyc|new york city",18],["paris",17],["london",12],["tokyo",10],["los angeles|la",6],["chicago",5],["rome",5],["miami",4],["sydney",4],["berlin",3],["toronto",2],["madrid",2],["dubai",2],["athens",1],["reykjavik",0],["kyoto",0]]},
  {q:"Name a pizza topping", a:[["pepperoni",40],["cheese",14],["mushroom",12],["sausage",8],["olive|olives",6],["onion",5],["pineapple",5],["bacon",4],["pepper|green pepper|bell pepper",3],["ham",2],["jalapeno|jalapenos",2],["anchovy|anchovies",1],["artichoke",1],["prosciutto",0],["arugula",0]]},
  {q:"Name a job", a:[["doctor",20],["teacher",18],["lawyer",10],["engineer",9],["nurse",8],["firefighter",6],["police officer|cop|police",5],["chef",5],["pilot",4],["programmer|developer",4],["dentist",3],["architect",3],["zoologist",1],["meteorologist",0],["actuary",0]]},
  {q:"Name a month", a:[["december",18],["october",14],["july",12],["june",10],["may",9],["april",8],["september",8],["january",7],["march",6],["august",5],["february",2],["november",1]]},
  {q:"Name something in a kitchen", a:[["fridge|refrigerator",24],["oven",16],["sink",14],["knife",10],["stove",10],["microwave",8],["plate",5],["spoon",4],["fork",3],["toaster",3],["blender",2],["kettle",1],["whisk",1],["colander",1],["mandoline",0],["milk frother",0]]},
  {q:"Name a superhero", a:[["batman",28],["superman",24],["spiderman|spider man",20],["iron man|ironman",8],["wonder woman",6],["hulk",4],["thor",3],["flash",2],["captain america",3],["aquaman",2],["green lantern",1],["deadpool",2],["ant man|antman",0],["moon knight",0]]},
  {q:"Name a sport", a:[["soccer|football (soccer)",22],["basketball",20],["football",16],["baseball",10],["tennis",9],["golf",6],["hockey",5],["swimming",4],["volleyball",3],["rugby",2],["cricket",2],["badminton",2],["fencing",1],["curling",0],["lacrosse",0]]},
  {q:"Name a vegetable", a:[["carrot",22],["broccoli",18],["potato",12],["tomato",8],["spinach",7],["onion",6],["corn",6],["lettuce",5],["pea|peas",4],["cucumber",4],["zucchini",3],["eggplant",2],["asparagus",1],["bok choy",0],["kohlrabi",0]]},
  {q:"Name a planet", a:[["mars",28],["saturn",18],["jupiter",16],["earth",10],["venus",9],["neptune",6],["mercury",5],["uranus",5]]},
  {q:"Name a musical instrument", a:[["guitar",30],["piano",26],["drum|drums",12],["violin",10],["flute",5],["trumpet",4],["saxophone|sax",4],["cello",3],["bass",2],["harp",2],["ukulele",2],["clarinet",2],["banjo",1],["oboe",1],["theremin",0],["hurdy gurdy",0]]},
  {q:"Name a board game", a:[["monopoly",30],["chess",18],["scrabble",10],["clue",8],["risk",6],["checkers",6],["catan",5],["sorry",3],["battleship",3],["trivial pursuit",2],["ticket to ride",2],["backgammon",1],["pandemic",1],["mahjong",0],["go",0]]},
  {q:"Name a country", a:[["france",14],["japan",12],["italy",12],["canada",10],["brazil",8],["australia",8],["mexico",7],["germany",6],["spain",5],["india",4],["norway",3],["greece",3],["portugal",2],["thailand",2],["nepal",1],["bhutan",0],["liechtenstein",0]]},
  {q:"Name a drink", a:[["water",30],["coffee",20],["tea",10],["juice",8],["soda|coke|cola",8],["milk",6],["beer",4],["wine",4],["lemonade",3],["smoothie",2],["hot chocolate",2],["kombucha",1],["horchata",0],["lassi",0]]},
  {q:"Name a dinosaur", a:[["t rex|trex|tyrannosaurus|tyrannosaurus rex",34],["velociraptor|raptor",14],["triceratops",14],["stegosaurus",9],["brontosaurus",6],["brachiosaurus",5],["pterodactyl",5],["ankylosaurus",3],["spinosaurus",3],["parasaurolophus",1],["iguanodon",1],["therizinosaurus",0],["microraptor",0]]},
  {q:"Name a school subject", a:[["math|maths|mathematics",30],["science",15],["english",14],["history",12],["art",6],["gym|pe|physical education",5],["music",5],["biology",4],["chemistry",3],["geography",3],["physics",2],["computer science|computing",2],["economics",1],["robotics",0],["philosophy",0]]},
  {q:"Name a flower", a:[["rose",30],["tulip",14],["daisy",12],["sunflower",12],["lily",8],["orchid",4],["daffodil",4],["lavender",3],["violet",3],["carnation",2],["peony",2],["hibiscus",1],["chrysanthemum",1],["bluebell",0],["foxglove",0]]},
  {q:"Name something to bring camping", a:[["tent",30],["sleeping bag",20],["flashlight",10],["marshmallow|marshmallows",8],["cooler",6],["match|matches",5],["water",4],["bug spray",4],["backpack",3],["lantern",3],["compass",2],["sleeping pad",2],["tarp",2],["camp stove",1],["water filter",0],["water purifier",0]]},
  {q:"Name a fictional wizard", a:[["harry potter|harry",32],["gandalf",28],["merlin",12],["dumbledore",10],["voldemort",3],["hermione",3],["rincewind",1],["saruman",2],["radagast",1],["ged|wizard ged",0],["elminster",0],["pug",0]]}
];

const PER_DIVE = 7;
const RARITY = [
  {min:20, level:1, label:"More popular", meters:10, detail:"A very common answer."},
  {min:10, level:2, label:"Popular", meters:25, detail:"A popular answer, but not the most common."},
  {min:3, level:3, label:"Not popular", meters:50, detail:"A less common answer."},
  {min:1, level:4, label:"Not said at all", meters:75, detail:"An extremely rare answer in the reference pool."},
  {min:0, level:5, label:"Said by no one", meters:100, detail:"No votes for this answer in the built-in reference pool."}
];

// ---------- Helpers ----------
function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^(a|an|the)\s+/, "");
}

function rarityFor(share) {
  return RARITY.find(tier => share >= tier.min) || RARITY[RARITY.length - 1];
}

// Strict matching: only a listed answer or one of its explicit aliases is accepted.
// No fuzzy matching is used, so an unrelated or misspelled answer cannot score.
function findMatch(prompt, input) {
  const answer = normalize(input);
  if (!answer) return null;

  for (const [names, share] of prompt.a) {
    const aliases = names.split("|");
    if (aliases.some(alias => normalize(alias) === answer)) {
      return { canonical: aliases[0], share, ...rarityFor(share) };
    }
  }
  return null;
}

function mulberry32(seed) {
  return function() {
    seed |= 0;
    seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function pickPrompts(seed) {
  const random = mulberry32(seed);
  const indexes = BANK.map((_, index) => index);
  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes.slice(0, PER_DIVE);
}

function dateKey(date = new Date()) {
  return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
}
function seedOf(key) { return Number(key.replace(/-/g, "")); }
function isValidDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T12:00:00");
  return !Number.isNaN(date.getTime()) && dateKey(date) === value;
}
function totalMeters() { return results.reduce((sum, result) => sum + result.meters, 0); }

const store = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (_) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* Storage may be disabled. */ }
  }
};

// ---------- Game state ----------
let mode = "daily";
let key = dateKey();
let picks = [];
let step = 0;
let results = [];
let pendingFeedback = null;
const $ = id => document.getElementById(id);

function start(nextMode, archiveKey) {
  mode = nextMode;
  if (mode === "daily") {
    key = archiveKey || dateKey();
    picks = pickPrompts(seedOf(key));
    const saved = store.get("dd_v2_done_" + key, null);
    if (Array.isArray(saved) && saved.length === PER_DIVE) {
      results = saved;
      step = PER_DIVE;
      pendingFeedback = null;
      render();
      return;
    }
  } else {
    key = dateKey();
    picks = pickPrompts(Math.floor(Math.random() * 1e9));
  }
  results = [];
  step = 0;
  pendingFeedback = null;
  render();
}

function renderModes() {
  const element = $("modes");
  element.replaceChildren();
  const addMode = (label, active, handler) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = active ? "on" : "ghost";
    button.setAttribute("aria-pressed", String(active));
    button.addEventListener("click", handler);
    element.appendChild(button);
  };
  addMode("Daily dive", mode === "daily" && key === dateKey(), () => start("daily"));
  addMode("Unlimited", mode === "unlimited", () => start("unlimited"));
  addMode("Archive", mode === "daily" && key !== dateKey(), () => {
    const date = prompt("Enter a date (YYYY-MM-DD) to replay:", dateKey());
    if (!date) return;
    if (!isValidDateKey(date)) {
      alert("Please enter a real date in YYYY-MM-DD format.");
      return;
    }
    start("daily", date);
  });
}

function renderBar() {
  const element = $("bar");
  element.replaceChildren();
  for (let i = 0; i < PER_DIVE; i++) {
    const segment = document.createElement("i");
    segment.className = i < results.length ? "done" : (i === step ? "cur" : "");
    segment.setAttribute("aria-label", `Question ${i + 1}${i < results.length ? " complete" : ""}`);
    element.appendChild(segment);
  }
}

function render() {
  renderModes();
  renderBar();
  const card = $("card");
  card.replaceChildren();
  if (step >= PER_DIVE) {
    renderResults(card);
    return;
  }

  const prompt = BANK[picks[step]];
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = `Prompt ${step + 1} of ${PER_DIVE} · ${totalMeters()} meters so far`;
  const question = document.createElement("h2");
  question.className = "q";
  question.textContent = prompt.q;
  card.append(count, question);

  if (pendingFeedback) {
    renderFeedback(card, pendingFeedback);
    return;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your answer…";
  input.autocomplete = "off";
  input.maxLength = 60;
  input.setAttribute("aria-label", prompt.q);

  const error = document.createElement("div");
  error.className = "note error";
  error.setAttribute("role", "alert");

  const row = document.createElement("div");
  row.className = "row";
  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Dive";

  const submit = () => {
    const answer = input.value.trim();
    if (!answer) {
      error.textContent = "Enter an answer first.";
      input.focus();
      return;
    }
    const match = findMatch(prompt, answer);
    if (!match) {
      error.textContent = "That answer is not accepted for this question, so it will not count. Try another answer.";
      input.focus();
      input.select();
      return;
    }
    submitAnswer(answer, match);
  };

  submitButton.addEventListener("click", submit);
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") submit();
  });
  row.appendChild(submitButton);
  card.append(input, row, error);
  input.focus();
}

function createOceanStage(meters) {
  const stage = document.createElement("div");
  stage.className = "ocean-stage";
  stage.setAttribute("role", "img");
  stage.setAttribute("aria-label", `Animated underwater descent: Krillion sinks ${meters} meters.`);
  stage.style.setProperty("--depth-progress", String(meters / 100));

  const world = document.createElement("div");
  world.className = "ocean-world";
  world.id = "oceanWorld";

  const beamA = document.createElement("span"); beamA.className = "sunbeam a";
  const beamB = document.createElement("span"); beamB.className = "sunbeam b";
  const fishOne = document.createElement("span"); fishOne.className = "fish f1";
  const fishTwo = document.createElement("span"); fishTwo.className = "fish f2 reverse";
  const fishThree = document.createElement("span"); fishThree.className = "fish f3";
  const jelly = document.createElement("span"); jelly.className = "jelly";
  const angler = document.createElement("span"); angler.className = "angler"; angler.textContent = "🐡";
  const seaweedOne = document.createElement("span"); seaweedOne.className = "seaweed w1";
  const seaweedTwo = document.createElement("span"); seaweedTwo.className = "seaweed w2";
  const seaweedThree = document.createElement("span"); seaweedThree.className = "seaweed w3";
  const seafloor = document.createElement("span"); seafloor.className = "seafloor";
  world.append(beamA, beamB, fishOne, fishTwo, fishThree, jelly, angler,
    seaweedOne, seaweedTwo, seaweedThree, seafloor);

  const surface = document.createElement("div");
  surface.className = "surface-line";

  const ruler = document.createElement("div");
  ruler.className = "depth-ruler";
  ["0 m", "25 m", "50 m", "75 m", "100 m"].forEach(label => {
    const mark = document.createElement("div");
    mark.className = "depth-mark";
    mark.textContent = label;
    ruler.appendChild(mark);
  });

  const pointer = document.createElement("div");
  pointer.className = "depth-pointer";
  pointer.style.top = "10px";
  pointer.setAttribute("aria-hidden", "true");

  const krill = document.createElement("div");
  krill.className = "krill";
  krill.id = "krillion";
  krill.innerHTML = `
    <svg class="krill-art" viewBox="0 0 100 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="#ffd2a5" stroke-width="2.2" stroke-linecap="round">
        <path d="M22 25 Q9 9 3 7 M24 29 Q9 31 4 43" />
        <path d="M40 39 Q36 49 30 52 M50 40 Q49 50 44 54 M60 38 Q64 48 60 53 M69 35 Q77 43 75 49" />
      </g>
      <path d="M17 24 Q8 18 7 11 Q20 12 26 23 Z" fill="#f5a25e" stroke="#9c4a32" stroke-width="1.8"/>
      <path d="M17 31 Q8 37 8 44 Q20 42 27 32 Z" fill="#f5a25e" stroke="#9c4a32" stroke-width="1.8"/>
      <path d="M24 20 Q40 10 65 19 Q78 23 81 30 Q73 39 57 41 Q36 43 23 33 Z" fill="#ff9b58" stroke="#9c4a32" stroke-width="2"/>
      <path d="M37 17 Q34 29 38 40 M49 17 Q46 29 50 41 M61 19 Q58 30 62 39 M72 22 Q69 30 73 36" fill="none" stroke="#c96b43" stroke-width="2"/>
      <path d="M79 25 Q91 15 96 20 Q94 28 84 30 Q94 34 96 42 Q87 45 79 35" fill="#f5a25e" stroke="#9c4a32" stroke-width="1.8"/>
      <circle cx="27" cy="24" r="2.7" fill="#101a2a"/><circle cx="27.8" cy="23.2" r=".8" fill="#fff"/>
    </svg>`;

  const depthLabel = document.createElement("div");
  depthLabel.className = "stage-depth-label";
  depthLabel.textContent = `TARGET DEPTH · ${meters} M`;

  const bubbles = ["one", "two", "three", "four"].map(name => {
    const bubble = document.createElement("span");
    bubble.className = `bubble ${name}`;
    return bubble;
  });
  const caption = document.createElement("div");
  caption.className = "stage-caption";
  caption.id = "stageCaption";
  caption.textContent = "KRILLION · DESCENDING…";

  stage.append(world, surface, ruler, pointer, krill, ...bubbles, depthLabel, caption);
  return stage;
}

function renderFeedback(card, feedback) {
  const area = document.createElement("div");
  area.className = "feedback";

  const answer = document.createElement("div");
  answer.className = "answer-line";
  answer.textContent = `Your answer: ${feedback.answer}`;

  const rarity = document.createElement("div");
  rarity.className = "rarity";
  rarity.textContent = `#${feedback.level} · ${feedback.label}`;

  const detail = document.createElement("div");
  detail.className = "rarity-detail";
  detail.textContent = feedback.detail;

  const sinkNumber = document.createElement("div");
  sinkNumber.className = "sink-number";
  sinkNumber.textContent = `+${feedback.meters} meters`;

  const stage = createOceanStage(feedback.meters);
  const total = document.createElement("div");
  total.className = "depth-total";
  const totalLabel = document.createElement("span");
  totalLabel.textContent = "Your total dive depth";
  const totalValue = document.createElement("strong");
  totalValue.textContent = `${totalMeters()} m`;
  total.append(totalLabel, totalValue);

  const explanation = document.createElement("div");
  explanation.className = "note";
  explanation.textContent = feedback.share === 0
    ? "Popularity estimate: 0% in this game's reference pool."
    : `Popularity estimate: ${feedback.share}% in this game's reference pool.`;

  const row = document.createElement("div");
  row.className = "row";
  const replay = document.createElement("button");
  replay.type = "button";
  replay.className = "ghost";
  replay.textContent = "Replay descent";
  replay.addEventListener("click", () => playDescentAnimation(stage, feedback));
  const next = document.createElement("button");
  next.type = "button";
  next.textContent = step + 1 >= PER_DIVE ? "See final depth" : "Next question";
  next.addEventListener("click", () => {
    pendingFeedback = null;
    step++;
    if (step >= PER_DIVE && mode === "daily") {
      store.set("dd_v2_done_" + key, results);
    }
    render();
  });
  row.append(replay, next);

  area.append(answer, rarity, detail, sinkNumber, stage, total, explanation, row);
  card.appendChild(area);

  // Start a real, timed descent animation. Web Animations API makes the
  // movement explicit instead of relying on a CSS transition being noticed.
  playDescentAnimation(stage, feedback);
  next.focus();
}

function playDescentAnimation(stage, feedback) {
  const world = stage.querySelector(".ocean-world");
  const krill = stage.querySelector(".krill");
  const pointer = stage.querySelector(".depth-pointer");
  const caption = stage.querySelector(".stage-caption");
  const depthLabel = stage.querySelector(".stage-depth-label");
  const progress = feedback.meters / 100;
  const travel = Math.round(feedback.meters * 8.1); // 81–810 px of scenery movement
  const krillDestination = Math.round(18 + progress * 190);
  const pointerDestination = Math.round(12 + progress * 284);
  const duration = 2800;

  // Allow replaying without an old animation competing with the new one.
  [world, krill, pointer].forEach(element => {
    if (element && typeof element.getAnimations === "function") {
      element.getAnimations().forEach(animation => animation.cancel());
    }
  });
  stage.classList.remove("landed");
  stage.classList.add("diving");
  caption.textContent = `DESCENDING · 0 / ${feedback.meters} M`;
  depthLabel.textContent = `TARGET DEPTH · ${feedback.meters} M`;

  if (typeof world.animate === "function") {
    const sceneryAnimation = world.animate(
      [
        { transform: "translate3d(0, 0, 0)" },
        { transform: `translate3d(0, -${travel}px, 0)` }
      ],
      { duration, easing: "cubic-bezier(.16,.72,.18,1)", fill: "forwards" }
    );
    krill.animate(
      [
        { top: "8px", transform: "translate3d(0,0,0) rotate(-4deg)" },
        { top: `${krillDestination}px`, transform: "translate3d(18px,0,0) rotate(7deg)" }
      ],
      { duration, easing: "cubic-bezier(.22,.7,.2,1)", fill: "forwards" }
    );
    pointer.animate(
      [{ top: "10px" }, { top: `${pointerDestination}px` }],
      { duration, easing: "cubic-bezier(.16,.72,.18,1)", fill: "forwards" }
    );

    const started = performance.now();
    const updateDepth = now => {
      const amount = Math.min(1, (now - started) / duration);
      const current = Math.round(feedback.meters * amount);
      caption.textContent = amount >= 1
        ? `KRILLION · ${feedback.meters} M BELOW THE SURFACE`
        : `DESCENDING · ${current} / ${feedback.meters} M`;
      if (amount < 1) requestAnimationFrame(updateDepth);
    };
    requestAnimationFrame(updateDepth);
    sceneryAnimation.onfinish = () => {
      stage.classList.remove("diving");
      stage.classList.add("landed");
      caption.textContent = `KRILLION · ${feedback.meters} M BELOW THE SURFACE`;
    };
  } else {
    // Fallback for older browsers without the Web Animations API.
    world.style.transition = "transform 2.8s cubic-bezier(.16,.72,.18,1)";
    krill.style.transition = "top 2.8s cubic-bezier(.22,.7,.2,1)";
    pointer.style.transition = "top 2.8s cubic-bezier(.16,.72,.18,1)";
    requestAnimationFrame(() => {
      world.style.transform = `translate3d(0, -${travel}px, 0)`;
      krill.style.top = `${krillDestination}px`;
      pointer.style.top = `${pointerDestination}px`;
    });
    window.setTimeout(() => {
      stage.classList.remove("diving");
      stage.classList.add("landed");
      caption.textContent = `KRILLION · ${feedback.meters} M BELOW THE SURFACE`;
    }, duration + 100);
  }
}

function submitAnswer(answer, match) {
  const result = {
    q: BANK[picks[step]].q,
    answer,
    canonical: match.canonical,
    share: match.share,
    level: match.level,
    meters: match.meters,
    tierLabel: match.label
  };
  results.push(result);
  pendingFeedback = { answer, ...match };
  render();
}

function renderResults(card) {
  const total = totalMeters();
  const maximum = PER_DIVE * 100;
  const average = Math.round(total / PER_DIVE);

  const heading = document.createElement("div");
  heading.className = "tier";
  heading.textContent = "🦐 Dive complete!";
  const depth = document.createElement("div");
  depth.className = "depth";
  depth.textContent = `${total} meters below the surface`;

  const meter = document.createElement("div");
  meter.className = "meter";
  const fill = document.createElement("div");
  fill.style.width = `${Math.min(100, (total / maximum) * 100)}%`;
  meter.appendChild(fill);

  const averageLine = document.createElement("div");
  averageLine.className = "note";
  averageLine.textContent = `Average sink per answer: ${average} m · Maximum possible: ${maximum} m`;
  card.append(heading, depth, meter, averageLine);

  const legend = document.createElement("div");
  legend.className = "legend";
  RARITY.forEach(tier => {
    const item = document.createElement("div");
    item.className = "legend-item";
    const strong = document.createElement("strong");
    strong.textContent = `#${tier.level} ${tier.label}`;
    const text = document.createElement("span");
    text.textContent = `${tier.meters} meters`;
    item.append(strong, text);
    legend.appendChild(item);
  });
  card.appendChild(legend);

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-wrap";
  const table = document.createElement("table");
  const header = table.insertRow();
  ["Prompt / answer", "Rarity", "Sink"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    header.appendChild(th);
  });
  results.forEach(result => {
    const row = table.insertRow();
    const answerCell = row.insertCell();
    answerCell.textContent = `${result.q}: ${result.answer}`;
    const rarityCell = row.insertCell();
    rarityCell.textContent = `#${result.level} ${result.tierLabel}`;
    const metersCell = row.insertCell();
    metersCell.textContent = `${result.meters} m`;
  });
  tableWrap.appendChild(table);
  card.appendChild(tableWrap);

  const share = `DEEP DIVE ${mode === "daily" ? key : "(unlimited)"}\n` +
    `Total depth: ${total} m\n` +
    results.map(result => `#${result.level} ${result.tierLabel}: ${result.answer} (+${result.meters} m)`).join("\n");
  const pre = document.createElement("pre");
  pre.textContent = share;
  card.appendChild(pre);

  const buttons = document.createElement("div");
  buttons.className = "row";
  const copy = document.createElement("button");
  copy.type = "button";
  copy.textContent = "Copy result";
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(share);
      copy.textContent = "Copied!";
    } catch (_) {
      copy.textContent = "Copy unavailable — select the text above";
    }
  });
  const again = document.createElement("button");
  again.type = "button";
  again.className = "ghost";
  again.textContent = "Dive again";
  again.addEventListener("click", () => start("unlimited"));
  buttons.append(copy, again);
  card.appendChild(buttons);

  const note = document.createElement("div");
  note.className = "small";
  note.style.marginTop = "14px";
  note.textContent = "Answers are accepted only when they appear in the game's answer list or as an alias. Rarity percentages are estimates built into this file, not live survey data. A 0% answer is a valid listed answer with no votes in the reference pool.";
  card.appendChild(note);
}

start("daily");
