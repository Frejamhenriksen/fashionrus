const productListContainer = document.querySelector("#productListContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then(data => showProducts(data));

function showProducts(products) {
    console.log(products);
    products.forEach(element => {
        console.log(element);
            productListContainer.innerHTML += `
    
    })
}