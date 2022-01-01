import React from 'react'

const Features = ({product, loaded}) => {
  // console.log('product:', product)

    return (
      <>
       {product.map((item, i) => {
            return <div key={i}>- {item.feature}: {item.value} ✔</div>
          })}
      </>
    )

  }

export default Features
