const categorylist = document.querySelector(".categorylist");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  categories.forEach((category) => {
    categorylist.innerHTML += `<a href="productlist.html?category=${category.category}" class="card">${category.category}</a>`;
  });
}

{
  //   <a href="productlist.html"class="card">Accessories</a>
  //     <a href="productlist.html"class="card">Sporting goods</a>
  //         <a href="productlist.html"class="card">Apparel</a>
  //         <a href="productlist.html"class="card">Footwear</a>
  //         <a href="productlist.html"class="card">Free items</a>
  //         <a href="productlist.html"class="card">Personal care</a>
}
