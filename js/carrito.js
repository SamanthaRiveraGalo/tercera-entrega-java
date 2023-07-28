function carritoModal() {

    // esto es para limpiar todo y no se repita 20 veces el carrito cada vez que le hago click
    conteinerCarrito.innerHTML = '';

    // para que cuando aprete de nuevo el carrito lo pueda ver 
    conteinerCarrito.style.display = 'flex'

    // Estructura del carrito

    //Encabezado

    const modalEncabezado = document.createElement('div')
    modalEncabezado.className = ('encabezado')
    modalEncabezado.innerHTML = `
    <h1 class="encabezado-titulo"> Carrito </h1>
    <img class="carrito-logo" src="./assets/logo.png">
    <p class = "cierre-boton" > x </i> </p>
    `
    conteinerCarrito.append(modalEncabezado)

    //boton de cierre

    let cierreCarrito = modalEncabezado.querySelector('.cierre-boton')
    cierreCarrito.onclick = (e) => {
        conteinerCarrito.style.display = 'none'
    }

    modalEncabezado.append(cierreCarrito)

    //BODY-CARRITO - el for para que cicle cada producto

    for (const product of carrito) {

        let carritoProductos = document.createElement('div')
        carritoProductos.className = ('carrito-productos')
        carritoProductos.innerHTML = `
           <p class="carrito-nombre"> ${product.nombre} </p>
           <p class="carrito-precio"> $${product.precio} </p>
           <div class="conteiner-cantidad">
             <span class="restar-cantidad"> - </span>
             <p> Cantidad: ${product.cantidad} </p>  
             <span class="sumar-cantidad"> + </span>
           </div>
           <p> Total: $ ${product.cantidad * product.precio} </p>
           <span class="boton-eliminar"> Eliminar </span>

     `
        conteinerCarrito.append(carritoProductos)

        // queryselector nos permite seleccionar la clase restar-cantidad de carritoProductos que es nuestro body del carrito
        // RESTAR
        let restarCantidad = carritoProductos.querySelector('.restar-cantidad')
        restarCantidad.addEventListener('click', () => {
            if (product.cantidad !== 1) {
                product.cantidad--
            }
            localStorage.setItem('menu', JSON.stringify(carrito))  // guarde los cambios
            carritoModal()
        })

        //SUMAR
        let sumarCantidad = carritoProductos.querySelector('.sumar-cantidad')
        sumarCantidad.addEventListener('click', () => {
            product.cantidad++
            localStorage.setItem('menu', JSON.stringify(carrito))   // guarde los cambios
            carritoModal()
        })

        // ELIMINAR
        let eliminar = carritoProductos.querySelector('.boton-eliminar')
        eliminar.addEventListener('click', () => {
            eliminarProductos(product.id)
        })
    }

    // TOTAL

    const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.cantidad, 0)

    // FOOTER-CARRITO

    const totalCarrito = document.createElement('div')
    totalCarrito.className = ('total-carrito')
    totalCarrito.innerHTML = `
    <p class = "total-titulo"> Total: $ ${total} </p>
    <p id= "vaciar-carrito"> Vaciar Carrito </p>
    `
    conteinerCarrito.append(totalCarrito);

    // vaciar carrito -- NO ME FUNCIONA
    
    let vaciarCarrito = totalCarrito.querySelector('#vaciar-carrito')
    vaciarCarrito.addEventListener('click', ()=> {
        carritoProductos.innerHTML = ''
        reiniciarCarrito()
        console.log('click') // el click me funciona asi que el problema es que no se me vacia el carrito
    })
}

// hago un evento onlick para la funcion

verCarrito.addEventListener('click', carritoModal);

// ahora tiene que eliminar el producto cuando le haga click y lo voy a eliminar por medio del ID
const eliminarProductos = (id) => {
    const encontrarId = carrito.find((el) => el.id === id);

    carrito = carrito.filter((productoId) => {
        return productoId !== encontrarId;
    });

    localStorage.setItem('menu', JSON.stringify(carrito));
    carritoModal();
};

//NO ME FUNCIONA
function reiniciarCarrito(){
    localStorage.removeItem('menu')
}