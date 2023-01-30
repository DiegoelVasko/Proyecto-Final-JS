const listado = document.getElementById("contenedorProductos");
const listadoProductos = "json/productos.json";

// Carrito de compras: 

let carrito = [];

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            
            listado.innerHTML += `
            
            <div class="card">
                <div id="carouselExampleAutoplaying" class="carousel slide row g-0" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active ">
                            <img class="card-img-top img-fluid rounded-start" src=${producto.img1} class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item ">
                            <img class="card-img-top img-fluid rounded-start" src=${producto.img2} class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item ">
                            <img class="card-img-top img-fluid rounded-start" src=${producto.img3} class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item ">
                            <img class="card-img-top img-fluid rounded-start" src=${producto.img4} class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>    
                <div class="card-body">
                    <h3 class="card-brand"> ${producto.marca} </h3>
                    <h5 class="card-title"> Modelo: ${producto.modelo}</h5>
                    <p class= "card-text"> ${producto.descripcion}<p>
                    <p class= "card-price"> Precio: U$S ${producto.precio} </p>
                    <p id="stock" class= "card-text"></p>
                    <button class= "button botonAgregar" id='boton${producto.id}' >Agregar al Carrito</button>
                </div>  
            </div>
            `
        })
    })
    .catch(error => console.log(error))
    .finally( () => {
        console.log(listadoProductos);
    })


console.log(listadoProductos)


/*//Función agregar al carrito: 

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
        
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        //Trabajamos con el localStorage: 
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();
*/


/*
//MOSTRAR EL CARRITO DE COMPRAS. 

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click",  () => {
    mostrarCarrito();
})
*/



/*
//Función para mostar el carrillllooo:

const mostrarCarrito = () => {
    //que trucazo!
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class = "card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                            <div class ="card-body">
                                <h5> ${producto.nombre} </h5>
                                <p> ${producto.precio} </p>
                                <p> ${producto.cantidad} </p>
                                <button class= "btn colorBoton" id ="eliminar${producto.id}" >Eliminar producto</button>
                            </div>
                        </div>`

        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito:

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}
*/



/*
//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find( producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();

    //localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

*/



/*

//VACIAMOS TODO EL CARRITO DE COMPRAS: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //localStorage: 
    localStorage.clear();
}
*/


/*
//Mostramos mensaje con el total de la compra: 

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}*/