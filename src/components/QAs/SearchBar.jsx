import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import { BsSearch } from 'react-icons/bs';


const SearchBar = ({ search, question, handleSearchChange }) => {

  const icon = {
    textalign: "end",
  };

  return (
    <div className="search-container">
      <form action="/action_page.php">
        <input type="text" className='q-search-bar' onChange={handleSearchChange} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... " name="search" />
        <style>
          background-image: <BsSearch />
        </style>
      </form>
    </div>
  )
}

export default SearchBar;
