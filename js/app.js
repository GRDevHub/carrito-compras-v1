const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const contenedor = document.querySelector('#contenedor');

// Carrito
const carrito = [];

// Agregar producto carrito
const addProducto = (e) => {
    // console.log(e.target.dataset.fruta)
    // producto
    const producto = {
        nombre: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }
    // console.log(producto)
    // agregar producto al carrito
    // carrito[producto.nombre] = producto;

    addProductoCarrito(producto);
}

// agregar producto al carrito
const addProductoCarrito = (producto) => {

    const position = carrito.findIndex( item => item.titulo === producto.titulo );

    if( position === -1){
        carrito.push(producto);
    }else{
        carrito[position].cantidad++;
        carrito[position].precio += parseInt(producto.precio);
        console.log("El producto ya existe en el carrito");
    }
    mostrarCArrito();
}                           

// mostrar el carrito en la web
const mostrarCArrito = () => {
    console.log("mostrar el carrito en la web")
}

botones.forEach( item => item.addEventListener('click', addProducto));

