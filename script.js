async function getProducts(){
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let products = data.products
   const result = products.map((ele) => {
    return`
    <div class="product">
    <h2>${ele.title}</h2>
    <div class="info">
    <span>Category: ${ele.category}</span>
    <span>Price: <span>₪ ${ele.price}</span>  </span>
</div>
    <img src="${ele.thumbnail}">
    </div>
    `
   }).join("")
   document.querySelector(".products").innerHTML = result
}
getProducts()