//Clase Product
class Product {

    //Funcion constructora de la clase Product 
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    //Funcion para agregar IVA al producto (21%)
    calculateIva() {
        return this.price + (this.price * 21) / 100;
    }
}

//Arrow function que genera un id unico e incremental para cada producto.
const generateId = (() => (id = 1, () => id++))();

//Funcion que toma dos argumentos, crea un producto y lo retorna.
function createProduct(name, desc, price) {
    return new Product(name, desc, price);
}

//Funcion para mostrar todos los productos
function showProducts() {
    arrayProducts.forEach(element => {
        console.log(element);
    });
}

//Funcion que compra y elimina un producto de la lista de stock. Devuelve true si se compro y false si no.
function buyProductById(id) {
    p = findById(id);
    indexProd = arrayProducts.indexOf(p);
    if (arrayProducts.includes(p)) {
        arrayProducts.splice(indexProd, indexProd + 1);
        return true;
    }
    return false;
}

//Funcion para buscar productos por id. Devuelve un solo objeto ya que el id es unico e incremental.
function findById(idFind) {
    for (let i = 0; i < arrayProducts.length; i++) {
        if (arrayProducts[i].id == idFind) return arrayProducts[i];
    }
    return "Not found";
}

//Funcion para buscar productos por nombre. Esta funcion es diferente a buscar por id ya que pueden haber varios productos con el mismo nombre.
function findByName(n) {
    var products = [];
    for (let i = 0; i < arrayProducts.length; i++) {
        if (arrayProducts[i].name == n) products.push(arrayProducts[i]);
    }
    return products;
}

//Funciones que ordenan de mayor a menor precio y viceversa.Cada funcion retorna la lista ordenada;
function sortHighest() {
    return arrayProducts.sort(function (a, b) { return b.price - a.price });
}
function sortLowest() {
    return arrayProducts.sort(function (a, b) { return a.price - b.price });
}

//Evento on click que guarda los datos y crea un producto.
function submitResponse() {
    var nameForm = document.getElementById("nameProduct").value;
    if (!inputNameValidation(nameForm) && document.getElementById("pNameForm") == null){
        const divNameForm = document.getElementById("divName")
        let p = document.createElement("p");
        p.setAttribute("id","pNameForm");
        p.innerHTML = "The name product is too short"
        divNameForm.append(p);
        return false;
    }else if (inputNameValidation(nameForm)){
        document.getElementById("pNameForm").remove();
    }
    var descForm = document.getElementById("descProduct").value;
    var priceForm = parseFloat(document.getElementById("priceProduct").value);
    return new Product(nameForm, descForm, priceForm);
}

//Funcion para validar el input del nombre del producto.
function inputNameValidation(inputName){
    if(inputName.length <= 2)return false;
    return true;
}

//Evento listener que escucha cada vez que el submit se toca, usamos funcion submitResponse().
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(submitResponse != false)localStorage.setItem(generateId(), JSON.stringify(submitResponse()));
})
