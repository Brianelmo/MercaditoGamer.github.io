//GET

const listProducts  = () => fetch('http://localhost:3000/producto').then(respuesta => respuesta.json());  

const crearCliente = (name , price , section , urlImage) => {
  return fetch('http://localhost:3000/producto', {
    method: "POST", 
    headers: {
      "Content-Type" : "application/json"
    }, 
    body: JSON.stringify({
      section, 
      urlImage,
      name,
      price, 
      id: uuid.v4()
    })
  }) ; 
  
}  

const deleteClient = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE", 
  })
} 


const datosProduct = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).
  then(reponse  =>  reponse.json());
}
 

const editClient = (name , price , urlImage , section, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method:"PUT", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      name,
      price,
      urlImage,
      section
    })
  }).then((reponse) => reponse)
}


export const productosService = {
  listProducts, 
  crearCliente ,
  deleteClient ,
  datosProduct,
  editClient
}

