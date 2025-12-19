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
// Contenedor del carrito
const carritoProductos = document.querySelector(".carrito-contenedor-productos")
// Total del carrito
const totalCarrito = document.querySelector(".carrito-total")
// Botón comprar del carrito
const botonComprarCarrito = document.querySelector(".boton-comprar")
// Botón vaciar del carrito
const botonVaciarCarrito = document.querySelector(".boton-vaciar")
// Contenedor del modal
const modal = document.querySelector(".agregar-modal")
// Producto del carrito
const productoDelCarrito = document.querySelector(".carrito-contenedor-producto")



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

// Función para renderizar el carrito
const renderCarrito = () => {
    if (carrito.length === 0){
        carritoProductos.innerHTML = `
        <p>No hay productos en el carrito</p>
        `
        return
    }
        carritoProductos.innerHTML = carrito.map(producto => 
        productosTemplateCarrito(producto)).join("")
}

// Función para actualizar el total del carrito
const actualizarTotal = () => {
    if (!carrito.length) {
        totalCarrito.innerHTML = 0
        return
    } 
    const total = carrito.reduce((acumulador, producto) => {
        // El return es necesario, ya que ese acumulador que retorna la función es el parámetro acumulador que va a utilizar para la próxima 
        // iteración
        return acumulador += Number(producto.precio) * producto.cantidad
    }, 0)

    totalCarrito.innerHTML = total.toFixed(2)
}

// Función para armar la estructura de los productos que se agregan en el carrito
const productosTemplateCarrito = (producto) => {
    // Tengo que capturar el id en los botones para mantener la persistencia, disminuir e incrementar la cantidad del producto
    const {id, name, precio, img, cantidad} = producto
    return `
        <div class="carrito-contenedor-producto">
            <img src=${img} alt=""/>
            <div class="carrito-contenedor-producto-info">
                <h2 class="carrito-contenedor-producto-titulo">${name}</h2>
                <p class="carrito-contenedor-producto-precio">$${precio}</p>
            </div>
            <div class= "carrito-cotenedor-producto-botones">
                <span class= "disminuir" data-id=${id}>-</span>
                <span class= "cantidad">${cantidad}</span>
                <span class= "aumentar" data-id=${id}>+</span>
            </div>
        </div>
        `
}

// Función para actualizar la burbuja del carrito
const actualizarBurbujaCarrito = () => {
    bubbleCarrito.innerHTML = carrito.reduce((acumulador, producto) => {
        return acumulador += producto.cantidad
    }, 0)
}

// Función para actualizar los botones del carrito
const estadoBoton = (boton) => {
    if (!carrito.length){
        boton.classList.add("deshabilitar")
        return
    }
    boton.classList.remove("deshabilitar")   
}

// Función para actualizar el estado del carrito
const actualizarCarrito = () => {
    guardarCarrito();
    renderCarrito();
    actualizarTotal();
    actualizarBurbujaCarrito();
    estadoBoton(botonComprarCarrito);
    estadoBoton(botonVaciarCarrito);
}

// Función para agregar productos al carrito de compras
const agregarProducto = (click) => {
    const boton = click.target.classList.contains("comprar-producto")
    if (!boton){
        return
    }
    const productoSeleccionado = crearDataProducto(click.target.dataset)
    if (!existeProductoCarrito(productoSeleccionado.id).length){
        crearCartProducto(productoSeleccionado) //Estoy agregando el producto al carrito, y de paso se le agrega el atributo cantidad
        mensajeModal("Se agregó el producto exitosamente al carrito")
    } else{
        agregarUnidadProducto(productoSeleccionado) 
        mensajeModal("Se agregó una unidad con éxito al carrito")
    }
    // Como los métodos de arriba (crearCartProducto y agregarUnidadProducto) manipulan al carrito entonces es necesario actualizarlo
    actualizarCarrito()
}

// Función para crear la data del producto
const crearDataProducto = (producto) => {
    const {id, img, name, precio} = producto
    return {id, img, name, precio}
}

// Función para agregar una unidad de un producto que ya existe
const agregarUnidadProducto = (producto) => {
    carrito.forEach((item) => {
        if (item.id === producto.id){
            item.cantidad += 1
        }
    })
}

const crearCartProducto = (producto) => {
    carrito = [...carrito, {...producto, cantidad: 1}]
}

// Función para comprobar si en el carrito existen productos en base al id del producto
const existeProductoCarrito = (id) => {
    return carrito.filter((producto) => {
        return producto.id === id
    })
}

// Función para mostrar el mensaje del modal al usuario
const mensajeModal = (mensaje) => {
    modal.classList.remove("esconder-modal")
    modal.innerHTML =  
    `<p>
        ${mensaje}
    </p>`
    setTimeout(() => {
        modal.classList.add("esconder-modal")
    }, 1000)
}

// Función para aumentar la cantidad del producto desde el carrito
const modificarCantidadProducto = (click) => {
    const id = click.target.dataset.id
    carrito.forEach((producto) => {
        if (producto.id === id){
            if (click.target.classList.contains("aumentar")){
                producto.cantidad += 1
                actualizarCarrito()
                mensajeModal("Se agregó una unidad con éxito al carrito")

            }else if (click.target.classList.contains("disminuir")){
                if (producto.cantidad >= 2){
                    producto.cantidad -= 1
                    mensajeModal("Se quitó una unidad con éxito del carrito")
                    }
                else if (producto.cantidad === 1){
                    if(window.confirm("¿Desea eliminar el producto del carrito?")){
                        eliminarProductoCart(producto)
                    }
                }
                actualizarCarrito()
            }
        } 
    })
}

// Función para eliminar productos del carrito desde sus cards
const eliminarProductoCart = (producto) => {
    carrito = carrito.filter((item) => {
        return item.id !== producto.id
    })
}

// Función para la compra del producto del carrito
const accionProductoCarrito = (click) => {
    if (click.target.classList.contains("boton-comprar") && carrito.length){
        if (window.confirm("¿Desea comprar estos productos?")){
            window.alert("¡La compra se realizo con éxito! ¡Muchisímas gracias!")
            carrito = []
            actualizarCarrito()
        }
    } 
    else if (click.target.classList.contains("boton-vaciar") && carrito.length){
        if (window.confirm("¿Está seguro que desea vaciar el carrito?")){
            carrito = []
            actualizarCarrito()
        }
    }
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
    // MUY IMPORTANTE estos dos addEventListener al document, es necesario renderizar el carrito y actualizar el total APENAS se cargue el dom
    // Apenas se carga el DOM en el documento, se ejecuta la función de renderizar el carrito
    document.addEventListener("DOMContentLoaded", renderCarrito)
    // Lo hago para que me muestre el total del carrito ni bien arranque la aplicación y tome los datos que vienen del localStorage
    document.addEventListener("DOMContentLoaded", actualizarTotal)
    productsContainer.addEventListener("click", agregarProducto)
    carritoProductos.addEventListener("click", modificarCantidadProducto)
    carritoCompras.addEventListener("click", accionProductoCarrito)
    actualizarBurbujaCarrito()
    estadoBoton(botonComprarCarrito)
    estadoBoton(botonVaciarCarrito)
    localStorage.removeItem("cart")
}

init()

