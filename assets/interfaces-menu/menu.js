import { carritoCompras } from "../carrito/carrito.js"

// Icono del menú (para resoluciones más pequeñas)
const iconoMenu = document.querySelector(".menu-label")
// Navbar del menú 
const navbarMenu = document.querySelector(".navbar-lista")
// Overlay
const overlay = document.querySelector(".overlay")
// Icono del carrito
const iconoCarro = document.querySelector(".carrito-label")

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
    if (!carritoCompras.classList.contains("abrir-carrito") || 
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

export const menuInit = () => {
    iconoCarro.addEventListener("click", abrirMenuCarrito)
    iconoMenu.addEventListener("click", abrirMenu)
     navbarMenu.addEventListener("click", cerrarClick)
    overlay.addEventListener("click", cerrarClickOverlay)
    window.addEventListener("scroll", cerrarScroll)
}