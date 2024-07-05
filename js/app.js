const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const contenedor = document.querySelector('#contenedor')
const frutas = [
    {
        name: 'manzana',
        img: "🍎"
    },
    {
        name: 'naranja',
        img: '🍊'
    },
    {
        name: 'banana',
        img: '🍌'
    }
]

frutas.forEach( item => {
    console.log(`Articulo: ${item.name} \nImg: ${item.img}`);
});

