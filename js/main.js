class Producto {
    constructor(id, marca, modelo, precio, stock, img1, img2, img3, img4, descripcion) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.descripcion = descripcion;
        this.cantidad = 1; 
    }
}

const producto1 = new Producto (
    1, 
     "ADIDAS",
     "D.O.N ISSUE 3 'SAY CHEESE'",
     120,
     3,
     "img/adidas_don_issue_3_1.jpg",
     "img/adidas_don_issue_3_3.jpg",
     "img/adidas_don_issue_3_4.jpg",
     "img/adidas_don_issue_3_5.jpg",
     "La tercera zapatilla exclusiva de Donovan Mitchell de ADIDAS Basketball es una celebración del viaje de Spida para convertirse en uno de los mejores jugadores del juego. El don. El número 3 destaca los capítulos del camino de Donovan hacia la grandeza. Desde los sueños de la infancia hasta el estatus de superestrella, estas zapatillas de baloncesto para jóvenes destacan el ascenso de Donovan Mitchell a la cima"
    );
const producto2 = new Producto (
    2, 
     "NIKE",
     "KD 14 'KY-D'",
     135,
     5,
     "img/nike_kd14_lime_glow_1.jpg",
     "img/nike_kd14_lime_glow_3.jpg",
     "img/nike_kd14_lime_glow_4.jpg",
     "img/nike_kd14_lime_glow_5.jpg",
     "Kevin Durant acecha en el ala, esperando al momento perfecto para atacar y abrirse camino entre la defensa. Las KD14 están diseñadas para ayudar a los jugadores versátiles e implacables como KD a mantener la frescura durante todo el partido. El tejido de malla multicapa y la correa del mediopié ayudan a reducir el movimiento del pie dentro de la zapatilla. La amortiguación Zoom Air completa y la espuma Cushlon ofrecen un gran retorno de la energía para disfrutar de un rendimiento duradero."
    );
const producto3 = new Producto (
    3,
    "ADIDAS",
    "DAME 8 '4TH QUARTER KO'",
    120,
    0,
    "img/adidas_dame_8_1.jpg",
    "img/adidas_dame_8_3.jpg",
    "img/adidas_dame_8_4.jpg",
    "img/adidas_dame_8_5.jpg",
    "Los campeones se forjan bajo el aro. Damian Lillard traslada a la cancha su estilo de superestrella. Esta zapatilla de Dame y adidas Baloncesto refleja la pasión del jugador que ya desde niño apuntaba maneras y hoy ha llegado a la cima del deporte mundial a base de esfuerzo y dedicación. Luce un emblema de 'Knockout Champ' en la parte posterior para dejar claro al rival quién es el campeón."
   );
const producto4 = new Producto (
    4,
    "NIKE",
    "ZOOM FREAK 3 'FREEZING TIME'",
    99.99,
    1,
    "img/nike_zoom_freak_3_1.jpg",
    "img/nike_zoom_freak_3_3.jpg",
    "img/nike_zoom_freak_3_4.jpg",
    "img/nike_zoom_freak_3_5.jpg",
    "Giannis combina su juego atlético con grandes zancadas, fintas de salida y la capacidad de jugar en cualquier posición: nadie se interpone en su camino a canasta. Las Zoom Freak 3 le permiten aprovechar al máximo sus habilidades únicas y maximizar su impacto en el partido.La amortiguación y el retorno de energía, la sujeción lateral y la tracción multidireccional ayudan a los jugadores multidimensionales, como Giannis, a crear espacio y mantener el control."
   );
const producto5 = new Producto (
    5,
    "JORDAN",
    "ZOOM SEPARATE 'MAVS'",
    110,
    3,
    "img/jorda_zoom_separate_mavs_1.jpg",
    "img/jorda_zoom_separate_mavs_3.jpg",
    "img/jorda_zoom_separate_mavs_4.jpg",
    "img/jorda_zoom_separate_mavs_5.jpg",
    "El step-back fue el movimiento de inspiración para la Jordan Zoom Separate. Un diseño liviano y de corte bajo diseñado para ayudar a tomar el control de la cancha. La amortiguación es más firme en el exterior del pie y más suave en el interior, por lo que puedes presionar con fuerza contra el suelo mientras te inclinas para cambiar de dirección. La unidad Zoom Air te ayuda a separarte del defensor para tener una vista clara de la canasta"
   );
const producto6 = new Producto (
    6,
    "NIKE",
    "KYRIE 8 'FIRE & ICE'",
    99.99,
    4,
    "img/nike_kyrie_8_1.jpg",
    "img/nike_kyrie_8_4.jpg",
    "img/nike_kyrie_8_5.jpg",
    "img/nike_kyrie_8_6.jpg",
    "Juega con el estilo y la chispa de una estrella. Kyrie Irving ha confeccionado sus zapatillas para brindar flexibilidad y un ajuste ceñido, de modo que puedas cruzar y cambiar de dirección rápidamente en la cancha"
   );
