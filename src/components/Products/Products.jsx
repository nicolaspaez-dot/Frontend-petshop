import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: 'Conjunto para salchicha ',
      description: 'Conjunto para salchicha bastante calenito y comodo.',
      price: 89.99,
      image: '/media/images/perrooo.jpg'
    },
    {
      id: 2,
      name: 'Arnes camuflado',
      description: 'Arnes para perro camuflado .',
      price: 75.99,
      image: '/media/images/napo.jpg'
    },
    {
      id: 3,
      name: 'Disfraz de gato',
      description: 'Disfraz de gato para vestir de superman.',
      price: 34.99,
      image: '/media/images/gatosu.jpg'
    },
    {
      id: 4,
      name: 'Conjunto para salchicha ',
      description: 'Conjunto para salchicha bastante calenito y comodo.',
      price: 89.99,
      image: '/media/images/perrooo.jpg'
    },
    {
      id: 5,
      name: 'Arnes camuflado',
      description: 'Arnes para perro camuflado .',
      price: 75.99,
      image: '/media/images/napo.jpg'
    },
    {
      id: 6,
      name: 'Disfraz de gato',
      description: 'Disfraz de gato para vestir de superman.',
      price: 34.99,
      image: '/media/images/gatosu.jpg'
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