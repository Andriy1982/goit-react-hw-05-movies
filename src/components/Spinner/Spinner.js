import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export default function Spinner(props) {
  return (
    <Loader
      type="Puff"
      color="green"
      height={100}
      width={100}
      timeout={5000} //3 secs
      className={styles.position}
    />
  );
}
