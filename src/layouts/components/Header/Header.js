import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { AccountIcon, AnnouncementIcon, LanguageIcon, LogOutIcon, SearchIcon, SettingIcon, ThemeIcon, WishlistIcon, NoNotifiIcon } from '../../../components/Icons';
import Notification from '../../../components/Popper/Notification'; 
import Menu from '../../../components/Popper/Menu';
import Search from '../../../components/Search';
import { publicRoutes } from '../../../routes/routes';
import Image from '../../../components/Image'

import {typeMovieApi} from '../../../apiServices/typeMovieApi'

const cx = classNames.bind(styles)

function Header() {
    const [itemActive, setItemActive] = useState(0);
    const [dataTypeMovie, setDataTypeMovie] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await typeMovieApi();
                setDataTypeMovie(result)
            } catch (error) {
                console.log(error);
            }
        }

        fetchApi()
    }, [])

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

    const suggestList = [
        {
          "id": 1,
          "name": "Nhà Bà Nữ"
        },
        {
          "id": 2,
          "name": "Hùng Long Phong Bá"
        },
        {
          "id": 3,
          "name": "Chị Chị Em Em 2"
        },
        {
          "id": 4,
          "name": "Mất Tích"
        },
        {
          "id": 5,
          "name": "Hôn Lễ Của Em"
        },
        {
          "id": 6,
          "name": "Đại Chiến TiTan: Mùa Cuối Cùng Phần 2"
        },
        {
          "id": 7,
          "name": "Bỗng Dưng Trúng Số"
        },
        {
          "id": 8,
          "name": "Tân Ỷ Thiên Đồ Long Ký 2019"
        },
        {
          "id": 9,
          "name": "Những Đứa Trẻ Trong Sương"
        },
        {
          "id": 10,
          "name": "Gia Đình Điệp Viên 2"
        }
      ]

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
                <Search dataTypeMovie={dataTypeMovie} dataSuggestMovie={suggestList}/>

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