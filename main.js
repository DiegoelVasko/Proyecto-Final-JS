const listado = document.getElementById("contenedorProductos");
const listadoProductos = "json/productos.json";

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            
            listado.innerHTML += `
            
            <div class="card">
                <div id="carouselExampleAutoplaying" class="carousel slide row g-0" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active ">
                            <img class="card-img-top img-fluid rounded-start" src=${producto.img} class="d-block w-100" alt="...">
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
                    <h3 class="card-title"> Marca: ${producto.marca} </h3>
                    <h5 class="card-title"> Modelo: ${producto.modelo}</h5>
                    <p class= "card-text"> ${producto.descripcion}<p>
                    <p class= "card-text"> Precio: ${producto.precio} </p>
                    <p class= "card-text"> Stock: ${producto.stock} </p>
                    <button class= "button" id = "boton${producto.id}" >Agregar al Carrito</button>
                </div>  
            </div>
            `
        })
    })
    .catch(error => console.log(error))
    .finally( () => {
        console.log("Proceso Finalizado ahhhhh");
    })