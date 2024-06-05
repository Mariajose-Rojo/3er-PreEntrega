{/* <div id="card_container"></div>
<div id="carrito"></div> 
<aside id="btn_carrito"></aside>*/}

// Obtengo los elementos de HTML por su ID
const container = document.getElementById("card_container");
container.className = "c_container";
const verCarrito = document.getElementById("ver_carrito");
const carrito_contenedor = document.getElementById("carrito_contenedor");

const cantCarrito = document.getElementById ("cantidadCarrito"); //contador items del carrito

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// let carrito=[];

//___________FUNCIONES______________________________
function agregar_Carrito(hamburguesa) {
    let agregar_burguer = productos.find(el => el.id === hamburguesa.id);
    let productoEnCarrito = carrito.find(el => el.id === agregar_burguer.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1; //si es el mismo producto aumenta la cant
    } else {
        agregar_burguer.cantidad = 1;
        carrito.push(agregar_burguer);
    }

    // carrito[productoEnCarrito]= {...hamburguesa};
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
    boton.onclick = () => agregar_Carrito(Hamburguesa);

    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(precio);
    card.appendChild(texto);
    card.appendChild(boton);

    contenedor.appendChild(card);
}


//_____________GENERAL______________________

productos.forEach(el => crear_Card(el, container)); //creo todas las cards por producto

const saveLocal= () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};





