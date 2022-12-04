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


export const productosService = {
  listProducts, 
  crearCliente ,
  deleteClient
}

