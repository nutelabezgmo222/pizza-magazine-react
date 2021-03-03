export const setTotalPrice = (totalPrice) => ({
  type: 'SET_TOTAL_PRICE',
  payload: totalPrice,
})

export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
})

export const minusPizzaFromCart = (pizzaObj) => ({
  type: 'MINUS_PIZZA_CART',
  payload: pizzaObj,
})

export const removePizzaFromCart = (pizzaObj) => ({
  type: 'REMOVE_PIZZA_CART',
  payload: pizzaObj,
})

export const setCart = (pizzas) => ({
  type: 'SET_CART',
  payload: pizzas
})
export const clearCart = () => ({
  type: 'CLEAR_CART'
})