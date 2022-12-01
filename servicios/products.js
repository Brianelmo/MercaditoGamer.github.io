//GET

const listProducts  = () => fetch('http://localhost:3000/producto').then(respuesta => respuesta.json()); 

export const productosService = {
  listProducts, 
}

