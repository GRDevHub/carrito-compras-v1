const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const contenedor = document.querySelector('#contenedor');

// Carrito
const carrito = {};

// Agregar producto carrito
const addProducto = (e) => {
    // console.log(e.target.dataset.fruta)
    // producto
    const producto = {
        nombre: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }
    // console.log(producto)
    // agregar producto al carrito
    carrito[producto.nombre] = producto;

    console.log(carrito);
}

// mostrar el carrito en la web
const viewProducto = () => {

}                                                                           

botones.forEach( item => {
    item.addEventListener('click', addProducto);
});

