import styles from './Reviews.module.scss';

export default function Reviews({ reviews }) {
  return (
    <ul className={styles.reviewsList}>
      {reviews.map(review => (
        <li key={review.id} className={styles.reviewsItem}>
          <h2>{review.author}</h2>
          <p>{`${review.content.slice(0, 200)} ...`}</p>
        </li>
      ))}
    </ul>
  );
}
