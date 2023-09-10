import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect, useMemo, useState } from 'react';

import {
    AccountIcon,
    AnnouncementIcon,
    LanguageIcon,
    LogOutIcon,
    LoginIcon,
    SettingIcon,
    ThemeIcon,
    WishlistIcon,
} from '../../../components/Icons';
import Notification from '../../../components/Popper/Notification';
import Menu from '../../../components/Popper/Menu';
import Search from '../../../components/Search';
import { publicRoutes } from '../../../routes/routes';
import Image from '../../../components/Image';

import { ApiContext } from '../../../context';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Header({ noStateHeaderColor }) {
    const [showBackGroundHeader, setShowBackGroundHeader] = useState(false);
    // const [userLogin, setUserLogin] = useState(false);

    const backgroundColorHeader = noStateHeaderColor
        ? { backgroundColor: '#030612' }
        : {
              background: showBackGroundHeader
                  ? '#030612'
                  : 'linear-gradient(rgb(16, 16, 16), rgba(16, 16, 16, 0))',
          };

    const { typeMovie, suggest } = useContext(ApiContext);

    const dataTypeMovie = useMemo(() => 
        typeMovie.filter((item) => item.category === 'odd'),
        [typeMovie]
    );

    // Handle Scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowBackGroundHeader(window.scrollY >= 70);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            onClick: () => {
                localStorage.clear()
            },
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

    return (
        <div
            className={cx('wrapper')}
            style={{
                ...backgroundColorHeader,
            }}
        >
            <div className={cx('logo')}>
                <Link to={'/'}>
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
                            <li className={cx('navbar-item')} key={index}>
                                <NavLink 
                                    to={route.path}
                                    style={({ isActive }) => {
                                        return {
                                          opacity: isActive ? "1" : "0.7",
                                          fontWeight: isActive ? "800" : "600"
                                        };
                                    }}
                                    className={({ isActive, isPending }) => {
                                        return isActive ? cx("navbar-item-link","active") : cx("navbar-item-link");
                                    }}
                                >
                                    {route.linkName}
                                </NavLink>
                                <div className={cx('bar-bottom')}></div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={cx('options')}>
                <Search dataTypeMovie={dataTypeMovie} dataSuggestMovie={suggest} />

                <div className={cx('announcement-icon')}>
                    <Notification hideOnClick data={notificationList}>
                        <div>
                            <AnnouncementIcon />
                        </div>
                    </Notification>
                </div>
            </div>

            {
                localStorage.getItem("isLogin") ? (
                    <Menu items={userMenu} hideOnClick>
                        <div className={cx('user')}>
                            <Image
                                src={require('../../../assets/images/avt/1.jpg')}
                                alt={'error'}
                                className="header-avt"
                            />
                        </div>
                    </Menu>
                ) : (
                    <Button to="/login">
                        <div className={cx('login')}>
                            <LoginIcon />
                            <p className={cx('login-text')}>Đăng nhập</p>
                        </div>
                    </Button>
                )
            }
        </div>
    );
}

export default Header;
