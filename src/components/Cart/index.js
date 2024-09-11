import Header from '../Header'

import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'

import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      // TODO: Update the functionality to remove all the items in the cart

      return (
        <>
          <Header />
          <div className="cart-container">
            {cartList.length === 0 ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="top-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    onClick={removeAllCartItems}
                    type="button"
                    className="remove-btn"
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
