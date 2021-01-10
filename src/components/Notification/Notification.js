import 'react-notifications-component/dist/theme.css';

const notification = {
  title: 'Warning',
  message: 'Configurable',
  type: 'warning',
  insert: 'top',
  container: 'top-right',
  animationIn: ['animate__animated animate__fadeIn'], // `animate.css v4` classes
  animationOut: ['animate__animated animate__fadeOut'], // `animate.css v4` classes
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

export default notification;
