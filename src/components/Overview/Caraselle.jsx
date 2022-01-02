import React from "react";

const Caraselle = ({thumb, onClick, index}) => {
  return (
    <div>
    <img
    index={index}
    onClick = {() => onClick(event)}
    className="gallery-thumbnails"
    src={thumb} />
    </div>
  );
};

export default Caraselle;
