import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';
import Recuperacion from './components/recovery/recuperacion';
import NuevaContrasena from './components/NuevaContrasena/NuevaContrasena';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con Layout completo (Header + Footer) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          }
        />

        {/* Rutas sin Layout (Login y Register) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
        <Route path="/nueva-contraseña/:token" element={<NuevaContrasena />} />
      </Routes>
    </Router>
  );
}

export default App;
