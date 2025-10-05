const params = new URLSearchParams(window.location.search);
const category = params.get("category");
// console.log(category);

const productListContainer = document.querySelector("#productListContainer");
const header = (document.querySelector("h1").textContent = category);
let allData, currentDataSet;
// Filtrering af køn

document.querySelector("#filters").addEventListener("click", showFiltered);

function showFiltered(event) {
  const gender = event.target.dataset.gender;
  if (gender == "All") {
    currentDataset = allData;
    console.log("all");
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    currentDataSet = udsnit;
    console.log(udsnit, currentDataSet);
  }
  showProducts(currentDataSet);
}

// Sotering af pris
document.querySelector("#sorting").addEventListener("click", sortItems);

function sortItems(event) {
  console.log(event.target);
  const direction = event.target.dataset.direction;
  if (direction == "lohi") {
    currentDataSet.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
  } else {
    currentDataSet.sort((firstItem, secondItem) => secondItem.price - firstItem.price);
  }
  showProducts(currentDataSet);
}

fetch(`https://kea-alt-del.dk/t7/api/products/?limit=20&start=20category=${category}`)
  .then((response) => response.json())
  .then((json) => {
    allData = currentDataSet = json;
    showProducts(currentDataSet);
  });

function showProducts(products) {
  console.log(products);
  productListContainer.innerHTML = "";
  products.forEach((element) => {
    productListContainer.innerHTML += `<div class="card"><div class="card-img">
            <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" /></a>
${element.soldout ? "<p class='sold-out-badge'>Sold out</p><div class='sold-out-overlay'></div>" : ""}
            <h3>${element.productdisplayname}</h3>
            <p class="category">${element.articletype}|${element.brandname}</p>

            <p class=${element.discount && "old-price"}>DKK<span>${element.price}</span>,-</p>
            ${element.discount ? `<p class='discount'>${element.discount}%</p><p class='new-price'>DKK <span>${Math.round(element.price - (element.price * element.discount) / 100)},-</p>` : ""}
            <a href="product.html?id=${element.id}" class="read-more">Read More</a>
          </div>
        </div>
            `;
  });
}
