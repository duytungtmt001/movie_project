import classNames from "classnames/bind";
import styles from './LoadingSpinner.module.scss';
import { LoadingIcon } from "../Icons";

const cx = classNames.bind(styles);

function LoadingSpinner() {
    return (
        <div className={cx('wrapper')}>
            <LoadingIcon width="6rem" height="6rem" className={cx('icon')} />
        </div>
    );
}

export default LoadingSpinner;
