import React from 'react';
// import moment from 'moment';

const SearchResults = ({data}) => {
  if(!data) return null
  const getLargeImage = () =>  {
    let url = data._links.thumbnail.href
    return url.replace("square", "large")
  }
  return (
    <div className="explore-div">
      <img className="explore-img" alt="" src={getLargeImage()} />
    <div className="explore-overlay">
      <div className="explore-desc">
        <h3 className="explore-title">{data.title}</h3>
        <p className="explore-dates">{data.description}</p>
      </div>
    </div>
  </div>
  );
}

export default SearchResults;