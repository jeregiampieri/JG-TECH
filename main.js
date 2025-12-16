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
// Icono del menú (para resoluciones más pequeñas)
const iconoMenu = document.querySelector(".menu-label")
// Navbar del menú 
const navbarMenu = document.querySelector(".navbar-lista")
// Overlay
const overlay = document.querySelector(".overlay")
// Productos dentro del carrito
const carritoProductos = document.querySelector(".carrito-contenedor-productos")

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

// Función para abrir el carrito de compras
const abrirMenuCarrito = (click) => {
    // Lo uso para capturar el div, ya que tiene otras etiquetas dentro, entonces cuando se hace click, closest va subiendo entre los ancestros
    // del elemento al que se le hizo click hasta encontrar aquel ancestro que cumpla con el (selector)
    if (click.target.closest(".carrito-label")){
        if (navbarMenu.classList.contains("abrir-menu")){
            navbarMenu.classList.remove("abrir-menu")
            overlay.classList.toggle("esconder")
        }
        carritoCompras.classList.toggle("abrir-carrito")
        overlay.classList.toggle("esconder")
    }
}

// Función para abrir el menú responsive
const abrirMenu = (click) => {
    if (click.target.closest(".menu-label")){
        if (carritoCompras.classList.contains("abrir-carrito")){
            carritoCompras.classList.remove("abrir-carrito")
            overlay.classList.toggle("esconder")
        }
        navbarMenu.classList.toggle("abrir-menu")
        overlay.classList.toggle("esconder")
    }
}

// Función para cerrar carrito de compras y/o menu responsive con scroll
const cerrarScroll = () => {
    if (!carritoCompras.classList.contains("abrir-carrito") && 
        !navbarMenu.classList.contains("abrir-menu")){
        return
    }
    carritoCompras.classList.remove("abrir-carrito")
    navbarMenu.classList.remove("abrir-menu")
    overlay.classList.toggle("esconder")
}

// Función para cerrar el menú responsive cuando se hace un click donde no hay scroll
const cerrarClick = (click) => {
    if (click.target.classList.contains("menu-opciones")){
        if (navbarMenu.classList.contains("abrir-menu")){
            navbarMenu.classList.remove("abrir-menu")
            overlay.classList.toggle("esconder")
        }
    }
}

// Función para cerrar carrito de compras y/o menú responsive al hacer click en el overlay
const cerrarClickOverlay = () => {
    navbarMenu.classList.remove("abrir-menu")
    carritoCompras.classList.remove("abrir-carrito")
    overlay.classList.add("esconder")
}

const renderCarrito = () => {
    if (carrito.length === 0){
        carritoProductos.innerHTML = `
        <p>No hay productos en el carrito</p>
        `
        return
    }
        carritoProductos.innerHTML = carrito.map((producto) => 
        productosTemplateCarrito(producto).join(""))

}

const productosTemplateCarrito = (producto) => {
    let {id, name, precio, cardImg, cantidad} = producto
    return `
        <div class= "carrito-contenedor-producto">
            <img src=${cardImg} alt="${name}">
            <div class= "carrito-contenedor-producto-info>
                <p>${name}</p>
            </div>

        </div>
        `
}

// Función inicializadora, es la puerta de entrada de la aplicación, lo primero que se ejecuta en la misma, acá se coloca lo que quiero que se ejecute ni bien arranca la página
const init = () => {
    renderProducts(appState.products[0])
    verMasBoton.addEventListener("click", verMasProductos)
    filtrosContainer.addEventListener("click", aplicarFiltro)
    iconoCarro.addEventListener("click", abrirMenuCarrito)
    iconoMenu.addEventListener("click", abrirMenu)
    window.addEventListener("scroll", cerrarScroll)
    navbarMenu.addEventListener("click", cerrarClick)
    overlay.addEventListener("click", cerrarClickOverlay)
    document.addEventListener("DOMContentLoaded", renderCarrito)
    

}

init()
console.log(carritoProductos)