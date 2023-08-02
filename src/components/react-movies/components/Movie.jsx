import React from 'react';

export const Movie = (props) => {
  const {
    Title,
    Year,
    Poster,
    source,
    id,
    name,
    poster,
    shortDescription,
    year,
    type,
    rating,
  } = props;

  let image = source === 'omdb' ? Poster : poster.previewUrl;
  if (image === 'N/A') {
    image = 'http://placehold.jp/134x200.png';
  }
  return (
    <div className='card movie'>
      <div className='card-image'>
        <img className='activator' src={image} alt='img' />
      </div>

      <div className='card-content'>
        <span className='card-title  activator'>
          {source === 'omdb' ? Title : name}
        </span>
        <p>
          {source !== 'omdb' && rating.kp}
          <span className=' right'>{source === 'omdb' ? Year : year}</span>
        </p>
      </div>
    </div>
  );
};
