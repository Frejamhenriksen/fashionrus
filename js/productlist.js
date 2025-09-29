const productListContainer = document.querySelector("#productListContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/?limit=100`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  console.log(products);
  products.forEach((element) => {
    console.log(element);
    productListContainer.innerHTML += `
               <div class="card soldout ${element.soldout && "soldOut"}>
          <div class="card-img">
            <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" /></a>
            <element class="sold-out-badge">Sold Out</element>
            <div class="sold-out-overlay"></div>
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="category">Tshirts | Nike</p>
            <p class="old-price">DKK 1595</p>
            <p class="discount">-75% off</p>
            <p class="new-price">DKK 398,75</p>
            <a href="product.html" class="read-more">Read More</a>
          </div>
        </div>
            `;
  });
}
