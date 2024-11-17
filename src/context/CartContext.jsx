import { createContext, useState, useContext } from 'react';

// 1. Crear el contexto
const CartContext = createContext();

// 2. Crear el Provider (proveedor)
export const CartProvider = ({ children }) => {
  // Estado principal del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems(prev => {
      // Buscar si el producto ya existe en el carrito
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        // Si existe, aumentar la cantidad
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si no existe, agregarlo con cantidad 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Función para remover productos del carrito
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  // Proveer el contexto a los componentes hijos
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);