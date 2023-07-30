import styles from './Slide.module.scss';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {TrailerIcon, PlusIcon, PlayIcon} from '../../Icons'

const cx = classNames.bind(styles);

function Slide({ sourceImg, item, slideLarge}) {

    return (
        <div className={cx('wrapper')}>
            <img
                alt=""
                className={cx('img-main')}
                src={require(`../../../assets/images/${sourceImg}/${item.img}`)}
                width="100%"
            />
            {item.name && (
                <div className={cx('img-name')}>
                    <img
                        alt=""
                        src={require(`../../../assets/images/Home_Slider_Trend/${item.name}`)}
                        width="90%"
                    />
                </div>
            )}
            {item.title && (
                <div className={cx('see-all')}>
                    <span>{item.title}</span>
                </div>
            )}

            {slideLarge && <div className={cx('overlayLarge')}></div>}

            {!item.title && (
                <div
                    className={cx('overlay')}
                    style={{
                        background: slideLarge
                            ? 'transparent'
                            : 'linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.22) 25%, rgb(20, 20, 20))',
                    }}
                >
                    <div className={cx('overlay-controls')} style={{ top: slideLarge && '75%' }}>
                        <Tippy content="Xem Trailer" placement="top" theme="light" offset={[0, 15]}>
                            <div className={cx('trailer')}>
                                <TrailerIcon />
                            </div>
                        </Tippy>
                        <div className={cx('seperate')}></div>
                        <Tippy content="Xem phim" placement="top" theme="light" offset={[0, 10]}>
                            <div className={cx('play')}>
                                <PlayIcon width="2.6rem" height="2.6rem" />
                            </div>
                        </Tippy>
                        <div className={cx('seperate')}></div>
                        <Tippy content="Yêu thích" placement="top" theme="light" offset={[0, 15]}>
                            <div className={cx('add')}>
                                <PlusIcon width="1.4rem" height="1.4rem" />
                            </div>
                        </Tippy>
                    </div>

                    <div className={cx('overlay-info')} style={{ left: slideLarge && 0 }}>
                        <p
                            className={cx('info-name')}
                            style={{
                                textAlign: slideLarge && 'center',
                                fontSize: slideLarge ? '1.5rem' : '1.3rem',
                            }}
                        >
                            Con Nhót Mót Chồng
                        </p>
                        <div
                            className={cx('info-rest')}
                            style={{
                                justifyContent: slideLarge && 'center',
                                fontSize: slideLarge ? '1.5rem' : '1.3rem',
                            }}
                        >
                            <div className={cx('info-type')}>Hành động</div>
                            <div className={cx('dot')}></div>
                            <div className={cx('info-time')}>120 phút</div>
                            <div className={cx('dot')}></div>
                            <div className={cx('info-age')}>T13</div>
                            <div className={cx('dot')}></div>
                            <div className={cx('info-year')}>2022</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Slide;
