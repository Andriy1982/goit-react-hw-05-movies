import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/movies-api';
import styles from './Reviews.module.scss';
import Spinner from '../Spinner';

export default function Reviews(props) {
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  // console.log(movieId);
  // console.log(reviews);

  useEffect(() => {
    setIsLoading(true);
    API.getMoviesByReviews(movieId).then(data => {
      setReviews(data);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {reviews && (
        <ul className={styles.reviewsList}>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewsItem}>
              <h2>{review.author}</h2>
              <p>{review.content.slice(0, 200) + ' ...'}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
