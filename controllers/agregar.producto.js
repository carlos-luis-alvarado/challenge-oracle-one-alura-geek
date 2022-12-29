import { productServices } from "../services/product-services.js";

const crearCategoria = (categoria)=>{
    productServices.agregarCategoria(categoria)
            .then(res=>res)
}
const buscarCategoria = (categorias,categoria) =>{
    let bandera=false
    categorias.forEach(element => {
        if(element.id==categoria.toLowerCase()){
            console.log('categoria existente');
            console.log('obj',element);
            console.log('input',categoria);
            bandera=true
            // console.log(i);
        }
    });
    // for (let i = 0; i < categorias.length; i++) {
    //     console.log(categorias[i].id==categoria.toLowerCase());
    //     let local = categorias[i].id
    //     console.log(local==categoria.toLowerCase());
    //     if(local==categoria.toLowerCase()){
    //         console.log('categoria existente');
    //         console.log('obj',c);
    //         console.log('input',categoria);
    //         bandera=true
    //         console.log(i);
    //     }
    //     console.log(i);
        
    // }
    console.log(bandera);
    if(!bandera){
        console.log('categoria funccion',categoria);
        crearCategoria(categoria)
    }
    console.log(categoria);
    console.log('categoria no existente');
    // agregarCategoria(categoria)
    return categoria
}


const obtenerCategoria = (categoria)=>{
    return productServices.obtenerCategoria(categoria)
        .then(categoria=>categoria)
}

const agregarProducto = (categoria,producto) =>{
    categoria.productos.push(producto)
    console.log(categoria);
    productServices.agregarProducto(categoria.id,categoria.productos)
        .then(res=>res)
}

const form_agregar = document.querySelector('#form__agregar')

form_agregar.addEventListener('submit',(e)=>{
    e.preventDefault()
    const url_img = document.querySelector('#url-img')
    console.log(url_img);
    console.log(form_agregar);
    const categoria = document.querySelector('#categoria')
    console.log(categoria);
    const nombre = document.querySelector('#nombre-producto')
    console.log(nombre);
    const precio = document.querySelector('#precio-producto')
    console.log(categoria.value);
    const producto = {
        img:url_img.value,
        nombre:nombre.value,
        precio:precio.value,
    }
    productServices.listaCategoria()
        .then(categorias=>{return buscarCategoria(categorias,categoria.value)})
        // .then(categoria=>{return crearCategoria(categoria)})
        .then(categoria=>{//return obtenerCategoria(categoria)
            console.log(categoria);
            return obtenerCategoria(categoria)
        })
        .then(categoria=>{
            agregarProducto(categoria,producto)
            console.log(categoria);
        })
           
        //.then(categoria=>console.log('fn',categoria))
    // productServices.listaCategorias()
    //     .then(categorias=>buscarCategoria(categorias,categoria.value))
    //     .then(cate=>agregarCategoria(cate))
    //     .catch(err=>console.log(err));

    // productServices.agregarProducto(url_img.value,categoria.value,nombre.value,precio.value,3)
    //     .then(res=>console.log('ok'))
    //     .catch(err=>console.log(err))
})