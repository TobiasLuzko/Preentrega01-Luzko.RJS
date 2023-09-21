import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Importa el ícono del carrito
import './CartWidget.css'; // Asegúrate de importar tus estilos de CSS

function CartWidget() {
  // Número hardcodeado para la notificación
  const itemCount = 5;

  return (
    <div className="cart-widget">
      <AiOutlineShoppingCart className="cart-icon" />
      <div className="notification">{itemCount}</div>
    </div>
  );
}

export default CartWidget;