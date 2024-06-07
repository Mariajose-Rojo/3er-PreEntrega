
// Obtengo los elementos de HTML por su ID
const container = document.getElementById("card_container");
container.className = "c_container";
const verCarrito = document.getElementById("ver_carrito");
const carrito_contenedor = document.getElementById("carrito_contenedor");

const cantCarrito = document.getElementById("cantidadCarrito"); //contador items del carrito

// libreria Toastify
function alertaToasty(bandera){
    if (bandera){ //uso un flag para q cambie la notificacion
        Toastify({
            text: "Producto agregado con exito!",
            duration: 1000, 
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #910c26, #ed6e4e)",
            },
            }).showToast();
    } else{
        Toastify({
            // text: "Producto quitado con exito!",
            text: "Se quitó el producto!",
            duration: 1000, 
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #4d0813, #ed6e4e)",
            },
            }).showToast();
    }
}


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let productos = []; //declaro el array de forma global

//Funcion asincrona con fetch para obtener el json
const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    productos = data; // Asigno data a los productos

    // console.log(data);

    //creo todas las cards por producto
    data.forEach(el => crear_Card(el, container));
}

function agregar_Carrito(hamburguesa) {
    let agregar_burguer = productos.find(el => el.id === hamburguesa.id);
    let productoEnCarrito = carrito.find(el => el.id === agregar_burguer.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1; //si es el mismo producto aumenta la cant
    } else {
        agregar_burguer.cantidad = 1;
        carrito.push(agregar_burguer);
    }

    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito)); //saveLocal();
    cart_counter();
}

function crear_Card(Hamburguesa, contenedor) {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.className = "c_titulo";
    titulo.innerText = Hamburguesa.nombre;

    const precio = document.createElement("p");
    precio.innerText = `$${Hamburguesa.precio}`;
    precio.className= "precio";

    const imagen = document.createElement("img");
    imagen.className = "img";
    imagen.src = Hamburguesa.imagen;

    const texto = document.createElement("p");
    texto.className = "parrafo";
    texto.innerText = Hamburguesa.descripcion;

    const boton = document.createElement("button");
    boton.className = "boton_compra";
    boton.innerText = "Agregar";
    boton.onclick = () => {
        agregar_Carrito(Hamburguesa);
        alertaToasty(true);  //le agrego la notificacion de toastify en true 
    }

    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(precio);
    card.appendChild(texto);
    card.appendChild(boton);

    contenedor.appendChild(card);
}

function mostrarProductos(productos) {
    container.innerHTML = ''; // Limpiar el contenedor antes de mostrar los productos
    productos.forEach(producto => crear_Card(producto, container));
}

function FiltrarProductos(categoria) {
    const productosFiltrados = productos.filter(item => item.categoria === categoria);
    mostrarProductos(productosFiltrados);
}

// FILTRAR POR CATEGORIA:
const btn_carne = document.getElementById("btn-category-carne");
const btn_veggie = document.getElementById("btn-category-veg");

btn_carne.addEventListener("click", () => {
    FiltrarProductos('carne'); //le paso la categoria a filtrar
});

btn_veggie.addEventListener("click", () => {
    FiltrarProductos('vegetal');
});


getProducts();


const saveLocal= () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// function FiltrarProductos (categoria) {
//     const productsToShow = productos.filter(item => item.categoria === categoria);
//     crear_Card(productsToShow);
// }

// // FILTRAR POR CATEGORIA:
// const btn_carne= document.getElementById("btn-category-carne");
// const btn_veggie= document.getElementById("btn-category-veg");
// // les pongo el evento que invoca a la funcion:
// btn_carne.addEventListener("click", ()=>{
//     FiltrarProductos('carne'); //le paso la categoria a filtrar
// });

// btn_veggie.addEventListener("click", ()=>{
//     FiltrarProductos('vegetal');
// })




