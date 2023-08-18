import styles from './Slide.module.scss';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TrailerIcon, PlusIcon, PlayIcon, TickIcon } from '../../Icons';
import { addWishList, updateWishList, deleteWishList } from '../../../apiServices';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Slide({ sourceListImg, item, slideLarge, typeMovie, reRenderParent }) {
    const [wishListIcon, setWishListIcon] = useState(false);

    const handleAddWishLists = async () => {
        const pathTypeMovie = item.exception
            ? `${item.exception}/${item.id}`
            : `${typeMovie.find((type) => item.typeMovie_id === type.id).category}/${item.id}`;
        const { id, isLike, ...data } = item;
        await addWishList({ ...data, isLike: true });
        await updateWishList(pathTypeMovie, { isLike: true });
        setWishListIcon(true);
        return false
    };

    const handleDeleteWishList = async () => {
        const pathTypeMovie = item.exception
            ? `${item.exception}/${item.id}`
            : `${typeMovie.find((type) => item.typeMovie_id === type.id).category}/${item.id}`;
        await deleteWishList(`${item.id}`);
        await updateWishList(pathTypeMovie, { isLike: false });
        setWishListIcon(false);
        reRenderParent();
        return false
    };  

    const typeMovieItem = () => {
        return typeMovie.find((type, index) => {
            return item.typeMovie_id === type.id;
        }).name
    }

    const categoryMovieItem = () => {
        return typeMovie.find((type, index) => {
            return item.typeMovie_id === type.id;
        }).category;
    };

    return (
        item && (
            <div className={cx('wrapper')}>
                <img
                    alt=""
                    className={cx('img-main')}
                    src={require(`../../../assets/images/${sourceListImg}/${item.img}`)}
                    width="100%"
                />

                {item.img_title && (
                    <div className={cx('img-name')}>
                        <img
                            alt=""
                            src={require(`../../../assets/images/Home_Slider_Trend/${item.img_title}`)}
                            width="90%"
                        />
                    </div>
                )}

                {item.title && (
                    <div className={cx('see-all')}>
                        <span>{item.title}</span>
                    </div>
                )}

                {slideLarge && <div className={cx('overlayLarge')}></div>}

                {!item.title && (
                    <div
                        className={cx('overlay')}
                        style={{
                            background: slideLarge
                                ? 'transparent'
                                : 'linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.22) 25%, rgb(20, 20, 20))',
                        }}
                    >
                        <div
                            className={cx('overlay-controls')}
                            style={{ top: slideLarge && '75%' }}
                        >
                            <Tippy
                                content="Xem Trailer"
                                placement="top"
                                theme="light"
                                offset={[0, 15]}
                            >
                                <div className={cx('trailer')}>
                                    <TrailerIcon />
                                </div>
                            </Tippy>

                            <div className={cx('seperate')}></div>
                            <Tippy
                                content="Xem phim"
                                placement="top"
                                theme="light"
                                offset={[0, 10]}
                            >
                                <div className={cx('play')}>
                                    <PlayIcon width="2.6rem" height="2.6rem" />
                                </div>
                            </Tippy>

                            <div className={cx('seperate')}></div>
                            <Tippy
                                content={item.isLike || wishListIcon ? 'Đã thêm' : 'Yêu thích'}
                                placement="top"
                                theme="light"
                                offset={[0, 15]}
                            >
                                <div
                                    className={cx('add')}
                                    onClick={
                                        item.isLike || wishListIcon
                                            ? handleDeleteWishList
                                            : handleAddWishLists
                                    }
                                >
                                    {item.isLike || wishListIcon ? (
                                        <TickIcon width="1.4rem" height="1.4rem" />
                                    ) : (
                                        <PlusIcon width="1.4rem" height="1.4rem" />
                                    )}
                                </div>
                            </Tippy>
                        </div>

                        <div className={cx('overlay-info')} style={{ left: slideLarge && 0 }}>
                            <p
                                className={cx('info-name')}
                                style={{
                                    textAlign: slideLarge && 'center',
                                    fontSize: slideLarge ? '1.5rem' : '1.3rem',
                                }}
                            >
                                <Link
                                    to={`/detail/${categoryMovieItem()}-${item.name}`}
                                >
                                    {item.name}
                                </Link>
                            </p>
                            <div
                                className={cx('info-rest')}
                                style={{
                                    justifyContent: slideLarge && 'center',
                                    fontSize: slideLarge ? '1.5rem' : '1.3rem',
                                }}
                            >
                                {item.typeMovie_id && (
                                    <div className={cx('info-type')}>{typeMovieItem()}</div>
                                )}
                                <div className={cx('dot')}></div>
                                {item.episode && (
                                    <div className={cx('info-time')}>{`${item.episode} tập`}</div>
                                )}
                                {item.time && (
                                    <div className={cx('info-time')}>{`${item.time} phút`}</div>
                                )}
                                <div className={cx('dot')}></div>
                                <div className={cx('info-age')}>{`T${item.age}`}</div>
                                <div className={cx('dot')}></div>
                                <div className={cx('info-year')}>{item.year}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
}

export default Slide;
