import React,{ Fragment , useState} from 'react';
import MostrarCarrito from './components/Carrito';
import Footer from './components/Footer';
import Hola from './components/Hola'
import Producto from './components/Producto';
function App() {
  // Crear listado de productos 
  const [productos, setproductos ] = useState([
    {id:1,nombre:'camisa',precio:100},
    {id:2,nombre:'buso',precio:200},
    {id:3,nombre:'tenis',precio:790},
    {id:4,nombre:'boxers',precio:70},
    {id:5,nombre:'gorra',precio:90},
  ]
  )
  // state para un carrito de compras
  const [carrito,agregarProducto ] = useState([])

  return (
    <Fragment>
    
      <Hola/>
      <h2>lista de productos</h2>
      {productos.map(producto =>(
        <Producto
        key={producto.id}
        producto={producto}
        carrito={carrito}
        productos={productos}
        agregarProducto={agregarProducto}
        />
      ))}
      <MostrarCarrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer
       titulo="todos los derechos reservados | daniel ramirez"
      />
    </Fragment>
  );
}

export default App;

