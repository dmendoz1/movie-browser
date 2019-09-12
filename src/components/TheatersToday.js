import React, {useEffect} from 'react';

const TheatersToday = ({fetchMovies}) => {

  useEffect( () => {
    let date = new Date(),
        monthAgo = date.getMonth(),
        month = date.getMonth() + 1,
        day = date.getDate().toString(),
        year = date.getFullYear();
    month = month.length > 1 ? month.toString() : '0'+ month;
    if(monthAgo === 0) {
      monthAgo = '12';
      year = year - 1;
    } else {
      monthAgo = monthAgo.toString().length > 1 ? monthAgo.toString() : '0'+ monthAgo;
    }
    let todaysDate = year + '-' + month + '-' + day;
    let monthAgoDate = year + '-' + monthAgo + '-' + day;
    let query= '&primary_release_date.gte=' + monthAgoDate + '&primary_release_date.lte=' + todaysDate;
    fetchMovies('discover',query);
  }, []);
  return (
    <div className="title-container">
      <h2>In theaters today</h2>
      <p>These are the movies that have been released in the last month!</p>
    </div>
  )
}

export default TheatersToday;
