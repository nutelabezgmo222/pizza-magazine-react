import React from 'react'
import ContentLoader from "react-content-loader"

function PizzaLoadingBlock() {
  return (
    <ContentLoader 
        className="pizza-block"
        speed={2}
        width={260}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#c0c0c0"
        foregroundColor="#ffffff"
      >
        <rect x="0" y="280" rx="0" ry="0" width="280" height="27" /> 
        <circle cx="130" cy="120" r="120" /> 
        <rect x="0" y="324" rx="7" ry="7" width="280" height="84" /> 
        <rect x="2" y="414" rx="0" ry="0" width="116" height="29" /> 
        <rect x="143" y="414" rx="23" ry="23" width="138" height="35" />
  </ContentLoader>
  )
}

export default PizzaLoadingBlock
