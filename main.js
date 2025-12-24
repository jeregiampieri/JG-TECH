import { carritoInit} from "./assets/carrito/carrito.js"
import { productosInit } from "./assets/productos/productos.js"
import { menuInit } from "./assets/interfaces-menu/menu.js"

// Función inicializadora, es la puerta de entrada de la aplicación, lo primero que se ejecuta en la misma, acá se coloca lo que quiero que se ejecute ni bien arranca la página
const init = () => {
    productosInit()
    carritoInit()
    menuInit()
}

init()



