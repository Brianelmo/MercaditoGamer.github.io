//GET

const listProducts  = () => fetch('https://mercaditogamer.onrender.com/producto').then(respuesta => respuesta.json());  

const crearCliente = (name , price , section , urlImage , id) => {
  return fetch(`https://mercaditogamer.onrender.com/producto/${id}`, {
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
  return fetch(`https://mercaditogamer.onrender.com/producto/${id}`, {
    method: "DELETE", 
  })
} 


const datosProduct = (id) => {
  return fetch(`https://mercaditogamer.onrender.com/producto/${id}`).
  then(reponse  =>  reponse.json());
}
 

const editClient = (name , price , urlImage , section, id) => {
  return fetch(`https://mercaditogamer.onrender.com/producto/${id}`, {
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

