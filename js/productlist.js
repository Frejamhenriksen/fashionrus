const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

const productListContainer = document.querySelector("#productListContainer");
const header = (document.querySelector("h1").textContent = category);

fetch(`https://kea-alt-del.dk/t7/api/products/?limit=100&category=${category}`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  console.log(products);
  products.forEach((element) => {
    console.log(element);
    productListContainer.innerHTML += `
               <div class="card">

          <div class="card-img">
            <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" /></a>
${element.soldout ? "<p class='sold-out-badge'>Sold out</p><div class='sold-out-overlay'></div>" : ""}
            <h3>${element.productdisplayname}</h3>
            <p class="category">${element.articletype}|${element.brandname}</p>

            <p class=${element.discount && "old-price"}>DKK<span>${element.price}</span>,-</p>
            ${element.discount ? `<p class='discount'>${element.discount}%</p><p class='new-price'>DKK <span>${Math.round(element.price - (element.price * element.discount) / 100)},-</p>` : ""}
            <a href="product.html" class="read-more">Read More</a>
          </div>
        </div>
            `;
  });
}
