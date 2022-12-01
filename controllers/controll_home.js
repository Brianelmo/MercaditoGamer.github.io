import { productosService } from "../servicios/products.js";

const newProduct = (name , price , urlImage , section) => {
  const card = document.createElement("div");
  const content = ` 
  <div class="tarjeta__producto">
    <div class="producto__img"> 
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

const starWars = "Star Wars";
const consolas = "Consola"; 
const mesa = "Mesa"; 


const sectWa = document.querySelector(".container__products"); 
const sectCons = document.querySelector(".consolas");
const sectMesa = document.querySelector(".mesas");  


productosService
.listProducts()
.then( (data) => {
  data.forEach(({name  , price , urlImage , section}) => {
    if(section === starWars) {
      const nuevaLinea = newProduct(name , price , urlImage , section)
      sectWa.appendChild(nuevaLinea);
    } 
    if(section === consolas) {
      const nuevaLinea = newProduct(name , price , urlImage , section)
      sectCons.appendChild(nuevaLinea);
    }
    if(section === mesa) {
      const nuevaLinea = newProduct(name , price , urlImage , section)
      sectMesa.appendChild(nuevaLinea);
    }
  })
})

 

render()



