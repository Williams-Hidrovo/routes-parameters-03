import { NavLink } from "react-router-dom"
import type { IProducto } from "../Interfaces/Iproducto"


interface ProductCardProps{
    product:IProducto
}


export const ProductCard=({product}:ProductCardProps) =>{


    return(
        <div className="card">
            <h2>{product.nombre}</h2>
            <NavLink to={`/products/${product.id}`}>
            <img src={product.url} alt="" />
            </NavLink>
            
            <p className="price">$ {product.precio}</p>
            <p className="desc">{product.descripcion}</p>

        </div>
    )
}