const producto7 = new Producto (
    7,
    "NEW BALANCE",
    "KAWHI 'POWER SOURCE'",
    160,
    2,
    "img/nb_kawhi_bbklsqua_1.jpg",
    "img/nb_kawhi_bbklsqua_3.jpg",
    "img/nb_kawhi_bbklsqua_4.jpg",
    "img/nb_kawhi_bbklsqua_5.jpg",
    "Diseñada con el dos veces campeón de la NBA y MVP de las Finales de la NBA, Kawhi Leonard, la KAWHI de New Balance se ha creado para jugar en cualquier posición, al mismo tiempo que incorpora detalles diseñados por Kawhi, suficientemente duraderas para mantener tu estilo de juego independiente, y suficientemente suaves para llevarlas en casa."
   );
const producto8 = new Producto (
    8,
    "UNDER ARMOUR",
    "Curry 9 Sesame Street 'Count It'",
    149.99,
    3,
    "img/under_armour_curry_9_sesame_street_count_it_1.jpg",
    "img/under_armour_curry_9_sesame_street_count_it_3.jpg",
    "img/under_armour_curry_9_sesame_street_count_it_4.jpg",
    "img/under_armour_curry_9_sesame_street_count_it_5.jpg",
    "Las Curry 9 se basan en el éxito de las Curry Flow 8. La nueva tecnología superior de baloncesto de Under Armour que mejora la estabilidad del pie. UA Warp funciona en conjunto con UA Flow, con cintas de soporte que bloquean el pie en la entresuela UA Flow al tiempo que permiten un movimiento natural."
   );
const producto9 = new Producto (
    9,
    "NIKE",
    "LEBRON 19 'MINNEAPOLIS LAKERS'",
    149.99,
    3,
    "img/nike_lebron_19_1.jpg",
    "img/nike_lebron_19_3.jpg",
    "img/nike_lebron_19_4.jpg",
    "img/nike_lebron_19_5.jpg",
    "Las LeBron 19 canalizan la energía con un ajuste firme y un sistema de amortiguación actualizado. La funda interior ceñida se combina con un revestimiento esculpido por el que entran los cordones para evitar que el pie se mueva dentro de las zapatillas.Las almohadillas integradas en la lengüeta y la zona del tobillo contribuyen a reducir el peso, mantener el tobillo alineado y dar al jugador la seguridad y la confianza que necesita para darlo todo cuando el partido está en juego."
   );
const producto10 = new Producto (
    10,
    "JORDAN",
    "Air Jordan 36 'Black Infrared'",
    185,
    6,
    "img/air_jordan_36_black_infrared_1.jpg",
    "img/air_jordan_36_black_infrared_3.jpg",
    "img/air_jordan_36_black_infrared_4.jpg",
    "img/air_jordan_36_black_infrared_5.jpg",
    "Corre rápido y ligero con las Air Jordan XXXVI, la nueva expresión de ligereza y velocidad de la franquicia."
   );
const producto11 = new Producto (
    11,
    "ADIDAS",
    "TRAE YOUNG 1 'PIXELS'",
    130,
    2,
    "img/adidas_trae_young_2_pixels_1.jpg",
    "img/adidas_trae_young_2_pixels_3.jpg",
    "img/adidas_trae_young_2_pixels_4.jpg",
    "img/adidas_trae_young_2_pixels_5.jpg",
    "La Trae Young 1 combina la apariencia inigualable y el estilo de juego único de Trae con la máxima agilidad, contención y comodidad. Cada combinación de colores de la colección busca capturar el estilo y la personalidad distintivos de Young al mismo tiempo que proporciona las mejores tecnologías. Este producto está elaborado con contenido reciclado ayudando a acabar con los residuos plásticos y es que el 20% de las piezas utilizadas para hacer la parte superior se fabrican con un mínimo de 50% de contenido reciclado."
   );
const producto12 = new Producto (
    12,
    "ADIDAS",
    "HARDEN VOL.6 'HIGHLIGHTER''",
    140,
    1,
    "img/adidas_harden_vol6_1.jpg",
    "img/adidas_harden_vol6_3.jpg",
    "img/adidas_harden_vol6_4.jpg",
    "img/adidas_harden_vol6_5.jpg",
    "Golpea cuando tu oponente menos lo espere. Conduce hasta el aro, sube desde lo más profundo y deja a los defensores a tu paso, como James Harden. Una entresuela Boost proporciona el retorno de energía que necesita, desde el pitido inicial hasta los últimos segundos agotadores de tiempo extra. Las bandas en el antepié y el talón brindan una sensación de seguridad durante todo el juego"
   );


const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]
console.log(productos);

