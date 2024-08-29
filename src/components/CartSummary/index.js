// Write your code here
import Popup from 'reactjs-popup'
import cartContext from '../../context/CartContext'

const CartSummary = () => (
  <cartContext.Consumer>
    {value => {
      const {cartList} = value
      const sum = 0
      cartList.map(eachItem => sum + eachItem.price)
      const {length} = cartList
      return (
        <div className="cartSummary">
          <h1>
            Order Total:<span>Rs {sum}</span>
          </h1>
          <p>{length} items in Cart</p>
          <Popup
            trigger={<button>Check it out Out</button>}
            position="right center"
          >
            <div>Popup content here !!</div>
          </Popup>
        </div>
      )
    }}
  </cartContext.Consumer>
)

export default CartSummary
