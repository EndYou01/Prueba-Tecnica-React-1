import { productos } from "../data/productos"

export const getCardById = (id: any)=>{

    return productos.find( prod => prod.id == id)

}