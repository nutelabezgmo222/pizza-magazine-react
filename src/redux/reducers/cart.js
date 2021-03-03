const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload
      }
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload
      }
    case 'ADD_PIZZA_CART': {
      const pizzaObj = action.payload
      const currentPizzas = state.items[pizzaObj.id] ? state.items[pizzaObj.id].slice() : []
      let newPizzas
      let isPizzaExist = false
      if(currentPizzas.length) {
        newPizzas = currentPizzas.map( (pizza) => {
          if(pizza.type === pizzaObj.type && pizza.size === pizzaObj.size){
            isPizzaExist = true
            return {
              ...pizza,
              count: pizza.count + 1
            }
          }
          return pizza
        })
      }
      if(!isPizzaExist) {
        newPizzas = [{...pizzaObj, count: 1}].concat(currentPizzas)
      }
      const allPizzas = {
        ...state.items,
        [pizzaObj.id]: newPizzas
      }
      localStorage.setItem('cart', JSON.stringify(allPizzas))
      const totalCount = Object.values(allPizzas).flat(2).reduce((total, pizza) => total + pizza.count, 0)
      const totalPrice = Object.values(allPizzas).flat(2).reduce((total, pizza) => total + pizza.price*pizza.count, 0)
      return {
        ...state,
        items: allPizzas,
        totalCount,
        totalPrice,
      }
    }
    case 'MINUS_PIZZA_CART': {
      const pizzaObj = action.payload
      const currentPizzas = state.items[pizzaObj.id].slice()
      let newPizzas = currentPizzas.map( (pizza) => {
          if(pizza.type === pizzaObj.type && pizza.size === pizzaObj.size){
            return {
              ...pizza,
              count: pizza.count - 1 > 0 ? pizza.count - 1 : 1
            }
          }
          return pizza
       })
      const allPizzas = {
        ...state.items,
        [pizzaObj.id]: newPizzas
      }
      localStorage.setItem('cart', JSON.stringify(allPizzas))
      const totalCount = Object.values(allPizzas).flat(2).reduce((total, pizza) => total + pizza.count, 0)
      const totalPrice = Object.values(allPizzas).flat(2).reduce((total, pizza) => total + pizza.price*pizza.count, 0)
      return {
        ...state,
        items: allPizzas,
        totalCount,
        totalPrice,
      }
    }
    case 'REMOVE_PIZZA_CART': {
      const pizzaObj = action.payload
      const currentPizzas = state.items[pizzaObj.id].slice()
      let newPizzas = currentPizzas.filter( (pizza) => {
          if(pizza.type === pizzaObj.type && pizza.size === pizzaObj.size) {
            return false
          } else {
            return pizza
          }
       })
      const allPizzas = {
        ...state.items,
        [pizzaObj.id]: newPizzas
      }
      localStorage.setItem('cart', JSON.stringify(allPizzas))
      const totalCount = Object.values(allPizzas).flat(2).reduce((total, pizza) => total + pizza.count, 0)
      const totalPrice = Object.values(allPizzas).flat(2).reduce((total, pizza) => total + pizza.price*pizza.count, 0)
      return {
        ...state,
        items: allPizzas,
        totalCount,
        totalPrice,
      }
    }
    case 'SET_CART': {
      const pizzas = action.payload
      const totalCount = Object.values(pizzas).flat(2).reduce((total, pizza) => total + pizza.count, 0)
      const totalPrice = Object.values(pizzas).flat(2).reduce((total, pizza) => total + pizza.price*pizza.count, 0)
      return {
        ...state,
        items: pizzas,
        totalCount,
        totalPrice
      }
    }
    case 'CLEAR_CART': {
      localStorage.removeItem('cart')
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      }
    }
    default: 
      return state
  }
}

export default cart