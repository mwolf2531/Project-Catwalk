import React from "react";
import Styles from "./Styles.jsx";
import { AiOutlineCheckCircle } from "react-icons/ai"

const StyleSelector = ({ styles, loaded, handleClick, current }) => {
  // console.log("styles!!!!:", styles);
  if (!loaded) {
    return <div>Loading...</div>;
  } else {
    // console.log("loaded:", loaded);
    return (
      <div className="style-thumbnail-container">
        {styles.map((item, i) => (
          <Styles  key={i}
          current={current}
          item={item}
           style={item.name}
            photos={item.photos}
            onClick={handleClick} />
        ))}
      </div>
    );
  }
};



export default StyleSelector;