//lista productos
const listadoProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach(producto => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML +=` 
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
                <button class= "button botonAgregar" id='boton${producto.id}' >Agregar al Carro</button>
            </div>`  
          

        listadoProductos.appendChild(card);


        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarro(producto.id)
        })
   })
}   
    mostrarProductos();
         
 

 /*  function ordenarProdctos(){

    const orden = document.getElementById("orden").value;
    
    if (orden=== menorPrecio){
        productos.sort(function (a, b) {
            if (a.precio > b.precio) {
              return 1;
            }
            if (a.precio < b.precio) {
              return -1;
            }
            return 0;
          })
         
    } else if (orden=== mayorPrecio){
        productos.sort(function (a, b) {
            if (a.precio > b.precio) {
              return -1;
            }
            if (a.precio < b.precio) {
              return 1;
            }            
            return 0;
          })
       
    } else if (orden=== az){
       productos.sort(function (a, b) {
            if (a.marca > b.marca) {
              return 1;
            }
            if (a.marca < b.marca) {
              return -1;
            }
            return 0;
          })
       
    }else if (orden=== za){
        productos.sort(function (a, b) {
            if (a.marca > b.marca) {
              return -1;
            }
            if (a.marca < b.marca) {
              return 1;
            }            
            return 0;
          })
        
    }
    mostrarProductos();
}

*/
     
// Carro de compras: 

let carro = [];

if(localStorage.getItem("carro")) {
    carro = JSON.parse(localStorage.getItem("carro"));
}


//Agregar al Carro

const agregarAlCarro = (id) => {
    const productoEnCarro = carro.find(producto => producto.id === id);
    if(productoEnCarro) {
        productoEnCarro.cantidad++;
        
    } else {
        const producto = productos.find(producto => producto.id === id);
        carro.push(producto);
        
        localStorage.setItem("carro", JSON.stringify(carro));
    }
    calcularTotal();

    Toastify({
        text: "Agregado al Carro",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        destination: "https://www.google.com",
        style:
        {
            background: "#f4772a",
        }
    }).showToast();
}





//MOSTRAR EL CARRO  

const contenedorCarro = document.getElementById("contenedorCarro");

const verCarro = document.getElementById("verCarro");

verCarro.addEventListener("click",  () => {
    mostrarCarro();
})





//Mostrar carro
const mostrarCarro = () => {
    
    contenedorCarro.innerHTML = "";

    carro.forEach(producto => {
        const card = document.createElement("div");
        card.innerHTML = `
                    <div class = "card carro">
                        <div>
                            <img class="carroImg" src = "${producto.img1}" >
                        </div>
                        <div class ="card-body ">
                            <h4 class="carroMarca"> ${producto.marca} </h4>
                            <h3 class="carroModelo"> ${producto.modelo}</h3>
                            <p class="carroPrecio">U$S ${producto.precio} </p>
                            <div class="carroBotones">
                                <p class="carroTexto">CANTIDAD </p> 
                                <span class="carroCantidad"> ${producto.cantidad}</span>
                            <button class= "carroBoton" id ="eliminar${producto.id}" >X</button>
                            </div>    
                        </div>
                    </div>`

        contenedorCarro.appendChild(card);

        
        
        //Aumentar cantidad en el carro
     


        //Eliminar productos del carro:

        const botonEliminar = document.getElementById(`eliminar${producto.id}`);
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarro(producto.id);

            
        })
    })
    calcularTotal();
}




//Eliminar producto del carro: 

const eliminarDelCarro = (id) => {
    const producto = carro.find( producto => producto.id === id);
    const indice = carro.indexOf(producto);
    carro.splice(indice, 1);

    mostrarCarro();
    
    localStorage.setItem("carro", JSON.stringify(carro));

    Toastify({
        text: "Producto Eliminado",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        destination: "https://www.google.com",
        style:
        {
            background: "#f4772a",
             
        }
    }).showToast();
}



//Vaciar carro

const vaciarCarro = document.getElementById("vaciarCarro");

vaciarCarro.addEventListener("click", () => {
    eliminarCarro();
})

const eliminarCarro = () => {
    carro = [];
    mostrarCarro();
    
    localStorage.clear();
}




//Valor del carro 

const total = document.getElementById("total");


const calcularTotal = () => {
    let totalCompra = 0;
    carro.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
    
   
    

    const criptoYa = "https://criptoya.com/api/dolar";
    fetch(criptoYa)
    .then(response => response.json())
    .then(( {blue, solidario}) => {
        console.log(blue)
        console.log(solidario)  
    })
}

 /*  
const comprarCarro = document.getElementById("comprarCarro");  
    comprarCarro.addEventListener("click", () => {
        await Swal.fire({
            title: 'Elija un método de pago:',
            input: 'select',
            inputOptions: {
              'Método': {
                efectivo: 'Efectivo',
                unPago: 'Transferencia, Débito o Crédito (1 pago)',
                cuotas: 'Crédito (3 ctas c/ interés)'
              },
    
            },
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (value === 'efectivo') {
                  resolve('El total es: $')
                } else {
                  resolve('You need to select oranges :)')
                }
              })
            }
          })
      })
   

/*    
         
let efectivo = (calcularTotal * blue) * .8 ;
console.log(efectivo);
let unPago= calcularTotal * solidario; 
console.log(unPago);
let cuotas= calcularTotal * solidario * 1.3;
console.log(cuotas);

    

    
     
*/