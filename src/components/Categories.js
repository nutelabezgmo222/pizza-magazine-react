import React from 'react'

const Categories = React.memo(function Categories({activeCategory, items = [], onClickCategory=f=>f}) {
    return ( 
        <div className="categories">
        <ul>
          <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
          { items && 
              items.map((item, i) => {
                  return <li className={activeCategory === i ? 'active' : ''} onClick={() => onClickCategory(i)} key={`${item}_${i}`}>{item}</li>
              })
          }
        </ul>
      </div>
    )
})

export default Categories
