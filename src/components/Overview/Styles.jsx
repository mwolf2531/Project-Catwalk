import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"

const Styles = ({ style, photos, onClick, item, current }) => {

  let check;

  if (current.name === style) {
     check = <AiOutlineCheckCircle className="checkmark"/>
  }

  return (
    <>
        <img
        className={current.name === style  ?'current-style-thumbnail' : 'style-thumbnail'}
        onClick={() => onClick(item.photos, item)}
         src={photos[0].thumbnail_url} /> <a className="checkmark">{check}</a>
    </>
  );
};

export default Styles;
