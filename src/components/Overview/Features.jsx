import React from 'react'

const Features = ({product, loaded}) => {
  // console.log('product:', product)

  const feature = {
    marginLeft: '15px',
    paddingTop: '20px'
  };
  const featureInner = {
    'marginBottom': '5px',
  };

    return (
      <div style={feature}>
       {product.map((item, i) => {
            return <div style={featureInner} key={i}>- {item.feature}: {item.value} ✔</div>
          })}
      </div>
    )
  }

export default Features
