import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  console.log(search);

  const loadOptions = (inputValue) => {
    console.log(inputValue);
    console.log(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`
    );

    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city, index) => {
            return {
              latitude: `${city.latitude}`,
              longitude: `${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    console.log(searchData);
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <>
      {" "}
      <AsyncPaginate
        placeholder="Enter a city"
        value={search}
        debounceTimeout={600}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
