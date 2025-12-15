// Contenedor de los productos
const productsContainer = document.querySelector(".productos-contenedor") 
// Boton ver más 
const verMasBoton = document.querySelector(".boton-ver-mas")
// Contenedor de los filtros
const filtrosContainer = document.querySelector(".filtros-contenedor")
// Botones de los filtros 
const botones = document.querySelectorAll(".categorias")
// Icono del carrito
const iconoCarro = document.querySelector(".carrito-label")
// Burbuja del carrito
const bubbleCarrito = document.querySelector(".cart-bubble") 
// Carrito de compras
const carritoCompras = document.querySelector(".carrito-compras")

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

// Permite mostrar productos a medida que el usuario hace click en el botón ver más, y oculta dicho botón cuando llega al máximo de productos
const verMasProductos = () => {
    appState.currentProductsIndex += 1
    if (appState.currentProductsIndex === appState.cantMaxPage - 1){
        verMasBoton.classList.add("esconder")        
    } 
        renderProducts(appState.products[appState.currentProductsIndex])
}

// Permite manejar la visibilidad del botón ver más en base a si hay filtros activos o no
const verMasVisibilidad = () => {
    if (!appState.activeFilter){
        verMasBoton.classList.remove("esconder")
        return
    }
    verMasBoton.classList.add("esconder")
}

// Función para obtener el array de productos en base al filtro y renderizarlos
const filtrarProductos = (filtro) => {
    let productosFiltro = []
    productosData.forEach((producto) => {
        if (producto.categoria === filtro){
            productosFiltro.push(producto)
        }
    })
    renderProducts(productosFiltro)
}

// Función para aplicar los filtros
const aplicarFiltro = (click) => {
    const boton = click.target.closest(".categorias")
    if (boton.classList.contains("activo")){
        boton.classList.remove("activo")
        productsContainer.innerHTML = ""
        renderProducts(appState.products[0])
        appState.activeFilter = null
        verMasVisibilidad()
        return
    }
    botones.forEach((btn) => btn.classList.remove("activo") )
    appState.activeFilter = boton.dataset.categoria
    boton.classList.add("activo")
    productsContainer.innerHTML = ""
    verMasVisibilidad()
    if (appState.activeFilter){
        verMasVisibilidad()
        filtrarProductos(appState.activeFilter)
        appState.currentProductsIndex = 0
        return
    }
    renderProducts(appState.products[0])
}

const abrirMenuCarrito = (click) => {
    // Lo uso para capturar el div, ya que tiene otras etiquetas dentro, entonces cuando se hace click, closest va subiendo entre los ancestros
    // del elemento al que se le hizo click hasta encontrar aquel ancestro que cumpla con el (selector)
    if (click.target.closest(".carrito-label")){
        carritoCompras.classList.toggle("esconder")
        return
    }
    return
}

// Función inicializadora, es la puerta de entrada de la aplicación, lo primero que se ejecuta en la misma, acá se coloca lo que quiero que se ejecute ni bien arranca la página
const init = () => {
    renderProducts(appState.products[0])
    verMasBoton.addEventListener("click", verMasProductos)
    filtrosContainer.addEventListener("click", aplicarFiltro)
    iconoCarro.addEventListener("click", abrirMenuCarrito)
}

init()