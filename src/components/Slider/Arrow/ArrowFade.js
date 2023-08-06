import { ArrowLeftFadeIcon, ArrowRightFadeIcon } from '../../Icons';

import styles from './ArrowFade.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

export const ArrowLeftFade = ({ onClick, width, height }) => {
    return (
        <div className={cx('arrow-left')} onClick={onClick}>
            <ArrowLeftFadeIcon width={width} height={height} />
        </div>
    );
};

export const ArrowRightFade = ({ onClick, width, height }) => {
    return (
        <div className={cx('arrow-right')} onClick={onClick}>
            <ArrowRightFadeIcon width={width} height={height} />
        </div>
    );
};
