const email = document.querySelector(".email"); 
const btn = document.querySelector(".login");   
const password = document.querySelector(".password");


const datos = {
  email : 'admin@gmail.com', 
  passwrod : 'Admin123123'
}

const rgx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; 
const rgxPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;


btn.addEventListener("click" , (event) => {  
  event.preventDefault()
  const validation = rgx.test(email.value);   
  const validationPass = rgxPass.test(password.value); 

  if(password.value === datos.passwrod && email.value === datos.email ) {
    window.location.href = '/screens/allProducts.html';
  }
  else if(validation === true && validationPass === true ) {
    window.location.href = '/screens/index.html';
  }
})