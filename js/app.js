// const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const contenedor = document.querySelector('#carrito');
// const carrito = document.querySelector('#carrito');
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');


// Carrito
const carrito = [];

// Agregar producto carrito
const addProducto = (e) => {
    console.log(e.target.dataset.fruta);
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

    const position = carrito.findIndex( item => item.nombre === producto.nombre );

    if( position === -1){
        carrito.push(producto);
    }else{
        carrito[position].cantidad++;
        carrito[position].precio += parseInt(producto.precio);
        console.log("El producto ya existe en el carrito");
    }
    mostrarCarrito();
}                           

// mostrar el carrito en la web
const mostrarCarrito = () => {
    // console.log(carritoCotent)
    contenedor.textContent = '';

    carrito.forEach( item => {
        
        // Crear el template
        const clone = template.content.cloneNode(true); 

        // Cambiar datos dinamicamente
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('li .lead').textContent = item.nombre;
        clone.querySelector('.lead span').textContent = item.precio;

        // add Web template
        console.log(clone)
        contenedor.appendChild(clone);
    });
}

document.addEventListener('click', (e) => {

    if(e.target.matches('.btn-primary')){
        addProducto(e);
    }

});

