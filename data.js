// Definición del conjunto de objetos (es un array, con definición de objetos dentro)

// Array de objetos que contiene todos los productos
const productosData = [
    // Objeto 1
    {
        id: 1,
        name: "Gabinete Gamemax Nova N6 Mid Tower ATX ARGB",
        precio: 44900,
        user: "jeremias1",
        categoria: "gabinete",
        cardImg: "./img/imagenGabinete1.png"
    },
    // Objeto 2
    {
        id: 2,
        name: "Gabinete Gamdias Aura GC2 Elite ARGB White",
        precio: 62990,
        user: "jeremias2",
        categoria: "gabinete",
        cardImg: "./img/gabinete2.png"
    },
    // Objeto 3
    {
        id: 3,
        name: "Gabinete Gamemax Nova N5 Mid Tower ATX RGB",
        precio: 49990,
        user: "jeremias3",
        categoria: "gabinete",
        cardImg: "./img/gabinete3.png"
    },
    // Objeto 4
    {
        id: 4,
        name: "Gabinete Gamemax Storm TG ARGB Black X500810",
        precio: 65990,
        user: "jeremias4",
        categoria: "gabinete",
        cardImg: "./img/gabinete4.png"
    },
    // Objeto 5
    {
        id: 5, 
        name: "Gabinete Gamdias Athena M6 Lite C/Coolers X4 TG White",
        precio: 77990,
        user: "jeremias5",
        categoria: "gabinete",
        cardImg: "./img/gabinete5.png"
    },
    // Objeto 6
    {
        id: 6,
        name: "Gabinete Gamemax Typhoon Coc Fan ARGB ATC A3610",
        precio: 79990,
        user: "jeremias6",
        categoria: "gabinete",
        cardImg: "./img/gabinete7.png"
    },
    // Objeto 7
    {
        id: 7,
        name: "Gabinete Cooler Master Elite 301 TG White A870B",
        precio: 82990,
        user: "jeremias7",
        categoria: "gabinete",
        cardImg: "./img/gabinete8.png"
    },
    // Objeto 8
    {
        id: 8,
        name: "Gabinete Gamemax Black Hole A363-TB C/Coolers ARGB",
        precio: 89990,
        user: "jeremias8",
        categoria: "gabinete",
        cardImg: "./img/gabinete9.png"
    },
    // Objeto 9
    {
        id: 9,
        name: "Placa de video Asus Nvidia Geforce RTX 3050 Dual 06G OC D6",
        precio: 297999,
        user: "jeremias9",
        categoria: "grafica",
        cardImg: "./img/grafica1.png"
    },
    // Objeto 10
    {
        id: 10,
        name: "Placa de video Gigabyte Geforce RTX 3060 Windforce OC 12GB",
        precio: 534999,
        user: "jeremias10",
        categoria: "grafica",
        cardImg: "./img/grafica2.png"
    },
    // Objeto 11
    {
        id: 11,
        name: "Placa de video MSI Nvidia Geforce GTX 4060 Ventus 2X Black",
        precio: 549999,
        user: "jeremias11",
        categoria: "grafica",
        cardImg: "./img/grafica3.png"
    },
    // Objeto 12
    {
        id: 12,
        name: "Placa de video Palit Nvidia Geforce RTX 5060 TI Dual 8GB GDDR7",
        precio: 619999,
        user: "jeremias12",
        categoria: "grafica",
        cardImg: "./img/grafica4.png"
    },
    // Objeto 13
    {
        id: 13,
        name: "Placa de video Nvidia Geforce RTX 5060 Ti Eagle OC ICE 8GB",
        precio: 701499,
        user: "jeremias13",
        categoria: "grafica",
        cardImg: "./img/grafica5.png"
    },
    // Objeto 14
    {
        id: 14,
        name: "Placa de video MSI Nvidia Geforce RTX 5060 Ti Gaming OC 8GB",
        precio: 790439,
        user: "jeremias14",
        categoria: "grafica",
        cardImg: "./img/grafica7.png"
    },
    // Objeto 15
    {
        id: 15,
        name: "Placa de video Palit Nvidia Geforce RTX 5070 Gamingpro 12GB GDDR7",
        precio: 938999,
        user: "jeremias15",
        categoria: "grafica",
        cardImg: "./img/grafica8.png"
    },
    // Objeto 16
    {
        id: 16,
        name: "Placa de video Gigabyte RTX 5060 Ti Windforce OC 16GB",
        precio: 1044999,
        user: "jeremias16",
        categoria: "grafica",
        cardImg: "./img/grafica9.png"
    },
    // Objeto 17
    {
        id: 17,
        name: "Microprocesador AMD Ryzen 5 5600GT 6/12 4.6GHZ Zen3",
        precio: 182199,
        user: "jeremias17",
        categoria: "microprocesador",
        cardImg: "./img/micro1.png"
    },
    // Objeto 18
    {
        id: 18,
        name: "Microprocesador AMD Ryzen 7 5700G 4.6GHZ AM4",
        precio: 201990,
        user: "jeremias18",
        categoria: "microprocesador",
        cardImg: "./img/micro2.png"
    },
    // Objeto 19
    {
        id: 19,
        name: "Microprocesador CPU AMD Ryzen 5 8600G 6/12 5GHZ AM5",
        precio: 206999,
        user: "jeremias19",
        categoria: "microprocesador",
        cardImg: "./img/micro3.png"
    },
    // Objeto 20
    {
        id: 20,
        name: "Microprocesador AMD Ryzen 5 9600 6/12 5.2GHZ Zen5 Granite Ridge AM5",
        precio: 332999,
        user: "jeremias20",
        categoria: "microprocesador",
        cardImg: "./img/micro4.png"
    },
    // Objeto 21
    {
        id: 21,
        name: "Microprocesador CPU AMD Ryzen 7 8700F 8/16 5GHZ 16MB AM5",
        precio: 360489,
        user: "jeremias21",
        categoria: "microprocesador",
        cardImg: "./img/micro5.png"
    },
    // Objeto 22
    {
        id: 22,
        name: "Microprocesador AMD Ryzen 9 9900X 12/24 5.6GHZ Zen5 Granite Ridgme AM5",
        precio: 647807,
        user: "jeremias22",
        categoria: "microprocesador",
        cardImg: "./img/micro7.png"
    },
    // Objeto 23
    {
        id: 23,
        name: "Microprocesador AMD Ryzen 9 7950X 16/32 5.7GHZ Raphael Zen4 AM5",
        precio: 769999,
        user: "jeremias23",
        categoria: "microprocesador",
        cardImg: "./img/micro8.png"
    },
    // Objeto 24
    {
        id: 24,
        name: "Microprocesador AMD Ryzen 9 9900X3D 12/24 5.5GHZ Zen5 Granite Ridge AM5",
        precio: 895552,
        user: "jeremias24",
        categoria: "microprocesador",
        cardImg: "./img/micro9.png"
    },
    // Objeto 25
    {
        id: 25,
        name: "Auricular Redragon Cronius H21102 RGB Black",
        precio: 41990,
        user: "jeremias25",
        categoria: "auriculares",
        cardImg: "./img/auris1.png"
    },
    // Objeto 26
    {
        id: 26,
        name: "Auricular Redragon Cronius H21102 RGB White",
        precio: 38990,
        user: "jeremias26",
        categoria: "auriculares",
        cardImg: "./img/auris2.png"
    },
    // Objeto 27
    {
        id: 27,
        name: "Auricular HyperX Cloud Stinger Core PS5 Version 2 White",
        precio: 78320,
        user: "jeremias27",
        categoria: "auriculares",
        cardImg: "./img/auris3.png"
    },
    // Objeto 28
    {
        id: 28,
        name: "Auricular Redragon Zeus X Stereo White RGB",
        precio: 90990,
        user: "jeremias28",
        categoria: "auriculares",
        cardImg: "./img/auris4.png"
    },
    // Objeto 29
    {
        id: 29,
        name: "Auricular Inalambrico HyperX Stinger 2 Black",
        precio: 153990,
        user: "jeremias29",
        categoria: "auriculares",
        cardImg: "./img/auris5.png"
    },
    // Objeto 30
    {
        id: 30,
        name: "Auricular Inalambrico Logitech G A50 X Negro Lightspeed",
        precio: 708740,
        user: "jeremias30",
        categoria: "auriculares",
        cardImg: "./img/auricular7.png"
    },
    // Objeto 31
    {
        id: 31,
        name: "Auricular Inalambrico Logitech G A50 X Blanco Lightspeed",
        precio: 708740,
        user: "jeremias31",
        categoria: "auriculares",
        cardImg: "./img/auris8.png"
    },
    // Objeto 32
    {
        id: 32,
        name: "Auricular Inalambrico Logitech G735 Lighspeed RGB White",
        precio: 405990,
        user: "jeremias32",
        categoria: "auriculares",
        cardImg: "./img/auris10.png"
    }
]

