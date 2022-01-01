import React from "react";

const Styles = ({ style, photos, onClick, item }) => {
  return (
    <>
      {/* {style} */}

        {/* {photos.map((item, i) => {
          return <img key={i} src={item.thumbnail_url} />;
        })} */}
        <img className='style-thumbnail'
        onClick={() => onClick(item)}
         src={photos[0].thumbnail_url} />

    </>
  );
};

export default Styles;
