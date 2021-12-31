import React from "react";
import Styles from "./Styles.jsx";

const StyleSelector = ({ styles, loaded }) => {
  console.log("styles!!!!:", styles);
  if (!loaded) {
    return <div>Loading...</div>;
  } else {
    console.log("loaded:", loaded);
    return (
      <div className="style-thumbnail-container">
        {styles.map((item, i) => (
          <Styles  key={i} style={item.name} photos={item.photos} />
        ))}
      </div>
    );
  }
};

// const StyleSelector = ({ styles, loaded }) => {
//   console.log("styles!!!!:", styles);
//   console.log("loaded:", loaded);
//   return (
//     <div className="style-thumbnail-container">
//       {styles.map((item, i) => (
//         <Styles key={i} style={item.name} photos={item.photos} />
//       ))}
//     </div>
//   );
// };

export default StyleSelector;
// import React, { Component } from "react";
// import Styles from "./Styles.jsx";

// export class StyleSelector extends Component {
//   constructor(props) {
//     super(props);
//     // TODO: add state
//     // array of all styles for product
//     // TODO: don't forget to bind functions and stuff
//   }

//   // TODO: api call to GET /products/:product_id/styles to get all styles
//   // for product and set state to that list

//   render() {
//     return (
//       <div>
//         {styles.results.map((item, i) => {
//           <Styles key={item.style_id} photos={item.photos} />;
//         })}
//       </div>
//     );
//   }
// }
// // TODO: Pass array of styles to Styles component

// export default StyleSelector;
