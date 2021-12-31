import React from 'react';
import ReactDOM from 'react-dom';


const SearchBar = (props) => {

  return (
    <div className="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." name="search" />
        <button type="submit"><i className="fa fa-search"></i>Search</button>
      </form>
    </div>
  )
}


export default SearchBar;

// To do:
//  Handle a change event where whatever is being input will dynamically search the API and come up with a filtered list
//  Ensure the placeholder text is there
