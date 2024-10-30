var cardsHolder = document.getElementById('cardsPlaceholder');
var itemList = [];
var PAGE_SIZE = 6;
var currentPage = 1;
var totalNumberItems = 0
var totalPages = 0
// var itemList = [
//   {
//     id: 1,
//     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
//     price: 109.95,
//     description:
//       'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
//     category: "men's clothing",
//     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: 'Mens Casual Premium Slim Fit T-Shirts ',
//     price: 22.3,
//     description:
//       'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
//     category: "men's clothing",
//     image:
//       'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: 'Mens Cotton Jacket',
//     price: 55.99,
//     description:
//       'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
//     category: "men's clothing",
//     image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
// ];

function loadCard(item) {
  var section = document.createElement('div');
  section.setAttribute('class', 'card');
  var title = document.createElement('h4');
  title.textContent = item.title;
  var image = document.createElement('img');
  image.setAttribute('src', item.image);
  var price = document.createElement('p');
  price.textContent = item.price;
  var description = document.createElement('p');
  description.textContent = item.description;
  var category = document.createElement('p');
  category.textContent = item.category;
  section.appendChild(title);
  section.appendChild(category);
  section.appendChild(price);
  section.appendChild(image);
  section.appendChild(description);
  cardsHolder.appendChild(section);
}

function loadCards() {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      itemList = data;
      for (let i = 0; i < PAGE_SIZE; i++) {
        loadCard(itemList[i]);
      }
      console.log ("data", itemList.length)
      console.log ("total number items", totalNumberItems)
    });

}

function ascending(a, b) {
  return a.price - b.price;
}

function sortAscending() {
  //sort the list
  itemList.sort(ascending);

  // clear the part of the DOM that is holding the current list
  cardsHolder.replaceChildren();

  // load cards for the new list
  for (let i = 0; i < itemList.length; i++) {
    loadCard(itemList[i]);
  }
}

function descending(a, b) {
  return b.price - a.price;
}

function sortDescending() {
  //sort the list
  itemList.sort(descending);


  // clear the part of the DOM that is holding the current list
  cardsHolder.replaceChildren();

  // load cards for the new list
  for (let i = 0; i < itemList.length; i++) {
    loadCard(itemList[i]);
  }
}

function goToNextPage() {
  cardsHolder.replaceChildren();
  for (let i = currentPage*PAGE_SIZE; i < (currentPage+1)*PAGE_SIZE; i++) {
    if (i < itemList.length) {
      loadCard(itemList[i]);
    }
  }
  currentPage = currentPage+1;
  totalPages = Math.ceil(itemList.length/PAGE_SIZE)
  if (totalPages === currentPage) {
    document.getElementById("goToNextPage").disabled = true; 
  }
  console.log("total pages", currentPage, totalPages)
}

function goToNextPage() {
  cardsHolder.replaceChildren();
  for (let i = currentPage*PAGE_SIZE; i < (currentPage+1)*PAGE_SIZE; i++) {
    if (i < itemList.length) {
      loadCard(itemList[i]);
    }
  }
  currentPage = currentPage+1;
  totalPages = Math.ceil(itemList.length/PAGE_SIZE)
  if (totalPages === currentPage) {
    document.getElementById("goToNextPage").disabled = true; 
  }
  console.log("total pages", currentPage, totalPages)
}