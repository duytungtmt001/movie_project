import styles from './SlideBig.module.scss';
import classNames from 'classnames/bind';

import Button from '../../Button'
import { AddListIcon, PlayIconBorder } from '../../Icons';

const cx = classNames.bind(styles)

function SlideBig({item}) {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('info')}>
            <div className={cx('info-name')}>
                <img alt='' src={require(`../../../assets/images/Slider_Odd/${item.img_name}`)} />
            </div>
            <div className={cx('info-button')}>
                <Button to="/" blue leftIcon={<PlayIconBorder width='2rem' height='2rem'/>}>
                    Xem phim
                </Button>
                <Button to="/" dark leftIcon={<AddListIcon width='2rem' height='2rem'/>}>
                    Thêm vào yêu thích
                </Button>
            </div>
            <div className={cx('info-description')}>
                {item.description}
            </div>
        </div>
        <div className={cx('age')}>
            {item.age}
        </div>
    </div>
  )
}

export default SlideBig