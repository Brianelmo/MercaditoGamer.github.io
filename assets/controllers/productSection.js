import { productosService } from "../servicios/products.js";

const contProd = document.querySelector("[data-producto-espec]");  

const aside = document.querySelector(".container-prods"); 

const starWars = "Star Wars";
const consolas = "Consola"; 
const mesa = "Mesa";  

const crearProducto = (name , price , section , urlImage, descripcion) => {

  const url = new URL(window.location); 
  const id = url.searchParams.get('id');

  

  productosService.datosProduct(id).then (product => {
    
    const content = `

    <img class="img-product" src = '${product.urlImage}' alt="Imagen Producto">
    <div class='div-espec'>
    <h2 class='titulo-product'>${product.name}</h2>
    <p class='price-product'>$${product.price}</p>
    <p class='descripcion-prod'>${product.descripcion}</p> 
    </div>
  `
    contProd.innerHTML = content; 

    return contProd
  })

}   






const asideProduct = (name , price , urlImage , id, section) => {  

  const div = document.createElement("div");

  const content = ` 
  <div class="producto__img"> 
  <img src="${urlImage}" alt="">
  </div>
  <p>${name}</p>
  <p>${price}</p>
  <a class='link-prod'href="../screens/product.html?id=${id}">Ver Producto</a>
  `  
  div.innerHTML = content; 
  div.classList.add('tarjeta__producto')
  return div; 
}       



const datos = () => { 

  const url = new URL(window.location); 
  const id = url.searchParams.get('id');

  const listaProductos = productosService.listProducts(); 
;


  productosService.datosProduct(id).then(product => {
     
    listaProductos.then((data) => {
      data.forEach(({name , price , urlImage , section , id}) =>{
        if(product.section === section){
          const nuevaLinea = asideProduct(name , price , urlImage , id); 
          aside.appendChild(nuevaLinea);
        }
      })
    } )
  })
 
}


datos();












productosService
.listProducts()
.then( (data)  =>{
  data.forEach(({name , price , section , id , urlImage, descripcion})=> {
    if(section === starWars ){
      const nuevaLinea = crearProducto(name, price , id ,urlImage, descripcion); 
      contProd.appendChild(nuevaLinea);
    }
  }) 
  data.forEach(({name , price , section , id , urlImage, descripcion})=> {
    if(section === consolas ){
      const nuevaLinea = crearProducto(name, price , id ,urlImage, descripcion); 
      contProd.appendChild(nuevaLinea);
    }
  })
  data.forEach(({name , price , section , id , urlImage, descripcion})=> {
    if(section === mesa ){
      const nuevaLinea = crearProducto(name, price , id ,urlImage, descripcion); 
      contProd.appendChild(nuevaLinea);
    }
  })
  data.forEach(({name , price , section , id , urlImage, descripcion})=> {
    if(section !== mesa && section !== starWars && section !== consolas ){
      const nuevaLinea = crearProducto(name, price , id ,urlImage, descripcion); 
      contProd.appendChild(nuevaLinea);
    }
  })
})



const btnLogin = document.querySelector('#btn_login-prod') 


btnLogin.addEventListener("click" , () => {
  document.location.href = "../screens/login.html"
})