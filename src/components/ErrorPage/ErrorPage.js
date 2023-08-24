import { useRouteError } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ErrorPage.module.scss';

const cx = classNames.bind(styles)

function ErrorPage() {
  const error = useRouteError();

  return (
      <div className={cx('wrapper')}>
          <div className={cx('content')}>
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred 😢</p>
          </div>
      </div>
  );
}

export default ErrorPage