import classNames from 'classnames/bind'
import styles from './Notification.module.scss'
import Tippy from '@tippyjs/react/headless'
import Image from '../../Image'
import { NoNotifiIcon } from '../../Icons'

import {motion, useSpring, useTransform} from 'framer-motion'

import Wrapper from '../Wrapper'

const cx = classNames.bind(styles)

function Notification({
    children,
    data = [],
    hideOnClick = false
}) {
    const springConfig = {
        damping: 200,
        stiffness: 1400,
    };
    const transformDefault = -8;
    const transform = useSpring(transformDefault, springConfig);
    const opacity = useSpring(0, springConfig);

    const renderItems = () => {
        if(data.length > 0) {
            return data.map((item, index) => {
                return (
                    <div className={cx('item')} key={index}>
                        <img className={cx('item-image')} src={item.image} alt="" />
                        <div className={cx('item-body')}>
                            <p className={cx('item-content')}>{item.content}</p>
                            <p className={cx('item-time')}>{item.time}</p>
                        </div>
                    </div>
                );
            })
        } else {
            return (
                <div className={cx('no-noti')}>
                    <NoNotifiIcon width="9rem" height="9rem" />
                    <p className={cx('no-noti_title')}>Hiện tại bạn không có thông báo nào!</p>
                </div>
            );
        }
    }
    

    const renderResult = (attrs) => {
        return (
            <motion.div {...attrs} tabIndex="-1" style={{opacity, y: transform}} transition={{duration: 3}}>
                <div className={cx('wrapper')}>
                    <Wrapper className={cx('content')}>
                        <div className={cx('header')}>
                            <h2 className={cx('title')}>Thông báo</h2>
                            <p className={cx('tick')}>Đánh dấu đã đọc tất cả</p>
                        </div>
                        <div className={cx('body')}>{renderItems()}</div>
                    </Wrapper>
                </div>
            </motion.div>
        )
    }

    const handleMount = () => {
        transform.set(4);
        opacity.set(1);
    }

    const handleHide = ({unmount}) => {
        const cleanup = opacity.on('change', (value) => {
            if (value <= 0) {
                cleanup();
                unmount();
            }
        });

        transform.set(-8);
        opacity.set(0);
    }


    return (
        <Tippy
            trigger='click'
            interactive
            offset={[12, 28]}
            placement='bottom-end'
            hideOnClick={hideOnClick}
            render={renderResult}
            onMount={handleMount}
            onHide={handleHide}
            animation={true}
        >
            {children}
        </Tippy>
    )
}

export default Notification
