{/* <div id="card_container"></div>
<div id="carrito"></div> 
<aside id="btn_carrito"></aside>*/}

// Obtengo los elementos de HTML por su ID
const container = document.getElementById("card_container");
container.className = "c_container";
const verCarrito = document.getElementById("ver_carrito");
const carrito_contenedor = document.getElementById("carrito_contenedor");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// let carrito=[];

//___________FUNCIONES______________________________
function agregar_Carrito(hamburguesa) {
    let agregar_burguer = productos.find(el => el.id === hamburguesa.id);
    let productoEnCarrito = carrito.find(el => el.id === agregar_burguer.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        agregar_burguer.cantidad = 1;
        carrito.push(agregar_burguer);
    }

    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function crear_Card(Hamburguesa, contenedor) {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.className = "c_titulo";
    titulo.innerText = Hamburguesa.nombre;

    const precio = document.createElement("p");
    precio.innerText = `$${Hamburguesa.precio}`;

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
    card.appendChild(precio);
    card.appendChild(imagen);
    card.appendChild(texto);
    card.appendChild(boton);

    contenedor.appendChild(card);
}


//_____________GENERAL______________________

productos.forEach(el => crear_Card(el, container)); //creo todas las cards por producto

verCarrito.addEventListener("click", () => {
    carrito_contenedor.innerHTML = ''; // Limpio el contenido previo del carrito

    const carrito_header = document.createElement("div");
    carrito_header.className = "carr_header";
    carrito_header.innerHTML = `
        <h1 class="carr_title">Carrito</h1>
    `;
    carrito_contenedor.appendChild(carrito_header);

    const btn_cierre = document.createElement("button");
    btn_cierre.className = "btn_x";
    btn_cierre.innerText = "X";
    btn_cierre.addEventListener("click", () => {
        carrito_contenedor.style.display = "none"; // Oculto el carrito cuando hago clic en el botón de cierre
    });
    carrito_contenedor.appendChild(btn_cierre);

    carrito.forEach((producto) => {
        let carrito_content = document.createElement("div");
        carrito_content.className = "contenido_carr";
        carrito_content.innerHTML = `
            <h4>${producto.nombre}</h4>
            <p>Precio: ${producto.precio} $</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
        carrito_contenedor.append(carrito_content);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const total_compra = document.createElement("div");
    total_compra.innerText = `Total a pagar: ${total} $`;
    total_compra.className = "tot_compra";
    carrito_contenedor.append(total_compra);

    carrito_contenedor.style.display = "block"; // Muestro el carrito
});

