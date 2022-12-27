//Evento que se ejecuta cuando se recarga la pagina del carrito.
document.addEventListener('DOMContentLoaded', () => {
    printProductsLocalStorage()
    const deleteButtons = document.getElementsByClassName("deleteButton")

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (e) => {
            localStorage.removeItem(e.target.id)
            document.getElementById("product"+e.target.id).remove()
        })
    }

})

//Botones para mostrar y cerrar el carrito
const showCart = document.getElementById("showCart")
const hideCart = document.getElementById("hideCart")


//Evento para mostrar el carrito
showCart.addEventListener("click", () => {
    if (document.getElementById("divProductsLocalStorage") == null) printProductsLocalStorage()
})

//Evento para cerrar el carrito
hideCart.addEventListener("click", () => {
    if (document.getElementById("divProductsLocalStorage") != null) document.getElementById("divProductsLocalStorage").remove()
})


//Funcion que printea elementos del carrito
function printProductsLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        if (i == 0) {
            const div = document.createElement("div");
            div.setAttribute("id", "divProductsLocalStorage")
            div.setAttribute("class", "container")
            div.innerHTML = "<h2 id='h2Products'>Cart</h2>";
            const products = document.createElement("div")
            products.setAttribute("id", "products")
            products.setAttribute("class", "container-fluid")
            div.append(products)
            document.getElementById("divContainerCart").append(div)
        }
        const product = JSON.parse(localStorage.getItem(i + 1))
        const idProduct = i + 1
        const nameProduct = product.name
        const descProduct = product.description
        const priceProduct = product.price

        const appendProduct = document.createElement("div")
        appendProduct.setAttribute("id", "product" + idProduct.toString())
        appendProduct.innerHTML = `<h4>${nameProduct}</h4>
                                   <p>ID: ${idProduct}</p>
                                   <p>Description: ${descProduct}</p>
                                   <p>Price: ${priceProduct}</p>
                                   <button name='buttonDelete' id='${idProduct}' class='deleteButton' type='button'>Delete</button>`
        document.getElementById("divProductsLocalStorage").append(appendProduct)
    }
}