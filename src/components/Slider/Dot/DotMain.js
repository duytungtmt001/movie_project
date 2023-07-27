import styles from './Dot.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function slideDots(data) {
    return (
        <div className={cx('dot')}></div>
    )

}

export default slideDots;