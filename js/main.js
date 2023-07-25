const contenedorTarjetas = document.getElementById('productos-conteiner')
const verCarrito = document.getElementById('shopping')
const conteinerCarrito = document.getElementById('conteiner-carrito')

// ciclo el arrey producto para subir los productos
for (const product of productos) { 
    //genero la estructura
    const tarjetas = document.createElement('div')
    tarjetas.className = 'tarjeta-producto'
    tarjetas.innerHTML = `
             <img class="menu-img" src="${product.img}" alt="">
             <p class="menu-title">${product.nombre}</p>
             <p class="ingredientes">${product.descripcion}</p>
             <p class="price">$${product.precio} </p>
             <button class = "menu-boton"> Agregar al Carrito </button>
            `

    contenedorTarjetas.appendChild(tarjetas)

    // AGREGAR AL CARRITO - FUNCION

    let agregarAlCarrito = tarjetas.querySelector('.menu-boton')
    agregarAlCarrito.addEventListener('click', () => {

        // para que no se repitan los productos en el carrit
        const repetir = carrito.some((repetirProducto) => repetirProducto.id === product.id)

        if (repetir) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad ++
                }
            })
        } else {
            carrito.push({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
            localStorage.setItem('menu', JSON.stringify(carrito))  // aca pongo el local storage asi se guarde lo que modifico
        }
        console.log(carrito) // si se modifica las cantidades
    })
};




