const productContainer = document.querySelector("#productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(product) {
  console.log(product);
  productContainer.innerHTML += `
        <div class="container">
    <div class="product-image-container">
        <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Product picture">
    </div>
        <div class="product-info">
            <h1>DKK 1595</h1>
            <h2>Product Information</h2>
            <p class="productName">${product.productdisplayname}</p>
            <p class="articleType">${product.articletype}</p>
            <p class="first">Inventory number<br></p><p>1163</p>
        </div>

        <!-- Drop down menu for køb af størrelser -->
            <div class="buy-box">
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="category">${product.articletype} | ${product.brandname}</p>

            <div class="size-selector">
            <label for="size-dropdown">Choose a size</label>
            <select id="size-dropdown">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            </select>
            <!-- Tilføj til kurv knap -->
                  <button class="add-to-basket-btn">Add to basket</button>
            </div>
        `;
}
