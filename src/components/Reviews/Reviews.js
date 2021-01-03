import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/movies-api';
import styles from './Reviews.module.scss';

export default function Reviews(props) {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  // console.log(movieId);
  // console.log(reviews);

  useEffect(() => {
    API.getMoviesByReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul className={styles.reviewsList}>
      {reviews &&
        reviews.map(review => (
          <li key={review.id} className={styles.reviewsItem}>
            <h2>{review.author}</h2>
            <p>{review.content.slice(0, 200) + ' ...'}</p>
          </li>
        ))}
    </ul>
  );
}
