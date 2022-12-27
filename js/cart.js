const showCart = document.getElementById("showCart")
const hideCart = document.getElementById("hideCart")

showCart.addEventListener("click",(e) =>{

})

function printProductsLocalStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        if (i == 0) {
            const div = document.createElement("div");
            div.setAttribute("id", "divProducts")
            div.setAttribute("class","container")
            div.innerHTML = "<h2 id='h2Products'>Cart</h2>";
            const products = document.createElement("div")
            products.setAttribute("id","products")
            products.setAttribute("class","container-fluid")
            div.append(products)
            document.body.append(div);
        }
        const product = parse(localStorage.getItem(i+1))
        const nameProduct = arrayProducts[i].name
        const descProduct = arrayProducts[i].description
        const priceProduct = arrayProducts[i].price

        const appendProduct = document.createElement("div")
        appendProduct.innerHTML = `<h4>${nameProduct}</h4>
                                   <p>ID: ${idProduct}</p>
                                   <p>Description: ${descProduct}</p>
                                   <p>Price: ${priceProduct}</p>
                                   <button name='buttonCart' id='${idProduct}' class='addToCart' type='button'>Add to Cart</button>`
        document.getElementById("products").append(appendProduct)
    }
}