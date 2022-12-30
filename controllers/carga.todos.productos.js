import { productServices } from "../services/product-services.js"

const listarTodosProductos = (productos,categoria)=>{
    const lista = document.querySelector('#lista-todos-productos')
    
    productos.forEach(producto=>{
        const li =  document.createElement('li')
        const contenido = `
        <div class="borrar-editar">
            <button id="${producto.id}-${categoria}" class="ii ii-borrar" href="#"><ion-icon name="trash-outline"></ion-ico></button>
            <button class="ii ii-editar" href=""><ion-icon name="pencil-outline"></ion-icon></button>
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
            listarTodosProductos(categoria.productos,categoria.id)   
        })
    })
    .then(e=>{
        let botonesBorrar = document.querySelectorAll('.ii-borrar')
        botonesBorrar.forEach(boton=>{
            boton.addEventListener('click',e=>{
                e.preventDefault()
                let spl = boton.id.split('-'); 
                console.log(spl);   
                productServices.obtenerCategoria(spl[1])
                    .then(e=>{
                        let productosFiltrados =e.productos.filter(producto=>producto.id!=spl[0])
                        //productServices.eliminarProducto()
                        return productosFiltrados
                    })  
                    .then(e=>productServices.agregarProducto(spl[1],e))
            })
           
        })
    })

    



