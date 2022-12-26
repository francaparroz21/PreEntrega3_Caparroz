//Obtengo el div de los botones
const show = document.getElementById("showProducts")
const hide = document.getElementById("hideProducts")

//Evento click que muestra los productos solo si los productos no se mostraron anteriormente
show.addEventListener("click",(e) => {
    showProducts()
})

//Evento para eliminar los productos del dom
hide.addEventListener("click",(e) =>{
    hideProducts()
})

function showProducts() {
    if (document.getElementById("divProducts") == null) {
        for (let i = 0; i < localStorage.length; i++) {
            if (i == 0) {
                const div = document.createElement("div");
                div.setAttribute("id", "divProducts")
                div.setAttribute("class","container-fluid")
                div.innerHTML = "<h2 id='h2Products'>Products</h2>";
                const products = document.createElement("div")
                products.setAttribute("id","products")
                div.append(products)
                document.body.append(div);
            }
            const idProduct = localStorage.key(i)
            const product = JSON.parse(localStorage.getItem(i + 1))
            const nameProduct = product.name
            const descProduct = product.description
            const priceProduct = product.price;

            const appendProduct = document.createElement("div")
            appendProduct.innerHTML = `<h4>${nameProduct}</h4>
                                       <p>ID: ${idProduct}</p>
                                       <p>Description: ${descProduct}</p>
                                       <p>Price: ${priceProduct}</p>`
            document.getElementById("products").append(appendProduct)
        }
    }
}

function hideProducts() {
    if (document.getElementById("divProducts") != null)document.getElementById("divProducts").remove()
}
