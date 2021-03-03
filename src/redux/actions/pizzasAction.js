import axios from 'axios'

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  let url = '/pizzas?_sort='
  switch(sortBy) {
    case 'popular' : 
      url += 'rating&_order=desc'
      break;
    case 'price' :
      url += 'price&_order=desc'
      break;
    case 'alphabet' :
      url += 'name&_order=desc';
      break;
    default: 
      url += 'rating&_order=desc'
  }
  if(category !== null) {
    url += '&category=' + category
  }
  axios.get(url).then(({data}) => {
    dispatch(setPizzas(data))
  })
}


export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})
