import { productServices } from "../services/product-services.js";

const crearCategoria = (categoria)=>{
    productServices.agregarCategoria(categoria)
            .then(res=>res)
}
const buscarCategoria = (categorias,categoria,producto) =>{
    let bandera=false
    categorias.forEach(element => {
        if(element.id==categoria){
            bandera=true
        }
    });
    if(!bandera){
        crearCategoria({id:categoria,productos:[producto]})
    }else{
        obtenerCategoria(categoria)
            .then(cat=>{
                console.log(cat);
                agregarProducto(cat,producto)
            })       
    }
    return categoria
}

const obtenerCategoria = (categoria)=>{
    return productServices.obtenerCategoria(categoria)
        .then(categoria=>categoria)
}

const agregarProducto = (categoria,producto) =>{
    categoria.productos.push(producto)
    productServices.agregarProducto(categoria.id,categoria.productos)
        .then(res=>res)
}

export const publicarProducto=(url,categoria,nombre,precio,descripcion)=>{
    const producto = {
        img:url,
        nombre:nombre,
        precio:precio,
        descripcion:descripcion
    }
    productServices.listaCategoria()
        .then(categorias=>{return buscarCategoria(categorias,categoria,producto)})
}

   
