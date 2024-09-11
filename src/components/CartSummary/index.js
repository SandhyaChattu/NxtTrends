// Write your code here
import Popup from 'reactjs-popup'
import cartContext from '../../context/CartContext'
import Payment from '../Payment'
import './index.css'

const CartSummary = () => (
  <cartContext.Consumer>
    {value => {
      const {cartList} = value

      const sum = cartList.reduce(
        (acc, current) => acc + current.quantity * current.price,
        0,
      )

      return (
        <div className="cartSummary">
          <h1 className="cartHeading">
            Order Total:<span className="SpanEl">Rs {sum}/-</span>
          </h1>
          <p>{cartList.length} items in Cart</p>
          <div className="payment-container">
            <Popup
              modal
              trigger={
                <button className="cartButton" type="button">
                  Checkout
                </button>
              }
              position="bottom left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </div>
      )
    }}
  </cartContext.Consumer>
)

export default CartSummary
