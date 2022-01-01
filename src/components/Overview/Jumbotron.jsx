import React from 'react'

const Jumbotron = ({item}) => {
  return (
    <div>
        <img
         src={item.thumbnail_url} />
    </div>
  )
}


export default Jumbotron
