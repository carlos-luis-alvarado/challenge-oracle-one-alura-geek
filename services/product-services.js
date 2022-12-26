const listaCategorias = ()=>{
    return fetch('http://localhost:3000/categoria')
        .then(respuesta=>respuesta.json())
}

const listaProductos = (nombreCategoria)=>{
    return fetch(`http://localhost:3000/${nombreCategoria}?_limit=6`)
        .then(respuesta=>respuesta.json())
}


export const productServices = {
    listaCategorias,
    listaProductos,
}