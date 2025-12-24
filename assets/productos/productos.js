import { appState, productosData } from "../data/data.js"
import { agregarProducto } from "../carrito/carrito.js"

// Contenedor de los productos
const productsContainer = document.querySelector(".productos-contenedor") 
// Boton ver más 
const verMasBoton = document.querySelector(".boton-ver-mas")
// Contenedor de los filtros
const filtrosContainer = document.querySelector(".filtros-contenedor")
// Botones de los filtros 
const botones = document.querySelectorAll(".categorias")

// Función que permite renderizar los productos, significa que tomo los datos (productos) para que estos sean visibles en la aplicación
const renderProducts = (listaProductos) =>{
    productsContainer.innerHTML += listaProductos.map(productosTemplate).join("")
}

// Para transformar cada uno de los productos en el formato HTML
const productosTemplate = (producto) => {
    const {id, name, precio, categoria, cardImg} = producto //Desestructuracion del producto que llega por parámetro, esto permite ahorrar tiempo
    return `<div class="card-producto"> 
                <img src=${cardImg} alt=""/>
                <p>${name}</p>
                <div class="detalle">
                    <p class="precio">$${precio}</p>
                    <button class= "comprar-producto"
                    data-id= '${id}'
                    data-img= '${cardImg}'
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

export const productosInit = () => {
    renderProducts(appState.products[0])
    verMasBoton.addEventListener("click", verMasProductos)
    filtrosContainer.addEventListener("click", aplicarFiltro)
    productsContainer.addEventListener("click", agregarProducto)
}