import { productosService } from "../servicios/products.js";

const formulario = document.querySelector("[data-form-product]"); 


formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre-product]").value;
  const url = document.querySelector("[data-url-product]").value;
  const precio = document.querySelector("[data-precio-product]").value;
  const categoria = document.querySelector("[data-categoria-product]").value;
  productosService.crearCliente(nombre , precio , categoria , url)
  .then(reponse => {
    console.log(reponse); 
  })
  .catch(error => console.log(error));
})