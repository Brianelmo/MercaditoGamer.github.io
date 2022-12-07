import { productosService } from "../servicios/products.js";


const newProduct = (name , price , urlImage , id) => {
  const card = document.createElement("div");
  console.log(id);
  const content = `
  <div class="tarjeta__producto">
    <div class="producto__img"> 
      <div class="botones__prod">
        <i class="fa-solid fa-trash" id='${id}'></i>
        <a href="/screens/editProduct.html?id=${id}"><i class="fa-solid fa-pencil"></i></a>
      </div>
      <img src="${urlImage}" alt="">
    </div>
    <p>${name}</p>
    <p>${price}</p>
  `  

  card.innerHTML = content;



  const btn = card.querySelector('.fa-trash');
  btn.addEventListener("click", () => {
    const id = btn.id; 
    productosService.deleteClient(id).then(reponse => {
    
    }).catch(error => console.log(error));
  })

  card.classList.add("productos__container")
 
  return card
} 

const product = document.querySelector(".container__products"); 

const render = async () => {
  try { 
    const listaProductos = await productosService.listProducts(); 
    listaProductos.forEach((element) => {
      product.appendChild(newProduct(element.name , element.price , element.urlImage , element.id));
    })
  }
  catch(error) {
    console.log(error) 
  }
} 

render(); 

