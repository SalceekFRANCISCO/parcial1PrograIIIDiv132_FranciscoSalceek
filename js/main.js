//#region variables
let contenedorFrutas = document.querySelector("#seccionFrutas");

let botonBuscar = document.querySelector("#barraBusqueda");

let carrito = document.querySelector("#asidecarrito");

let carritocantidad = document.querySelector("#cantidad-carrito");//

let botonMenorAMayor = document.querySelector("#ordenarMenorMayor");

let ordenarNombre = document.querySelector("#ordenarNombre");

let autor = document.querySelector("#div-autor");
//#endregion

//#region array de frutas
   const frutas = [
  { id: 1, nombre: "arandano", precio: 5000, ruta_img: "img/arandano.jpg" },
  { id: 2, nombre: "banana", precio: 1000, ruta_img: "img/banana.jpg" },
  { id: 3, nombre: "frambuesa", precio: 4000, ruta_img: "img/frambuesa.png" },
  { id: 4, nombre: "frutilla", precio: 3000, ruta_img: "img/frutilla.jpg" },
  { id: 5, nombre: "kiwi", precio: 2000, ruta_img: "img/kiwi.jpg" },
  { id: 6, nombre: "mandarina", precio: 800, ruta_img: "img/mandarina.jpg" },
  { id: 7, nombre: "manzana", precio: 1500, ruta_img: "img/manzana.jpg" },
  { id: 8, nombre: "naranja", precio: 9000, ruta_img: "img/naranja.jpg" },
  { id: 9, nombre: "pera", precio: 2500, ruta_img: "img/pera.jpg" },
  { id: 10, nombre: "anana", precio: 5000, ruta_img: "img/anana.jpg" },
  { id: 11, nombre: "pomelo-amarillo", precio: 2000, ruta_img: "img/pomelo-amarillo.jpg" },
  { id: 12, nombre: "pomelo-rojo", precio: 5000, ruta_img: "img/pomelo-rojo.jpg" },
];
//#endregion


let carritoPersonal = [];
let listadoFrutas= "";

function imprimirdatos(){
    const alumno = {
        nombre: "Francisco",
        apellido: "Salceek",
        dni: "46756868",
    }

    console.log(`Alumno: ${alumno.nombre} ${alumno.apellido} - DNI: ${alumno.dni}`);
    let nombre = alumno.apellido +" "+ alumno.nombre;
    autor.innerHTML += nombre;
}

function ordenar(){
    botonMenorAMayor.addEventListener("click", function(){
        frutas.sort((fruta1,lib2)=> fruta1.precio - lib2.precio);
        mostrarListaFrutas(frutas);
    });
}

// ordenamiento por nombre (toem la idea de la docuemntacion de sort en w3schools)
function ordenarPorNombre(){
    ordenarNombre.addEventListener("click", function(){
        frutas.sort(function(fruta1,fruta2){
            let x = fruta1.nombre.toUpperCase();
            let y = fruta2.nombre.toUpperCase();
            let resultado=0;
            if (x < y){
                resultado = -1;
            }
            if (x > y){
                resultado = 1;
            } 
            return resultado;
        });
        mostrarListaFrutas(frutas);
    });
}

// punto 5 mostrar carrito
function mostrarCarrito(){
    let cantidadCarrito = carritoPersonal.length;

    if(cantidadCarrito === 0){
        vaciarCarrito();
    }
    else{
        let total = calcularTotal(carritoPersonal);
        let cantidadProductosCarrito = `<p> Carrito:${cantidadCarrito} Productos</p>`;
        let carritoCargado = "<ul class=listaCarrito> ";
        carritoCargado +=`<h2 class="carrito-titulo">Carrito</h2>`
        carritoPersonal.forEach((fruta,indice) => {
                carritoCargado +=
                `<li class="bloque-item">
                    <p class="nombre-item">${fruta.nombre}-- $${fruta.precio}</p>
                    <button class="botonEliminar" onclick="eliminarFruta(${(indice)})">Eliminar</button>
                </li>`
        });

        carritoCargado += `<h3>Total de carrito: $ ${total}</p> </h3>`;
        carritoCargado += `<p> Productos:  ${cantidadCarrito} </p>`;
        carritoCargado += `<button class="botonEliminar" onclick="vaciarCarritoCompleto()">Vaciar el carrito</button>`;
        // carritocantidad.innerHTML += cantidadProductosCarrito;
        carrito.innerHTML = carritoCargado;
    }
    
};

function vaciarCarritoCompleto(){
    vaciarCarrito();
    
}
  

function vaciarCarrito(){
    carritoPersonal = [];
    
    carrito.innerHTML = carritoPersonal;

}

function eliminarFruta(indice){
    carritoPersonal.splice(indice,1);

    mostrarCarrito();
    
}

function calcularTotal(array) {
    let total = 0;

    array.forEach(producto => {
        total += producto.precio;
    })
    return total;
}

function mostrarListaFrutas(array){
    let listadoFrutas= "<ul class=lista> ";
    array.forEach(fruta => {
        listadoFrutas += 
        `<li id=listaFrutas>
            <img class=imgLibro src=${fruta.ruta_img} alt="${fruta.nombre}">
            <h2 class=autor>${fruta.nombre}</h2>
            <p>$${fruta.precio}</p>
            <button class="botonAgregar" onclick="agregarLibro(${fruta.id})">Agregar a carrito</button>
        </li>`;
    });
    listadoFrutas += "</ul>";
    contenedorFrutas.innerHTML = listadoFrutas;
    
}

// para buscar frutas el punto 4
function buscar(){
    botonBuscar.addEventListener("keydown",function(){
        
        let valorBusqueda = botonBuscar.value;

        let frutasFiltrados = frutas.filter(fruta => fruta.nombre.includes(valorBusqueda));
        console.log(frutasFiltrados);

        mostrarListaFrutas(frutasFiltrados);
        
    });
}

function validarExistencia(libro){

    let existe = carritoPersonal.some(lib => lib.id == libro.id);

    if(existe){
        // alert("el libro ya se encuentra en la lista");
    }
    else{
        carritoPersonal.push(libro);
        // alert("libro agregado correctamente");
        console.log(libro);
    }
}

function agregarLibro(id){
    let libro = frutas.find(libro => libro.id == id);
    validarExistencia(libro);
    mostrarCarrito();
}

function init(){
    imprimirdatos();
    mostrarListaFrutas(frutas); 
    buscar();
    ordenar();
    ordenarPorNombre();
}

init();