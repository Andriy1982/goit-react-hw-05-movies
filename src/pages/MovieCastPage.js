import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/movies-api';
import Spinner from '../components/Spinner';
import Cast from '../components/Cast';

export default function MovieCastPage() {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.getMovieCast(movieId).then(data => {
      setCast(data);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {cast && <Cast cast={cast} />}
    </>
  );
}
