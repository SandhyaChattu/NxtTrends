import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item
  addQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(each =>
        each.id === id ? {...each, quantity: each.quantity + 1} : each,
      ),
    }))
  }

  addCartItem = product => {
    const {cartList} = this.state
    const checkList = cartList.filter(eachItem => eachItem.id === product.id)
    if (checkList.length === 0) {
      this.setState(prevState => ({
        cartList: [...prevState.cartList, product],
      }))
    } else {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          if (eachItem.id === product.id) {
            return {
              ...eachItem,
              quantity: eachItem.quantity + 1,
            }
          }
          return eachItem
        }),
      }))
    }
  }

  //   TODO: Update the code here to implement addCartItem

  deleteQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(each =>
        each.id === id ? {...each, quantity: each.quantity - 1} : each,
      ),
    }))
  }

  removeCartItem = id => {
    // console.log(id)
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(eachItem => eachItem.id !== id),
    }))
  }

  removeAll = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.addQuantity,
          decrementCartItemQuantity: this.deleteQuantity,
          removeAllCartItems: this.removeAll,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
