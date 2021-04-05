import React from 'react';
import './carrito.css'
import Producto from './Producto';
const MostrarCarrito = ({carrito,agregarProducto}) => {
    return ( 
        <div className="carrito">
            <h2> Tu carrito de compras </h2>
            {carrito.length === 0
            ? <p>No hay productos agregados</p>
            : carrito.map(producto => (
                <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
                />
            ))}
        </div>
     );
}
 
export default MostrarCarrito;