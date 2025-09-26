const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const productContainer = document.querySelector("#productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then(showProduct);

function showProduct(product) {
  productContainer.innerHTML = `
        <div class="container">
    <div class="product-image-container">
        <img class="product-image" src="img/1164-img.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
    </div>
        <div class="product-info">
            <h1>DKK 1595</h1>
            <h2>Product Information</h2>
            <p class="first">Model name<br></p><p>Sahara Team India Fanwear Round Neck Jersey</p>
            <p class="first">Color<br></p><p>Blue</p>
            <p class="first">Inventory number<br></p><p>1163</p>

            <div class="nike-logo">
                <img src="img/nike.png" alt="nike logo">
                <p>Nike, creating experiences for today's athlete</p>
            </div>
        </div>

        <!-- Drop down menu for køb af størrelser -->
            <div class="buy-box">
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="category">Nike | Tshirts</p>

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
