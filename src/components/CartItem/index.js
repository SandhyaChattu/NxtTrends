import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {cartItemDetails} = props
      const {title, brand, quantity, price, imageUrl} = cartItemDetails
      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <p className="cart-quantity">{quantity}</p>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
            </div>
          </div>

          <AiFillCloseCircle color="#616E7C" size={20} />
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
