import React, {useEffect} from 'react';
import {debounce} from 'lodash';

const Discover = ({fetchMovies}) => {
  useEffect( () => {
    let query= '&primary_release_date.gte=2014-09-15&primary_release_date.lte=2019-08-22';
    fetchMovies('discover',query);
  },[]);
  const handleSearchChange = debounce((movie) => {
    fetchMovies('search', movie);
  }, 400);


  return (
    <div className="title-container">
      <h2>Browse</h2>
      <input type="text" onChange={(e) => handleSearchChange(e.target.value)} className="searchbox" placeholder="Which movie are you looking for?" />

    </div>
  )
}

export default Discover;
