import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: 'Mochila de Transporte',
      description: 'Mochila espaciosa y cómoda para transportar a tu mascota.',
      price: 89.99,
      image: '/media/images/mochila-negra.jpg'
    },
    {
      id: 2,
      name: 'Bolso Acolchado Rosa',
      description: 'Bolso suave y elegante con diseño acolchado.',
      price: 75.99,
      image: '/media/images/bolso-rosa.jpg'
    },
    {
      id: 3,
      name: 'Impermeable Amarillo',
      description: 'Protege a tu mascota de la lluvia con estilo.',
      price: 34.99,
      image: '/media/images/impermeable-amarillo.jpg'
    }
  ]);

  const handleAddToCart = (product) => {
    // Aquí irá la lógica para añadir al carrito
    console.log('Producto añadido:', product);
  };

  return (
    <section className="products-section">
      <h2 className="products-title">Nuestros Productos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price}</div>
              <button 
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products; 