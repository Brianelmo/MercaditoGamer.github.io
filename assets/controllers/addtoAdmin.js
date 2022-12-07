const btnAdmin = document.querySelector("[data-admin-btn]"); 

btnAdmin.addEventListener("click", (event)=> {
  event.preventDefault(); 

  window.location.href = '/screens/allProducts.html';
})