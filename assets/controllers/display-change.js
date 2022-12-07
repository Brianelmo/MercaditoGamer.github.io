const btnAdd = document.querySelector("[data-btn-add]");  



btnAdd.addEventListener("click", (event) => {
  event.preventDefault(); 
  window.location.href = './newProduct.html'; 
}) 


