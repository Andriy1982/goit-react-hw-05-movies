import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/movies-api';
import Spinner from '../components/Spinner';
import { store } from 'react-notifications-component';
import notification from '../components/Notification';
import Reviews from '../components/Reviews';

export default function MovieReviewsPage() {
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    API.getMovieReviews(movieId).then(data => {
      setReviews(data);
      if (data.length < 1) {
        store.addNotification({
          ...notification,
          container: 'bottom-center',
          message: 'There are no reviews for this movie',
        });
      }
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {reviews && <Reviews reviews={reviews} />}
    </>
  );
}
