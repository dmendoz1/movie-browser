import React from 'react';

const Movie = ({movie}) => {
  const {poster_path, overview, title, vote_average, id, release_date} = movie;
  const image_url = 'https://image.tmdb.org/t/p/w185' + poster_path;
  const handleViewClick = _ => {
    const url = 'https://www.themoviedb.org/movie/' + id;
    window.open(url, '_blank');
  }

  return (
    <div className="movie-row">
      <div className="movie-img-container">
        <img src={image_url} alt={title} />
      </div>
      <div className="movie-info-container">
        <h2>{title}</h2>
        <div className="synopsis-overview">{overview}</div>
        <div className="movie-data-container">
          <span className="released-date pill">Released:</span> <span className="data">{release_date}</span>
          <span className="vote-average pill">Average rating:</span> <span className="data">{vote_average}</span>
          <button className="view-btn btn" target="_blank" onClick={handleViewClick}>View</button>
        </div>
      </div>
    </div>
  )
}

export default Movie;
