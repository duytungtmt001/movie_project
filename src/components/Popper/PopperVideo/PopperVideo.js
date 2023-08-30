import classNames from 'classnames/bind';
import styles from './PopperVideo.module.scss';

import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Wrapper';
import { useSpring, motion } from 'framer-motion';

const cx = classNames.bind(styles);

function PopperVideo({children, renderContent}) {
    const springConfig = {
        damping: 100,
        stiffness: 1000,
    };
    const opacity = useSpring(0, springConfig);

    const renderResult = (attrs) => {
        return (
            <motion.div
                {...attrs}
                style={{ opacity }}
            >
                <div className={cx('wrapper')}>
                    <Wrapper className={cx('content')}>
                        {renderContent && renderContent()}
                    </Wrapper>
                </div>
            </motion.div>
        );
    };

    const handleMount = () => {
        opacity.set(1);
    }

    const handleHide = ({ unmount }) => {
        const cleanup = opacity.on('change', (value) => {
            if (value <= 0) {
                cleanup();
                unmount();
            }
        });
        opacity.set(0);
    };

    return (
        <Tippy
            interactive
            offset={[12, 20]}
            placement="top"
            render={renderResult}
            onMount={handleMount}
            onHide={handleHide}
            animation={true}
        >
            {children}
        </Tippy>
    );
}

export default PopperVideo;
