import { productosService } from "../servicios/products.js";

const newProduct = (name , price , urlImage , section , id) => {
  const card = document.createElement("div");
  const content = ` 
  <div class="tarjeta__producto">
    <div class="producto__img"> 
    <img src="${urlImage}" alt="">
    </div>
    <p>${name}</p>
    <p>${price}</p>
    <a class='link-prod'href="/screens/product.html?id=${id}">Ver Producto</a>
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
const sectVariedad = document.querySelector(".random");


productosService
.listProducts()
.then( (data) => {
  data.forEach(({name  , price , urlImage , section , id}) => {
    if(section === starWars) {
      const nuevaLinea = newProduct(name , price , urlImage , section, id)
      sectWa.appendChild(nuevaLinea);
    } 
    if(section === consolas) {
      const nuevaLinea = newProduct(name , price , urlImage , section, id)
      sectCons.appendChild(nuevaLinea);
    }
    if(section === mesa) {
      const nuevaLinea = newProduct(name , price , urlImage , section, id)
      sectMesa.appendChild(nuevaLinea);
    }
    if(section !== mesa && section !== starWars && section !== consolas) {
      const nuevaLinea = newProduct(name , price , urlImage, id)
      sectVariedad.appendChild(nuevaLinea);
    }
  })
})





