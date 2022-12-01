import { productosService } from "../servicios/products.js";


const newProduct = (name , price , urlImage ) => {
  const card = document.createElement("div");
  const content = `
  <div class="tarjeta__producto">
    <div class="producto__img"> 
      <div class="botones__prod">
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-pencil"></i>
      </div>
      <img src="${urlImage}" alt="">
    </div>
    <p>${name}</p>
    <p>${price}</p>
    <a href="#">Ver Producto</a>
  `  

  card.innerHTML = content 
  card.classList.add("productos__container")
 
  return card
} 

const product = document.querySelector("[data-allProducts]"); 

const render = async () => {
  try { 
    const listaProductos = await productosService.listProducts(); 
    listaProductos.forEach((element) => {
      product.appendChild(newProduct(element.name , element.price , element.urlImage))
    })
  }
  catch(error) {
    console.log(error)
  }
} 

render();