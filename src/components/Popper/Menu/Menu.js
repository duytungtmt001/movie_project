import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import Wrapper from '../../Popper'
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu'
import { useState } from 'react';

import { motion, useSpring } from 'framer-motion';


const cx = classNames.bind(styles);


const defaultFn = () => {}

const Menu = ({ 
    children, 
    items = [], 
    onChange = defaultFn, 
    hideOnClick = false
}) => {
    const springConfig = {
        damping: 200,
        stiffness: 1500
    };
    const transformDefault = -8;
    const transform = useSpring(transformDefault, springConfig);
    const opacity = useSpring(0, springConfig);

    const [history, setHistory] = useState([{data: items}])

    const current = history[history.length - 1];

    const renderItems = () => (
        current.data.map((item, index) => {
            const isParent = !!item.children;
            const isOnClick = !!item.onClick;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else if (isOnClick) {
                            item.onClick()
                        } else {    
                            onChange(item);
                        }
                    }}
                />
            )
        })
    )

    const renderResult = ((attrs) => {
        return (
            <motion.div style={{y: transform, opacity}} {...attrs}>
                <div className={cx('menu-list')} tabIndex="-1">
                    <Wrapper className={cx('menu-wrap')}>
                        {history.length > 1 && (
                            <HeaderMenu title={current.title} onBack={handleBack} />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </Wrapper>
                </div>
            </motion.div>
        );
    })

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const handleMount = () => {
        transform.set(4);
        opacity.set(1);
    };
    
    const handleHide = ({unmount}) => {
        const cleanup = opacity.on("change", (value) => {
            if (value <= 0) {
                cleanup();
                // unmount();
            }
        });

        transform.set(-8);
        opacity.set(0);
        setHistory(prev => prev.slice(0,1));
    }

    return (
        <Tippy
            trigger='click'
            interactive
            offset={[0, 10]}
            animation={true}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleHide}
            onMount={handleMount}
        >
            {children}
        </Tippy>
    );
}

export default Menu;