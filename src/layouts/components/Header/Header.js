import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import { publicRoutes } from '../../../routes/routes';
import Image from '../../../components/Image'

const cx = classNames.bind(styles)


function Header() {
    const [itemActive, setItemActive] = useState(0)


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
                        if (route.linkName) {
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
                        }
                    })}
                </ul>
            </div>

            <div className={cx('search')}>
                <input
                    className={cx('search-input')}
                    placeholder="Tìm kiếm phim, diễn viên, thể loại"
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
            </div>

            <div className={cx('options')}>
                <Image src={require('../../../assets/avt/1.jpg')} alt={''} className="header-avt" />
            </div>
        </div>
    );
}

export default Header