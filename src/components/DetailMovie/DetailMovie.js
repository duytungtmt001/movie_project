import styles from './DetailMovie.module.scss';
import classNames from 'classnames/bind';

import { PlayIconTransparent, AddWishlistDetail, TrailerIcon } from '../Icons/Icons';
import SliderCarousel from '../Slider';

import Button from '../Button';
import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function DetailMovie({ item, typeMovie, list, type }) {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [item])

    const typeMovieItem = () => {
        return typeMovie.find((type, index) => {
            return item.typeMovie_id === type.id;
        }).name;
    };

    const listSlider = () => {
        return list.reduce(
            (result, currentMovie, index) =>
                currentMovie.typeMovie_id === item.typeMovie_id
                    ? [...result, currentMovie]
                    : result,
            [],
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('background')}>
                    <div className={cx('background-left')}></div>
                    <div className={cx('background-right')}>
                        <img
                            alt=""
                            src={require(`../../assets/images/Banner_Movie/${item.img_banner}`)}
                        />
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-name')}>
                        <img
                            alt=""
                            src={require(`../../assets/images/Banner_Movie/${item.img_name}`)}
                        />
                    </div>
                    <div className={cx('content-info')}>
                        <span>{item.year}</span>
                        <span className={cx('info-age')}>{`T${item.age}`}</span>
                        {item.time && <span>{`${item.time} phút`}</span>}
                        {item.episode && <span>{`${item.episode} tập`}</span>}
                        <span className={cx('info-hd')}>HD</span>
                        <span className={cx('info-subtitle')}>{item.subtitle}</span>
                    </div>
                    <div className={cx('content-des')}>{item.description}</div>

                    <div className={cx('content-actor')}>
                        <div className={cx('actor-left')}>
                            <p>{`Diễn viên :`}</p>
                            <p>{`Đạo diễn :`}</p>
                            <p>{`Thể loại :`}</p>
                        </div>
                        <div className={cx('actor-right')}>
                            <div className={cx('actor-right-detail')}>{item.actor}</div>
                            <div className={cx('actor-right-detail')}>{item.director}</div>
                            <div className={cx('actor-right-detail')}>{typeMovieItem()}</div>
                        </div>
                    </div>

                    {item.award && (
                        <div className={cx('content-award')}>
                            <img alt="" src={require('../../assets/images/logo/award.jpg')} />
                            <p>{item.award}</p>
                        </div>
                    )}

                    <div className={cx('content-options')}>
                        <Button
                            className={cx('button-see')}
                            blue
                            leftIcon={
                                <PlayIconTransparent
                                    className={cx('button-see-icon')}
                                    width="2.5rem"
                                    height="2.5rem"
                                />
                            }
                        >
                            Xem phim
                        </Button>

                        <Tippy placement="top" content="Xem Trailer" theme="light">
                            <div>
                                <Button circle className={cx('button-trailer')}>
                                    <TrailerIcon width="2.2rem" height="2.2rem" />
                                </Button>
                            </div>
                        </Tippy>

                        <Tippy placement="top" content="Thêm vào yêu thích" theme="light">
                            <div>
                                <Button circle>
                                    <AddWishlistDetail width="2.4rem" height="2.4rem" />
                                </Button>
                            </div>
                        </Tippy>

                    </div>
                </div>
            </div>

            <div className={cx('list')}>
                <div className={cx('list-title')}>
                    <p className={cx('title-head')}>Phim liên quan</p>
                </div>
                <SliderCarousel
                    data={listSlider()}
                    typeMovie={typeMovie}
                    sourceListImg={'List_Movie_Img'}
                    classNameSlide={cx('list-slide-padding')}
                    responsive
                    slidesToShow={5.2}
                    slideEnd
                    easing="ease"
                    speed={1100}
                    zoomWhenHover
                />
            </div>
        </div>
    );
}

export default DetailMovie;
