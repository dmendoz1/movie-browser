import React, {useEffect} from 'react';

const Popular = ({fetchMovies}) => {
  useEffect( () => {
    let query= '&primary_release_year=2019&sort_by=vote_average.desc';
    fetchMovies('discover',query);
  }, []);
  return (
    <div className="title-container">
      <h2>Popular</h2>
      <p>These are movies that have been released this year that have received the highest average rating</p>
    </div>
  )
}

export default Popular;