// Paginado de los productos

// Fin del array de objetos

// -----PRUEBAS PARA CONTROLAR QUE ESTE CORRECTAMENTE CARGADO------

// Objetos GABINETES

// Recordar que filter siempre espera que el callback le devuelva true/false, por eso es necesario el return
// const pruebaObjetosGabinete = productosData.filter((producto) => {
    // return producto.categoria === "gabinete"
// })
// console.log(pruebaObjetosGabinete)

// Objetos GRÁFICAS (placas de video)

// Traigo un array con todos los objetos que cumplan con la categoria grafica
// const pruebaObjetosGrafica = productosData.filter((producto) => {
    // return producto.categoria === "grafica"
// })

// Al array resultante lo recorro y solamente muestro el ID por consola, es más fácil de visualizar
// pruebaObjetosGrafica.forEach((producto) => {
    // console.log(producto.id)
// })

// Objetos MICROPROCESADORES

// const pruebaObjetosMicro = productosData.filter((producto) => {
    // return producto.categoria === "microprocesador"
// })

// pruebaObjetosMicro.forEach((producto) => {
    // console.log(producto.id)
// })

// Objetos AURICULARES

// const pruebaObjetosAuris = productosData.filter((producto) => {
    // return producto.categoria === "auriculares"
// })

// pruebaObjetosAuris.forEach((producto) => {
    // console.log(producto.id)
// })