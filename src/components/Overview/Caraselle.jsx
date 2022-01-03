import React from "react";

const Caraselle = ({thumb, onClick, index, currentThumb}) => {
  return (
    <div>
    <img className={currentThumb === index ?'current-gallery-thumbnail' : 'gallery-thumbnails'}

    index={index}
    onClick = {() => onClick(event)}
    // className="gallery-thumbnails"
    src={thumb} />
    </div>
  );
};

export default Caraselle;
