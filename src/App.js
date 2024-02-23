import React, { useState } from "react";
import './style.css';
import data from "./TemplateData.json";
import './countrySearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // to check if the search term matches any country
  const filteredData = data.filter((val) => {
    // If no search term, return all countries
    if (searchTerm === "") {
      return true; 
    } 
    // If currency matches search term, return the country
    else if (val.currency.toUpperCase().includes(searchTerm.toUpperCase())) {
      return true; 
    }
    // Otherwise, filter out the country
    else {
      return false; 
    }
  });

  return (
    <>
      <div className="Container">
        <div className="searchInput_Container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input id="searchInput" 
            type="text" 
            placeholder="Search By Currency INR, EUR"
            style={{ textAlign: "center" }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
        </div>
        <div className="template_Container">
          {filteredData.length > 0 ? (
            filteredData.map((val) => (
              <div className="template" key={val.name}>
                <img src={val.flag} alt={val.name} />
                <hr></hr>
                <h3>Name : {val.name}</h3>
                <p>Capital : {val.capital}</p>
                <p>Currency : {val.currency} ({val.currencySymbol})</p>
              </div>
            ))
          ) : (
            <div className="no-results">
              No Such Country Found,
              please Enter valid data.
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
