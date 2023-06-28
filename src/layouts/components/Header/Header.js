import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { AnnouncementIcon, SearchIcon } from '../../../components/Icons/Icons';

import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../../../components/Popper';

import { publicRoutes } from '../../../routes/routes';
import Image from '../../../components/Image'

const cx = classNames.bind(styles)


function Header() {
    const [itemActive, setItemActive] = useState(0);
    const [inputSearch, setInputSearch] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to={'/'} onClick={() => setItemActive(0)}>
                    <img
                        src={require('../../../assets/images/logo/logo.png')}
                        alt=""
                        className={cx('logo-image')}
                    />
                </Link>
            </div>

            <div className={cx('navbar')}>
                <ul className={cx('navbar-list')}>
                    {publicRoutes.map((route, index) => {
                        if (!route.linkName) {
                            return false;
                        }
                        return (
                            <li
                                className={cx('navbar-item', {
                                    active: index === itemActive,
                                })}
                                onClick={() => setItemActive(index)}
                                key={index}
                            >
                                <Link to={route.path}>{route.linkName}</Link>
                                <div className={cx('bar-bottom')}></div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={cx('options')}>
                <div className={cx('search')}>
                    <input
                        className={cx('search-input', {
                            show: inputSearch,
                        })}
                        placeholder="Tìm kiếm phim, diễn viên, thể loại..."
                    />

                    <div
                        className={cx('search-icon')}
                        onClick={() => setInputSearch((prev) => !prev)}
                    >
                        <SearchIcon width="2.8rem" height="2.8rem" />
                    </div>
                </div>

                <div className={cx('announcement-icon')}>
                    <AnnouncementIcon />
                </div>
            </div>

            <Tippy
                interactive
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h2>Hello ae</h2>
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('user')}>
                    <Image
                        src={require('../../../assets/avt/1.jpg')}
                        alt={'error'}
                        className="header-avt"
                    />
                </div>
            </Tippy>
        </div>
    );
}

export default Header