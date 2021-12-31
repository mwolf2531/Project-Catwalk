import React from "react";

const Styles = ({ style, photos }) => {
  return (
    <>
      {/* {style} */}

        {/* {photos.map((item, i) => {
          return <img key={i} src={item.thumbnail_url} />;
        })} */}
        <img className='style-thumbnail' src={photos[0].thumbnail_url} />

    </>
  );
};

export default Styles;
