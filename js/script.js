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
    for (let i = 0; i < localStorage.length; i++) {
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

//Funcion para validar el input del nombre del producto. (que la la longitud del nombre sea como minimo 3).
function inputNameValidation(inputName) {
    return (inputName.length > 2);
}

//Funcion para validar que el precio del producto sea mayor a 5$
function inputPriceValidation(inputPrice) {
    return (inputPrice > 5);
}

//Metodo para printear un parrafo rojo que nos indica que la longitud del nombre es muy corta.
function printShortNameValidation() {
    const divNameForm = document.getElementById("divName")
    let p = document.createElement("p");
    p.setAttribute("id", "pNameForm");
    p.innerHTML = "The name product is too short"
    divNameForm.append(p);
}

//Metodo para printear un parrafo rojo que nos indica que el precio debe ser mayor a 5.
function printLowPriceValidation(){
    const divPriceForm = document.getElementById("divPrice")
    let p = document.createElement("p");
    p.setAttribute("id", "pPriceForm");
    p.innerHTML = "The price product must be greather than '5'."
    divPriceForm.append(p);
}


//Funcion que se ejecuta cada vez que se toca el boton submit, guarda los datos de un producto, contiene varias validaciones y retorna un producto nuevo.
function submitResponse() {
    var nameForm = document.getElementById("nameProduct").value;
    var descForm = document.getElementById("descProduct").value;
    var priceForm = parseFloat(document.getElementById("priceProduct").value);
    if (inputNameValidation(nameForm) && inputPriceValidation(priceForm))return new Product(nameForm, descForm, priceForm);
    return false;
}

//Funcion que se ejecuta cuando se cambia el input que se refiere al nombre del producto.
function eventInputNameForm(){
    const pName = document.getElementById("pNameForm")
    const inputNameForm = document.getElementById("nameProduct").value;
    if (!inputNameValidation(inputNameForm) && pName == null)printShortNameValidation();
    else if (inputNameValidation(inputNameForm) && pName != null)pName.remove()
}

function eventInputPriceForm(){
    const pPrice = document.getElementById("pPriceForm")
    const inputPriceForm = document.getElementById("priceProduct").value
    if(!inputPriceValidation(inputPriceForm) && pPrice == null)printLowPriceValidation()
    else if (inputPriceValidation(inputPriceForm) && pPrice != null)pPrice.remove()
}

 
//Eventos 

//Evento listener que escucha cada vez que el submit se toca, usamos funcion submitResponse().
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (submitResponse() != false){
        localStorage.setItem(generateId(), JSON.stringify(submitResponse()))

    }
    else{
        if (document.getElementById("divValidation") == null){
        const divValidation = document.createElement("div")
        divValidation.setAttribute("id","divValidation")
        divValidation.innerHTML = "<p>Error validations</p>"
        document.body.append(divValidation)}
    }
})

//Evento que escucha los cambios en el input que se refiere al nombre del producto.
const inputNameForm = document.getElementById("nameProduct")

inputNameForm.addEventListener("change",(e) =>{
    eventInputNameForm();
});

//Evento que escucha los cambios en el input del precio.
const inputPriceForm = document.getElementById("priceProduct")

inputPriceForm.addEventListener("change",(e) =>{
    eventInputPriceForm();
});