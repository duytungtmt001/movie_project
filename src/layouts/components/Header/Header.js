import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { AccountIcon, AnnouncementIcon, LanguageIcon, LogOutIcon, SearchIcon, SettingIcon, ThemeIcon, WishlistIcon, NoNotifiIcon } from '../../../components/Icons';

import { useState } from 'react';
import Menu from '../../../components/Popper/Menu';
import Search from '../../../components/Search';
import { publicRoutes } from '../../../routes/routes';
import Image from '../../../components/Image'

import Notification from '../../../components/Popper/Notification'; 

const cx = classNames.bind(styles)

function Header() {
    const [itemActive, setItemActive] = useState(0);

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

    const notificationList = [
        {
            image: 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg',
            content: 'Bạn đã thêm phim vào danh sách yêu thích',
            time: '1 giờ trước',
        },
        {
            image: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
            content: 'Bạn đã thêm phim vào danh sách yêu thích',
            time: '2 giờ trước',
        },
    ];

    const typeMovies = [
        {
            id: 1,
            name: 'Gia đình',
            img: 'giadinh.png',
        },
        {
            id: 2,
            name: 'Tâm lý',
            img: 'tamly.png',
        },
        {
            id: 3,
            name: 'Hành động',
            img: 'hanhdong.png',
        },
        {
            id: 4,
            name: 'Hài',
            img: 'hai.png',
        },
        {
            id: 5,
            name: 'Phim Việt',
            img: 'phimviet.png',
        },
        {
            id: 6,
            name: 'Kiếm hiệp',
            img: 'kiemhiep.png',
        },
        {
            id: 7,
            name: 'Lãng mạn',
            img: 'langman.png',
        },
        {
            id: 8,
            name: 'Tài liệu',
            img: 'tailieu.png',
        },
        {
            id: 9,
            name: 'Cổ trang',
            img: 'cotrang.png',
        },
        {
            id: 10,
            name: 'Kinh dị',
            img: 'kinhdi.png',
        },
        {
            id: 11,
            name: 'Anime',
            img: 'anime.png',
        },
        {
            id: 12,
            name: 'Khoa học viễn tưởng',
            img: 'khoahoc.png',
        },
        {
            id: 13,
            name: 'Tiểu sử',
            img: 'tieusu.png',
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
                <Search data={typeMovies}/>

                <div className={cx('announcement-icon')}>
                    <Notification hideOnClick data={notificationList}>
                        <div><AnnouncementIcon /></div>
                    </Notification>
                </div>
            </div>

            <Menu items={userMenu} hideOnClick>
                <div className={cx('user')}>
                    <Image
                        src={require('../../../assets/images/avt/1.jpg')}
                        alt={'error'}
                        className="header-avt"
                    />
                </div>
            </Menu>
        </div>
    );
}

export default Header