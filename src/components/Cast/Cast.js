import styles from './Cast.module.scss';
import photo from '../../images/no-photography.jpg';

export default function Cast({ cast }) {
  return (
    <ul className={styles.castList}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.castItem}>
          <div className={styles.imgWrap}>
            <img
              className={styles.castImg}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : photo
              }
              alt={actor.name}
            />
          </div>
          <p className={styles.castName}>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}
