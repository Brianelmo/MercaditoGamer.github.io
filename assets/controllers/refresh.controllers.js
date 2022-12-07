import { productosService } from "../servicios/products.js"; 

const form = document.querySelector('.inputs-edit'); 

const obtenerProduct = () => {
  const url = new URL(window.location); 
  const id = url.searchParams.get('id');

  const nombre = document.querySelector('.nombre-edit');
  const price = document.querySelector('.price-edit');
  const img = document.querySelector('.url-edit'); 
  const section = document.querySelector('.section-edit');
  const imgProduct = document.querySelector('.img-editar');

  productosService.datosProduct(id).then( product =>  {
    nombre.value = product.name;
    price.value = product.price; 
    img.value = product.urlImage;
    section.value = product.section; 

    const contenido = `
    <img class = 'imagen-edit' src="${product.urlImage}" alt="">
    ` 

    imgProduct.innerHTML = contenido;
  });
} 



obtenerProduct(); 

form.addEventListener('submit', (event) => {

  event.preventDefault();

  const url = new URL(window.location); 
  const id = url.searchParams.get('id');

  const nombre = document.querySelector('.nombre-edit').value;
  const price = document.querySelector('.price-edit').value;
  const img = document.querySelector('.url-edit').value; 
  const section = document.querySelector('.section-edit').value;
  const imgProduct = document.querySelector('.img-editar').value; 

  productosService.editClient(nombre , price , img , section , id).then(() => {
    window.location.href = './allProducts.html';
  });
  
})





const btn = document.querySelector('.button__admin');


btn.addEventListener('click' , () => {
  window.location.href = './allProducts.html';
})