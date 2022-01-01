import React from "react";
import Styles from "./Styles.jsx";

const StyleSelector = ({ styles, loaded, onClick }) => {
  // console.log("styles!!!!:", styles);
  if (!loaded) {
    return <div>Loading...</div>;
  } else {
    // console.log("loaded:", loaded);
    return (
      <div className="style-thumbnail-container">
        {styles.map((item, i) => (
          <Styles  key={i}
          item={item}
           style={item.name}
            photos={item.photos}
            onClick={onClick} />
        ))}
      </div>
    );
  }
};



export default StyleSelector;

