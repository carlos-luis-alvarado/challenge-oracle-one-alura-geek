const listaCategoria = ()=>{
    return fetch('http://localhost:3000/categorias')
        .then(respuesta=>respuesta.json())
}

const obtenerCategoria = (categoria) =>{
    return fetch(`http://localhost:3000/categorias/${categoria}`)
        .then(respuesta=>respuesta.json())
}

const agregarCategoria = (categoria) =>{
    return fetch('http://localhost:3000/categorias',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:categoria,productos:[]})
        }
    )    
}

const listaProducto = (nombreCategoria)=>{
    return fetch(`http://localhost:3000/categorias/${nombreCategoria}?_limit=6`)
        .then(respuesta=>respuesta.json())
}


const agregarProducto =(categoria,productos)=>{
    return fetch(`http://localhost:3000/categorias/${categoria}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({productos})
    });
}

export const productServices = {
    listaCategoria,
    listaProducto,
    agregarCategoria,
    agregarProducto,
    obtenerCategoria
}