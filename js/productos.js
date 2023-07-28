let carrito = JSON.parse(localStorage.getItem('menu')) || [];
const productos = []

class Producto {
    constructor(id, img, nombre, descripcion, precio , cantidad) {
        this.id = id,
        this.img = img
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = parseFloat(precio * 1.21 ).toFixed(2)
        this.cantidad = cantidad
    }
}

// incializamos todos los objetos
const veggie = new Producto(1, 'menu1.png', 'Veggie Omelette', 'PASTURE-RAISED WHOLE EGGS, SCALLIONS, BELL PEPPER, MOZZARELLA, AND SPINACH, SERVED WITH AVOCADO SMASH, TOASTED SOURDOUGH, ARUGUL', 16, 1)
const avocado = new Producto(2, 'menu2.png', 'Avocado Smash', 'TOASTED SOURDOUGH, TOPPED WITH AVOCADO, CUCUMBER, RADISH, MICRO CILANTRO, OLIVE OIL DRIZZLE', 11, 1)
const eggSandwich = new Producto(3, 'menu3.png', 'Perfect Egg Sandwich', 'ARTISANAL TOASTED BAGEL SCOOPED OUT OR CIABATTA, PASTURE-RAISED SOFT BOILED EGGS, MOZZARELLA, ARUGULA, AVOCADO SMASH, TOMATO, RED PEPPER FLAKES', 14, 1)
const salmon = new Producto(4, 'menu7.png', 'The New Yoker ', 'TOASTED SOURDOUGH, WHIPPED CREAM CHEESE WITH SCALLION AND SPICED ZAATAR, SMOKED SALMON, SLICED TOMATO, PICKLED RED ONION, ALFALFA SPROUTS, LEMON OIL DRIZZLE', 16, 1)
const croissant = new Producto(5, 'menu5.png', 'Croissant Sandwitch', 'PASTURE-RAISED EGGS & MOZZARELLA OMELETTE SERVED ON PLAIN CROISSANT WITH TOMATO, MIXED GREENS AND SPICY AIOLI SIDEA', 15, 1)
const turkeyWrap = new Producto(6, 'menu6.png', 'Turkey Egg Wrap', 'SOFT BOILED PASTURE-RAISED EGGS, TURKEY BACON, SWEET POTATO, AVOCADO, MOZZARELLA, SPINACH, OLIVE OIL, SALSA PICANTE ON THE SIDE', 19, 1)

productos.push(veggie, avocado, eggSandwich, salmon, croissant, turkeyWrap);
