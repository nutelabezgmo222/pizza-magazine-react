import React from "react"
import { useDispatch } from 'react-redux'
import { Route } from "react-router-dom"
import { Header } from "./components"
import { Home, Cart } from "./pages"
import { setCart } from './redux/actions/cartAction'


function App() { 
  const dispatch = useDispatch()
  if(localStorage.getItem('cart')) {
    const pizzas = JSON.parse(localStorage.getItem('cart'))
    dispatch(setCart(pizzas))
  }
  return(
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

export default App
