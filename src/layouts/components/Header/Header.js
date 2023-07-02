import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { AccountIcon, AnnouncementIcon, LanguageIcon, LogOutIcon, SearchIcon, SettingIcon, ThemeIcon, WishlistIcon } from '../../../components/Icons';

import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../../../components/Popper';
import Menu from '../../../components/Popper/Menu';

import { publicRoutes } from '../../../routes/routes';
import Image from '../../../components/Image'
import HeaderMenu from '../../../components/Popper/Menu';

import {motion} from 'framer-motion';

const cx = classNames.bind(styles)

function Header() {
    const [itemActive, setItemActive] = useState(0);
    const [inputSearch, setInputSearch] = useState(false);

    const userMenu = [
        {
            icon: <AccountIcon />,
            title: 'Tài khoản',
            to: '/',
        },
        {
            icon: <WishlistIcon />,
            title: 'Danh sách yêu thích',
            to: '/wishlist',
        },
        {
            icon: <LanguageIcon />,
            title: 'Ngôn ngữ',
            children: {
                title: 'Languages',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        type: 'language',
                        code: 'cn',
                        title: '中国人',
                    },
                ],
            },
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/',
        },
        {
            icon: <ThemeIcon />,
            title: 'Chủ đề',
            children: {
                title: 'Chọn chủ đề',
                data: [
                    {
                        type: 'theme',
                        code: 'dark',
                        title: 'Tối',
                    },
                    {
                        type: 'theme',
                        code: 'light',
                        title: 'Sáng',
                    },
                ],
            },
        },
        {
            icon: <LogOutIcon />,
            title: 'Đăng xuất',
            separate: true,
            to: '/',
        },
    ];

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
            
            <Menu items={userMenu}>
                <div className={cx('user')}>
                    <Image
                        src={require('../../../assets/avt/1.jpg')}
                        alt={'error'}
                        className="header-avt"
                    />
                </div>
            </Menu>
        </div>
    );
}

export default Header