// variables
let contenedorLibros = document.querySelector("#seccionlibros");

let botonBuscar = document.querySelector("#barraBusqueda");

let carrito = document.querySelector("#asidecarrito");

let botonMenorAMayor = document.querySelector("#ordenarMenorMayor");

let botonMayorAMenor = document.querySelector("#ordenarMayorMenor");

let ordenarNombre = document.querySelector("#ordenarNombre");

//array de botones
const libros = [
    {id: 1, nombre: 'Cien años de soledad', precio: 8500, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 8500, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', precio: 5200, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 3, titulo: '1984', autor: 'George Orwell', precio: 6900, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 4, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', precio: 9700, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 5, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', precio: 6400, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 6, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', precio: 7100, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 7, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', precio: 9300, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 8, titulo: 'El señor de los anillos', autor: 'J. R. R. Tolkien', precio: 11800, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 9, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', precio: 7800, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 10, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', precio: 8600, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 11, titulo: 'Los miserables', autor: 'Victor Hugo', precio: 9900, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 12, titulo: 'El alquimista', autor: 'Paulo Coelho', precio: 6200, ruta_img: 'img/cien_anos_de_soledad.jpg'},
];

//#region libros con url corregida
// const libros = [
//     {id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 8500, ruta_img: 'img/cien_anos_de_soledad.jpg'},
//     {id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', precio: 5200, ruta_img: 'img/el_principito.jpg'},
//     {id: 3, titulo: '1984', autor: 'George Orwell', precio: 6900, ruta_img: 'img/1984.jpg'},
//     {id: 4, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', precio: 9700, ruta_img: 'img/don_quijote.jpg'},
//     {id: 5, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', precio: 6400, ruta_img: 'img/fahrenheit_451.jpg'},
//     {id: 6, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', precio: 7100, ruta_img: 'img/orgullo_y_prejuicio.jpg'},
//     {id: 7, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', precio: 9300, ruta_img: 'img/crimen_y_castigo.jpg'},
//     {id: 8, titulo: 'El señor de los anillos', autor: 'J. R. R. Tolkien', precio: 11800, ruta_img: 'img/el_senor_de_los_anillos.jpg'},
//     {id: 9, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', precio: 7800, ruta_img: 'img/la_sombra_del_viento.jpg'},
//     {id: 10, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', precio: 8600, ruta_img: 'img/matar_a_un_ruisenor.jpg'},
//     {id: 11, titulo: 'Los miserables', autor: 'Victor Hugo', precio: 9900, ruta_img: 'img/los_miserables.jpg'},
//     {id: 12, titulo: 'El alquimista', autor: 'Paulo Coelho', precio: 6200, ruta_img: 'img/el_alquimista.jpg'},
//     {id: 13, titulo: 'It', autor: 'Stephen King', precio: 10500, ruta_img: 'img/it.jpg'},
//     {id: 14, titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', precio: 9400, ruta_img: 'img/el_nombre_del_viento.jpg'},
//     {id: 15, titulo: 'Drácula', autor: 'Bram Stoker', precio: 8100, ruta_img: 'img/dracula.jpg'},
//     {id: 16, titulo: 'La metamorfosis', autor: 'Franz Kafka', precio: 5600, ruta_img: 'img/la_metamorfosis.jpg'},
//     {id: 17, titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', precio: 7200, ruta_img: 'img/los_juegos_del_hambre.jpg'},
//     {id: 18, titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', precio: 8900, ruta_img: 'img/harry_potter_piedra_filosofal.jpg'}
// ];
//#endregion


let favoritos = [];
let listadoLibros= "";

function ordenar(){
    botonMenorAMayor.addEventListener("click", function(){
        libros.sort((lib1,lib2)=> lib1.precio - lib2.precio);
        mostrarListaLibros(libros);
    });
}

function ordenar2(){
    botonMayorAMenor.addEventListener("click", function(){
        libros.sort((lib1,lib2)=> lib2.precio - lib1.precio);
        mostrarListaLibros(libros);
    });
}

function ordenar3(){
    ordenarNombre.addEventListener("click", function(){
        libros.sort(function(lib1,lib2){
            let x = lib1.titulo.toUpperCase();
            let y = lib2.titulo.toUpperCase();
            let resultado=0;
            if (x < y){
                resultado = -1;
            }
            if (x > y){
                resultado = 1;
            } 
            return resultado;
        });
        mostrarListaLibros(libros);
    });
}

function mostrarCarrito(){
    let cantidadCarrito = favoritos.length;

    if(cantidadCarrito === 0){
        vaciarCarrito();
    }
    else{
        let total = calcularTotal(favoritos);
        let carritoCargado = "<ul class=listaCarrito> ";
        favoritos.forEach((libfav,indice) => {
                carritoCargado +=
                `<li>
                    <p>${libfav.titulo}-- $${libfav.precio}</p>
                    <button class="botonEliminar" onclick="eliminarLibro(${(indice)})">Eliminar</button>
                </li>`
        });

        carritoCargado += `<h3>Total de carrito: $ ${total}</p> </h3>`;
        carritoCargado += `<p> Productos:  ${cantidadCarrito} </p>`;
        carrito.innerHTML = carritoCargado;
    }
    
};

function vaciarCarrito(){
    favoritos = [];
    
    carrito.innerHTML = favoritos;

}

function eliminarLibro(indice){
    favoritos.splice(indice,1);

    mostrarCarrito();
    
}

function calcularTotal(array) {
    let total = 0;

    array.forEach(producto => {
        total += producto.precio;
    })
    return total;
}

function mostrarListaLibros(array){
    let listadoLibros= "<ul class=lista> ";
    array.forEach(libro => {
        listadoLibros += 
        `<li id=listaLibros>
            <img class=imgLibro src=${libro.ruta_img} alt="${libro.titulo}">
            <h2 class=autor>${libro.titulo}</h2>
            <h5 class=autor> ${libro.autor}</h5>
            <p>$${libro.precio}</p>
            <button class="botonAgregar" onclick="agregarLibro(${libro.id})">Agregar a favoritos</button>
        </li>`;
    });
    listadoLibros += "</ul>";
    contenedorLibros.innerHTML = listadoLibros;
    
}

function buscar(){
    botonBuscar.addEventListener("keydown",function(){
        
        let valorBusqueda = botonBuscar.value;

        let librosFiltrados = libros.filter(lib => lib.titulo.includes(valorBusqueda));
        console.log(librosFiltrados);

        mostrarListaLibros(librosFiltrados);
        
    });
}

function validarExistencia(libro){

    let existe = favoritos.some(lib => lib.id == libro.id);

    if(existe){
        // alert("el libro ya se encuentra en la lista");
    }
    else{
        favoritos.push(libro);
        // alert("libro agregado correctamente");
        console.log(libro);
    }
}

function agregarLibro(id){
    let libro = libros.find(libro => libro.id == id);
    validarExistencia(libro);
    mostrarCarrito();
}

function init(){
    mostrarListaLibros(libros); 
    buscar();
    ordenar();
    ordenar2();
    ordenar3();
}

init();