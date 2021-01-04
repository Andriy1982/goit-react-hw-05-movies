import React, { useEffect, useState } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import API from '../services/movies-api';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
// import 'animate.css/animate.compat.css'

const notification = {
  title: 'Wonderful!',
  message: 'Configurable',
  type: 'danger',
  // insert: "top",
  // container: "top-right",
  // animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  // animationOut: ["animate__animated animate__fadeOut"], // `animate.css v4` classes
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

export default function HomePage(props) {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(store.addNotification({ ...notification,
  //   container: 'top-right'}));

  useEffect(() => {
    store.addNotification({
      ...notification,
      container: 'center',
    });
    setIsLoading(true);
    API.getMovies().then(data => {
      setMovies(data);
      setIsLoading(false);
    });
    // setTimeout(() => {
    //   API.getMovies().then(data => {setMovies(data)
    //   });
    // }, 10000)
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {movies && <MovieList movies={movies} />}
    </>
  );
}
