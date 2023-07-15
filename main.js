/* Displaying Data */

let data = {};

let imageSrc = "";

let authors = document.getElementById("authors");
let title = document.getElementById("title");
let description = document.getElementById("description");
let pages = document.getElementById("number");
let price = document.getElementById("price");
let buyLink = document.getElementById("buy__button");
let image = document.getElementById("preview");

function Display() {
  if (!data) return Fetching();

  image.setAttribute("src", imageSrc);

  if (data.volumeInfo.authors)
    authors.innerHTML = `Authors: ${data.volumeInfo.authors}`;
  else {
    authors.innerHTML = `No Data`;
  }

  title.innerHTML = data.volumeInfo.title;

  description.innerHTML = data.volumeInfo.description || "No Description";

  if (data.volumeInfo.pageCount)
    pages.innerHTML = `${data.volumeInfo.pageCount} <span>Pages</span>`;
  else {
    pages.innerHTML = `No Data`;
  }

  if (data.saleInfo.listPrice)
    price.innerHTML = `${data.saleInfo.listPrice.amount}$`;
  else {
    price.innerHTML = "No Price";
  }

  buyLink.setAttribute("href", data.volumeInfo.infoLink);
}

/* Preview */

/* Fetching Data */

let keywords = [
  "matter",
  "zoo",
  "oval",
  "tie",
  "cooing",
  "whine",
  "paste",
  "breezy",
  "monkey",
  "glove",
  "complain",
  "cheat",
  "grouchy",
  "sugar",
  "redundant",
  "repeat",
  "quirky",
  "kick",
  "sloppy",
  "dangerous",
  "glow",
  "next",
  "search",
  "reflective",
  "unknown",
  "twig",
  "apparel",
  "stay",
  "art",
  "account",
  "telling",
  "zonked",
  "super",
  "grain",
  "develop",
  "fax",
  "expect",
  "mine",
  "spell",
  "encouraging",
  "place",
  "position",
  "dislike",
  "nifty",
  "sock",
  "tip",
  "puzzling",
  "arm",
  "worthless",

  "hideous",
  "throne",
  "glorious",
  "present",
  "dramatic",
  "whirl",
  "close",
  "teeth",
  "callous",
  "fortunate",
  "fair",
  "true",
  "market",
  "tiger",
  "bloody",
  "deeply",
  "marble",
  "numberless",
  "behavior",
  "poised",
  "cemetery",
  "balance",
  "reach",
  "cheap",
  "fang",
  "instinctive",
  "beautiful",
  "car",
  "outgoing",
  "trot",
  "eggnog",
  "believe",
  "juggle",
  "compare",
  "show",
  "yummy",
  "milk",
  "cute",
  "preach",
  "undesirable",
  "dusty",
  "macho",
  "jellyfish",
  "grouchy",
  "downtown",
  "purring",
  "cheap",
  "impulse",
  "better",
  "loss",
  "ruin",
  "elite",
  "spotty",
  "flippant",
  "house",
  "lip",
  "card",
  "scientific",
  "childlike",
  "poison",
  "wicked",
  "illegal",
  "sour",
  "chemical",
  "substantial",
  "meaty",
  "trace",
  "overconfident",
  "crazy",
  "secretary",
  "disturbed",
  "north",
  "honorable",
  "night",
  "nation",
  "visit",
  "nosy",
  "past",
  "slip",
  "lighten",
  "head",
  "animal",
  "omniscient",
  "embarrassed",
  "beneficial",
  "relax",
  "physical",
  "partner",
  "plants",
  "crime",
  "aunt",
  "pumped",
  "tremendous",
  "stem",
  "place",
  "muddled",
  "plan",
  "twig",
  "glib",
  "arrange",
  "invention",
  "arrest",
  "answer",
  "thoughtful",
  "tranquil",
  "scarecrow",
  "pricey",
  "fall",
  "bouncy",
  "sock",
  "label",
  "appear",
  "amused",
  "visit",
  "imagine",
  "try",
  "night",
  "building",
  "racial",
  "can",
  "mere",
  "embarrassed",
  "swing",
  "mushy",
  "railway",
  "cars",
  "fearful",
  "mitten",
  "form",
  "equal",
  "calculate",
  "concerned",
  "teeny",
  "witty",
  "present",
  "wiry",
  "adhesive",
  "oafish",
  "relieved",
  "succeed",
  "nice",
  "chop",
  "notice",
  "utopian",
  "ignorant",
  "abundant",
  "trap",
  "five",
  "afterthought",
  "help",
  "greedy",
  "puncture",
  "influence",
  "jar",
  "aboard",
  "quill",
  "mysterious",
  "sloppy",
  "oil",
  "steer",
  "save",
  "advertisement",
  "gabby",
  "knot",
  "remember",
  "relax",
  "grubby",
  "nimble",
  "base",
  "pointless",
  "beef",
  "pancake",
  "shocking",
  "hang",
  "acid",
  "tiny",
  "sophisticated",
  "hushed",
  "flame",
  "statuesque",
  "colour",
  "needless",
  "wriggle",
  "familiar",
  "delay",
];

async function Fetching() {
  let random = Math.floor(Math.random() * 240);

  let res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${keywords[random]}&projection=full&maxResults=1`
  );

  let result = await res.json();
  data = result.items[0];

  imageSrc = `https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=w400-h630&source=gbs_api`;

  Display();
}

Fetching();
