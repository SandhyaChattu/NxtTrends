import {useContext, useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const paymentOptionsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isDisabled: false,
  },
]

const Payment = () => {
  const [isOrderPlaced, setPlaceOrder] = useState(false)
  const {cartList} = useContext(CartContext)

  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const renderPaymentOptions = () => (
    <ul className="ProductList">
      {paymentOptionsList.map(each => (
        <li key={each.id}>
          {' '}
          <input type="radio" id={each.id} name="Payment Method" />
          <label htmlFor={each.id}>{each.displayText}</label>
        </li>
      ))}
    </ul>
  )
  const renderSuccessMesage = () => (
    <p>Your Order has been Succesfully Placed</p>
  )
  const ConfirmOrder = () => setPlaceOrder(true)

  return (
    <div>
      {isOrderPlaced ? (
        renderSuccessMesage()
      ) : (
        <div className="PaymentsContainer">
          <h1 className="Paymentheading">Payments Details</h1>
          <p className="Paymentsubheading">Payments Method</p>
          {renderPaymentOptions()}
          <p className="order">Order details:</p>
          <p>{cartList.length}</p>
          <p>TotalPrice:{getTotalPrice()}</p>
          <button onClick={ConfirmOrder} type="button" className="cartButton">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}

export default Payment
