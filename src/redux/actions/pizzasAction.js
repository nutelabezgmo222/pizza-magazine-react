import data from 'db'

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  // let url = '/pizzas?_sort='
  // switch(sortBy) {
  //   case 'popular' : 
  //     url += 'rating&_order=desc'
  //     break;
  //   case 'price' :
  //     url += 'price&_order=desc'
  //     break;
  //   case 'alphabet' :
  //     url += 'name&_order=desc';
  //     break;
  //   default: 
  //     url += 'rating&_order=desc'
  // }
  // if(category !== null) {
  //   url += '&category=' + category
  // }
  new Promise((resolve, reject) => {
    let pizzas = data.pizzas
    if(category !== null) {
      pizzas = pizzas.filter((pizza) => {
        if(category === pizza.category) {
          return pizza
        }
        return false
      })
    }
    let sortProp;
    switch(sortBy) {
      case 'popular' : 
        sortProp = 'rating'
        break;
      case 'price' :
        sortProp = 'price'
        break;
      case 'alphabet' :
        sortProp = 'name'
        break;
      default: 
        sortProp = 'rating'
    }
    pizzas = pizzas.sort((pizzaA, pizzaB) => {
      return pizzaA[sortProp] > pizzaB[sortProp] ? true : false;
    })
    setTimeout( () => resolve(pizzas), 1000)
  }).then( pizzas => {
    dispatch(setPizzas(pizzas))
  })
}


export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})
