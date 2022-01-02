import React from "react";

const Styles = ({ style, photos, onClick, item }) => {
  return (
    <>
        <img className='style-thumbnail'
        onClick={() => onClick(item.photos, item)}
         src={photos[0].thumbnail_url} />
    </>
  );
};

export default Styles;
