import { productServices } from "../services/product-services.js"

const listarTodosProductos = (productos)=>{
    const lista = document.querySelector('#lista-todos-productos')
    
    productos.forEach(producto=>{
        const li =  document.createElement('li')
        const contenido = `
        <div class="borrar-editar">
            <a class="ii ii-borrar" href=""><ion-icon name="trash-outline"></ion-ico></a>
            <a class="ii ii-editar" href=""><ion-icon name="pencil-outline"></ion-icon></a>
        </div>
        <img src="${producto.img}" alt="">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <a href="">codigo</a>
        `
        li.innerHTML = contenido
        lista.appendChild(li)
    })
 
}

productServices.listaCategoria()
    .then(categorias=>{
        categorias.forEach(categoria => {
            listarTodosProductos(categoria.productos)   
        });
    })