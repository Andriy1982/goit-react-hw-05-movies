import React from 'react';
import { useParams } from 'react-router-dom';

export default function MoviesDetailsPage(props) {
  const { moviesId } = useParams();
  console.log(useParams);
  console.log(moviesId);

  return <>{moviesId && <h1> {` Movies ${moviesId}`}</h1>}</>;
}
