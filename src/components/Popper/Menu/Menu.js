import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import Wrapper from '../../Popper'
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu'
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({
    children,
    items = [],
    onChange = defaultFn,
    hideOnClick = false,
}) {
    const [history, setHistory] = useState([{data: items}])

    const current = history[history.length - 1];

    const renderItems = () => {
        current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            )
        });
    }

    const renderResult = ((attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <Wrapper className={cx('menu-wrap')}>
                    {history.length > 1 && <HeaderMenu title={current.title} onBack={handleBack} />}
                    <div className={cx('menu-body')}>
                        {
                            current.data.map((item, index) => {
                                const isParent = !!item.children;
                                return (
                                    <MenuItem
                                        key={index}
                                        data={item}
                                        onClick={() => {
                                            if (isParent) {
                                                setHistory((prev) => [...prev, item.children]);
                                            } else {
                                                onChange(item);
                                            }
                                        }}
                                    />
                                )
                            })
                        }
                    </div>
                </Wrapper>
            </div>
        );
    })

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0,1))
    }
    

    return (
        <Tippy
            interactive
            delay={[100, 400]}
            offset={[0, 10]}
            hideOnClick={hideOnClick}
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    )
}

export default Menu;
