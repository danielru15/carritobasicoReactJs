import React from 'react'
import './carrito.css'

const Producto = ({producto,productos,carrito,agregarProducto}) => {

    const {nombre, precio, id} = producto
    //  agregar producto al carrito
    const agregarcarrito = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0]
        agregarProducto([
            //spread operator
            ...carrito,
            producto
        ])
    }
    // eliminar un producto del carrito
    const Eliminarcarrito = (id) => {
        const productos = carrito.filter(producto => producto.id !== id)

        //colocar productos en el state
        agregarProducto(productos)
    }

    return (  
        <div className="lista">
            <h2>{nombre}</h2>
            <h2>${precio}</h2>

            {
             productos 
             ?
             (
                <button 
                type="button" 
                onClick ={() => agregarcarrito(id)}
                >Comprar</button>
             )
             :   
             (
                <button 
                type="button" 
                onClick ={() => Eliminarcarrito(id)}
                >Eliminar</button>
             )
            }
           
        </div>
    );
}
 
export default Producto;