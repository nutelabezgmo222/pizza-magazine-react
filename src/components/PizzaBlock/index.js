import React from "react";
import classNames from '../../features'
import PropTypes from 'prop-types'
import Button from '../Button'

function PizzaBlock({id, imageUrl, cartCount = 0, name, price, onClickAddPizza, types = [0], sizes = [0]}) {
  const [activeType, setActiveType] = React.useState(types[0])
  const [activeSize, setActiveSize] = React.useState(sizes[0])
  const availableTypes = ['тонкое','традиционное']
  const availableSizes = [26, 30, 40]
  const changeType = (index) => {
    setActiveType(index)
  }
  const changeSize = (index) => {
    setActiveSize(index)
  }
  const handleAddPiza = () => {
    const obj = {
      id,
      name,
      price,
      imageUrl,
      size: activeSize,
      type: availableTypes[activeType]
    }
    onClickAddPizza(obj)
  }
  return (
    <div data-id={id} className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, i) => {
            return <li onClick={()=>changeType(i)} 
              className={classNames({
                'active': activeType===i,
                'disabled': !types.includes(i)
              })} key={`${type}_${i}`}>{type}</li>;
          })}
        </ul>
        <ul>
          {availableSizes.map((size, i) => {
            return <li onClick={()=>changeSize(size)} 
            className={classNames({
              'active': activeSize===size,
              'disabled': !sizes.includes(size)
            })} key={`${size}_${i}`}>{size} см.</li>;
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={handleAddPiza} outline specialClasses="button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {cartCount ?
            <i>{cartCount}</i>
            : ''
          }
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.oneOf([26, 30, 40])),
  price: PropTypes.number,
  onAddPizza: PropTypes.func,
}
export default PizzaBlock;
