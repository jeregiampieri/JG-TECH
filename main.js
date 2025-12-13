// Tomo el contenedor de los productos
const productsContainer = document.querySelector(".productos-contenedor") 
// Tomo el boton ver más 
const verMasBoton = document.querySelector(".boton-ver-mas")

// Primero que todo, necesito traer el localStorage por si han quedado productos almacenados en el browser del usuario
// Como guardo los datos como 'cart' en el localStorage, entonces debo usar el mismo nombre para recuperarlos del localStorage
let carrito = JSON.parse(localStorage.getItem("cart")) || [] //recupero todos los datos provenientes del localStorage, y los transformo en su formato original

const guardarCarrito = () => {
    localStorage.setItem("cart", JSON.stringify(carrito)) //Almaceno el carrito dentro del localStorage, transformo los datos a String para que los almacene el localStorage
}

// Función que permite renderizar los productos, significa que tomo los datos (productos) para que estos sean visibles en la aplicación
const renderProducts = (listaProductos) =>{
    productsContainer.innerHTML += listaProductos.map(productosTemplate).join("")
}

// Para transformar cada uno de los productos en el formato HTML
const productosTemplate = (producto) => {
    const {id, name, precio, categoria, cardImg} = producto //Desestructuracion del producto que llega por parámetro, esto permite ahorrar tiempo
    return `<div class="card-producto"> 
                <img src=${cardImg} alt="Imagen de gabinete">
                <p>${name}</p>
                <div class="detalle">
                    <p class="precio">${precio}</p>
                    <button
                    data-id= '${id}'
                    data-name= '${name}'
                    data-precio= '${precio}'
                    data-categoria= '${categoria}'>Comprar</button> 
                </div>
            </div>`;
}

const verMasProductos = () => {
    appState.currentProductsIndex += 1
    if (appState.currentProductsIndex > appState.cantMaxPage){
        currentProductsIndex = appState.cantMaxPage
        renderProducts(appState.products[currentProductsIndex])
    }
        renderProducts(appState.products[appState.currentProductsIndex])
        
}




// Función inicializadora, es la puerta de entrada de la aplicación, lo primero que se ejecuta en la misma, acá se coloca lo que quiero que se ejecute ni bien arranca la página
const init = () => {
    renderProducts(appState.products[0])
    verMasBoton.addEventListener("click", verMasProductos)
}

init()