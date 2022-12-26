import { productServices } from "../services/product-services.js";

const html = `
<section class="container section">
            <div class="section-titulo">
                <h2>Consolas</h2>
                <a class="section-ver-todo" href="#">Ver todo<img src="./img/flecha.png" alt="flecha"></a>
            </div>
            <div>
                <ul class="lista">
                    <li>
                        <img src="./img/consolas/unsplash_0POwK6iAiRQ.png" alt="">
                        <p>Control XYZ</p>
                        <p>$60,00</p>
                        <a href="">Ver producto</a>
                    </li>
                    <li>
                        <img src="./img/consolas/unsplash_caNzzoxls8Q.png" alt="">
                        <p>Control y consola XYZ</p>
                        <p>$60,00</p>
                        <a href="">Ver producto</a>
                    </li>
                    <li>
                        <img src="./img/consolas/unsplash_ZV7lnfyQLmA.png" alt="">
                        <p>Consola XYZ</p>
                        <p>$60,00</p>
                        <a href="">Ver producto</a>
                    </li>
                    <li>
                        <img src="./img/consolas/unsplash_wa5z9o9fgjw.png" alt="">
                        <p>Control XYZ</p>
                        <p>$60,00</p>
                        <a href="">Ver producto</a>
                    </li>
                    <li>
                        <img src="./img/consolas/unsplash_Zjn4dT993-g.png" alt="">
                        <p>Consola XYZ</p>
                        <p>$60,00</p>
                        <a href="">Ver producto</a>
                    </li>
                    <li>
                        <img src="./img/consolas/unsplash_k-xYhI3-gJM.png" alt="">
                        <p>Game Boy Color</p>
                        <p>$60,00</p>
                        <a href="">Ver producto</a>
                    </li>

                </ul>
            </div>
        </section>
`
const crearSecciones = (nombre) =>{
    const main_categorias = document.querySelector('#main-categorias')
    const section = document.createElement('section')
    section.classList.add('section')
    const contenido = `
        <div class="section-titulo">
            <h2>${nombre}</h2>
            <a class="section-ver-todo" href="#">Ver todo<img src="./img/flecha.png" alt="flecha"></a>   
        </div>
        <div>
            <ul class="lista ${nombre}">
            </ul>
        </div> 
    `
    section.innerHTML = contenido
    main_categorias.appendChild(section)
}

const crearProductos = (productos,nombre)=>{
    console.log(productos);
    console.log(nombre);
    const lista  =  document.querySelector(`.${nombre}`)
    // console.log(section);
    

    productos.forEach(producto=>{
        const li =  document.createElement('li')
        const contenido = `
            <img src="${producto.img}" alt="">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
            <a href="">Ver producto</a>
        `
        li.innerHTML = contenido
        lista.appendChild(li)
    })

}


productServices.listaCategorias()
    .then(categorias=>{
        categorias.forEach(categoria=>{
            crearSecciones(categoria.nombre)
        })
        return categorias
    })
    .then(categorias=>{
        categorias.forEach(categoria => {
            productServices.listaProductos(categoria.nombre)
            .then(productos=>{
                crearProductos(productos,categoria.nombre)
            })
        });
    })