import React from "react";

import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../components";

import { setCategory, setSortBy } from '../redux/actions/filtersAction'
import { fetchPizzas } from '../redux/actions/pizzasAction'
import { addPizzaToCart } from '../redux/actions/cartAction'


const categoryNames = ["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"]
const sortNames = [{name: "популярности", type: "popular"}, 
                   {name: "цене", type: "price"},  
                   {name: "алфавиту", type: 'alphabet'}]
function Home() {
  
  const dispatch = useDispatch()

  const items = useSelector( ({pizzas}) =>  pizzas.items)
  const cartItems = useSelector( ({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)

  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }
  const handleSortClick = sortType => {
    dispatch(setSortBy(sortType))
  }
  const handlePizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }
  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy, dispatch])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory = {category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup onClickSortType={handleSortClick} activeSortType={sortBy} items={sortNames} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ?  
        items.map((pizza, i) => {
          const cartCount = cartItems[pizza.id] ? cartItems[pizza.id].reduce((total, pizza) => total + pizza.count, 0) : 0
          return <PizzaBlock 
            cartCount={cartCount} 
            onClickAddPizza={handlePizzaToCart} {...pizza} key={`${pizza.id}_${i}`} />;
        })
          :Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
        }
      </div>
    </div>
  );
}

export default Home;
