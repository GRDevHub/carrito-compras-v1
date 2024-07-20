const template = document.querySelector('#template');
const contenedor = document.querySelector('#carrito');
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');
const fragment = document.createDocumentFragment();


// Carrito
let carrito = [];

// Agregar producto carrito
const addProducto = (e) => {
    // console.log(e.target.dataset.fruta);
    // producto
    const producto = {
        nombre: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }

    // Llamar a la funcion
    addProductoCarrito(producto);
}

// agregar producto al carrito
const addProductoCarrito = (producto) => {

    // Verificar si existe producto y devolver posición en caso de que si exista
    // devuelve -1 en caso que no exista
    const position = carrito.findIndex( item => item.nombre === producto.nombre );

    // Si no existe hace un push al array, agregando todos los datos
    // Si existe aumentar la cantidad +1
    if( position === -1){
        carrito.push(producto);
    }else{
        carrito[position].cantidad++;
        // carrito[position].precio = parseInt(producto.precio);
        // console.log("El producto ya existe en el carrito");
    }
    // LLamar a la funcion mostrarCarrito()
    mostrarCarrito();
}                           

// mostrar el carrito en la web
const mostrarCarrito = () => {
    // Vaciar el contenido 
    contenedor.textContent = '';

    // iterar carrito 
    carrito.forEach( item => {
        
        // Crear el template
        const clone = template.content.cloneNode(true); 

        // Cambiar datos dinamicamente
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('li .lead').textContent = item.nombre;
        clone.querySelector('.lead span').textContent = item.precio * item.cantidad;
        // Agregar el dataset de forma dinámica al template de información
        clone.querySelector('.btn-success').dataset.id = item.nombre;
        clone.querySelector('.btn-danger').dataset.id = item.nombre;

        // add Web template al fragment
        fragment.appendChild(clone);
    });
    // Agregar el fragment al contenedor fuera del bucle para evitar el reflow
    contenedor.appendChild(fragment);
    mostrarFooter();
}

const btnAumentar = (e) => {
    carrito = carrito.map( item => {
        if(e.target.dataset.id === item.id){
            item.cantidad++;
        }
        return item;
    })

    mostrarCarrito();
}

const btnDisminuir = (e) => {
    carrito = carrito.filter( item => {
        if(e.target.dataset.id === item.id){
            if(item.cantidad > 0){
                item.cantidad--;
                if(item.cantidad === 0) return;
                return item;
            }
        }else{
            return item;
        }
    });
    mostrarCarrito();
}

const mostrarFooter = () => {
    footer.textContent = '';

    const total = carrito.reduce((acc, current) => {
        return acc + current.cantidad * current.precio;
    }, 0);

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('.lead span').textContent = total;

    footer.appendChild(clone);
}

document.addEventListener('click', (e) => {
    // 
    if(e.target.matches('.btn-primary')){
        addProducto(e);
    }

    if(e.target.matches('.btn-success')){
        btnAumentar(e);
    }

    if(e.target.matches('.btn-danger')){
        btnDisminuir(e);
    }

});

