import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import { BackIcon } from '../../Icons/Icons';

const cx = classNames.bind(styles)

function HeaderMenu({title, onBack}) {
  return (
    <div className={cx('header')}>
        <div className={cx('back-btn')} onClick={onBack}>
            <BackIcon width='2.4rem' height='2.4rem'/>
        </div>

        <h4 className={cx('title')}>{title}</h4>
    </div>
  )
}

export default HeaderMenu