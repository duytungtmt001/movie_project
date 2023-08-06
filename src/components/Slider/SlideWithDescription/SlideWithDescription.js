import styles from './SlideWithDescription.module.scss';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '../../Button';

const cx = classNames.bind(styles)

function SlideWithDescription({sourceImg, item}) {
    return (
        <div className={cx('wrapper')}>
            <img
                alt=""
                src={require(`../../../assets/images/${sourceImg}/${item.img}`)}
                width="100%"
            />
            <div className={cx('description')}>{item.description}</div>
            <div className={cx('icon')}>
                <Tippy content="Chi tiết" placement="bottom" delay={[0, 100]}>
                    <div>
                        <Button to="/">
                            <img
                                alt=""
                                src={require('../../../assets/images/Slider_Main/icon-info.png')}
                            />
                        </Button>
                    </div>
                </Tippy>

                <Tippy content="Xem Trailer" placement="bottom" delay={[0, 100]}>
                    <div>
                        <Button to="/">
                            <img
                                alt=""
                                src={require('../../../assets/images/Slider_Main/icon-trailer.png')}
                            />
                        </Button>
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default SlideWithDescription