/* Fetching Data */

let data = {};

async function Fetching() {
  let res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=hello+intitle:keyes&projection=full&maxResults=1"
  );

  let result = await res.json();
  data = result.items[0];
  console.log(data);
  Display();
}

Fetching();

/* Displaying Data */

let authors = document.getElementById("authors");
let title = document.getElementById("title");
let description = document.getElementById("description");
let pages = document.getElementById("number");
let price = document.getElementById("price");
let buyLink = document.getElementById("buy__button");

function Display() {
  authors.innerHTML = `Authors: ${data.volumeInfo.authors}`;
  title.innerHTML = data.volumeInfo.title;
  description.innerHTML = data.volumeInfo.description;
  pages.innerHTML = `${data.volumeInfo.pageCount} <span>Pages</span>`;
  price.innerHTML = `${data.saleInfo.listPrice.amount}$`;
  buyLink.setAttribute("href", data.volumeInfo.infoLink);
}

Display();
