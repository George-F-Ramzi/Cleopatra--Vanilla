/* Displaying Data */

let data = {
  kind: "books#volume",
  id: "d225ywEACAAJ",
  etag: "MzIDZkcWpdA",
  selfLink: "https://www.googleapis.com/books/v1/volumes/d225ywEACAAJ",
  volumeInfo: {
    title: "Eat Sleep Robotics Repeat",
    subtitle:
      'Enthusiasts Gratitude Journal Planner 386 Pages Notebook Black Print 193 Days 8"x10" Thick Book',
    authors: ["Family Cutey"],
    publishedDate: "2019-11-06",
    description:
      'Family Cutey presents this cute and clean with lots of space, undated Gratitude Journal / Diary / Planner to keep or develop a positive attitude and a thankful mindset. contains: Date Statement pattern "Today I\'m grateful for__________" To Do List Chores Water Intake Meal Planner / Diary Notes Forget Me Nots Doodles Great gift for anyone who are organized, wants to be more organized, loves to doodle, loves documenting, writing.',
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "1706176694",
      },
      {
        type: "ISBN_13",
        identifier: "9781706176695",
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 388,
    printType: "BOOK",
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "preview-1.0.0",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=d225ywEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=d225ywEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    language: "en",
    previewLink:
      "http://books.google.com.eg/books?id=d225ywEACAAJ&dq=intitle:repeat&hl=&cd=1&source=gbs_api",
    infoLink:
      "http://books.google.com.eg/books?id=d225ywEACAAJ&dq=intitle:repeat&hl=&source=gbs_api",
    canonicalVolumeLink:
      "https://books.google.com/books/about/Eat_Sleep_Robotics_Repeat.html?hl=&id=d225ywEACAAJ",
  },
  saleInfo: {
    country: "EG",
    saleability: "NOT_FOR_SALE",
    isEbook: false,
  },
  accessInfo: {
    country: "EG",
    viewability: "NO_PAGES",
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false,
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink:
      "http://play.google.com/books/reader?id=d225ywEACAAJ&hl=&source=gbs_api",
    accessViewStatus: "NONE",
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      "Family Cutey presents this cute and clean with lots of space, undated Gratitude Journal / Diary / Planner to keep or develop a positive attitude and a thankful mindset. contains: Date Statement pattern &quot;Today I&#39;m grateful for__________&quot; To ...",
  },
};

let authors = document.getElementById("authors");
let title = document.getElementById("title");
let description = document.getElementById("description");
let pages = document.getElementById("number");
let price = document.getElementById("price");
let buyLink = document.getElementById("buy__button");
let image = document.getElementById("preview");

function Display() {
  if (!data) return Fetching();

  image.setAttribute("src", data.volumeInfo.imageLinks.thumbnail);

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

  console.log(data);

  Display();
}

Fetching();
