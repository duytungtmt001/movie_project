import styles from './SlideBig.module.scss';
import classNames from 'classnames/bind';

import Button from '../../Button'
import { AddListIcon, ArrowRightIcon, PlayIconBorder } from '../../Icons';

const cx = classNames.bind(styles)

function SlideBig({item, sourceSliderImg}) {
  return (
      <div className={cx('wrapper')}>
          <img alt="" width="100%" src={require(`../../../assets/images/${sourceSliderImg}/${item.img}`)} />
          <div className={cx('info')}>
              <div className={cx('info-name')}>
                  <img alt="" width="100%" src={require(`../../../assets/images/${sourceSliderImg}/${item.img_name}`)} />
              </div>
              <div className={cx('info-button')}>
                  <Button to="/odd" blue leftIcon={<PlayIconBorder width="2rem" height="2rem" />} className={cx('button-left')}>
                      Xem phim
                  </Button>
                  <Button to="/odd" dark leftIcon={<AddListIcon width="2rem" height="2rem" />}>
                      Thêm vào yêu thích
                  </Button>
              </div>
              <div className={cx('info-description')}>{item.description} <span className={cx('description-detail')}>Xem chi tiết <ArrowRightIcon width='2.5rem' height='2.5rem' className={cx('detail-icon')} /></span></div>
          </div>
          <div className={cx('age')}>
              <p>T{item.age}</p>
          </div>
          <div className={cx('overlay')}></div>
      </div>
  );
}

export default SlideBig