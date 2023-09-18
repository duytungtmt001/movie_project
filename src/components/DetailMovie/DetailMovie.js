import styles from './DetailMovie.module.scss';
import classNames from 'classnames/bind';

import { PlayIconTransparent, AddWishlistDetail, TrailerIcon } from '../Icons/Icons';
import SliderCarousel from '../Slider';

import Button from '../Button';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import Video from '../Video';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const cx = classNames.bind(styles);
function DetailMovie({ item, typeMovie, list }) {
    const [showVideo, setShowVideo] = useState(false);
    const [login, setLogin] = useState(false);
    let navigate = useNavigate();

    const MySwal = withReactContent(Swal);

    login &&
        MySwal.fire({
            title: 'Đăng nhập để xem phim nhé',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đăng nhập ngay',
        }).then((result) => {
            setLogin(false);
            if (result.isConfirmed) {
                return navigate('/movie_project/login');
            }
        });

    
    const scaleAnimation = showVideo
    ? {
        animation: `Scale linear .6s`,
        marginTop: 0
    }
    : {};

    const handleReRenderVideo = () => {
        setShowVideo(!showVideo);
    };

    const handleShowVideo = () => {
        if (localStorage.getItem('isLogin')) {
            setShowVideo(!showVideo);
        } else {
            setLogin(true);
        }
    }

    const typeMovieItem = () => {
        return typeMovie.find((typeItem, index) => {
            return item.typeMovie_id === typeItem.id;
        }).name;
    };

    const listSlider = () => {
        return list.reduce((result, currentMovie, index) => {
            return currentMovie.name !== item.name &&
                currentMovie.typeMovie_id === item.typeMovie_id
                ? [...result, currentMovie]
                : result;
        }, []);
    };

    return (
        <div>
            {showVideo && (
                <Video
                    path={item.video}
                    isPlaying={true}
                    item={item}
                    reRenderParent={handleReRenderVideo}
                />
            )}
            <div className={cx('wrapper')} style={{ ...scaleAnimation }}>
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
                                <p>
                                    <span>Diễn viên</span> <span>:</span>
                                </p>
                                <p>
                                    <span>Đạo diễn</span> <span>:</span>
                                </p>
                                <p>
                                    <span>Thể loại</span> <span>:</span>
                                </p>
                            </div>
                            <div className={cx('actor-right')}>
                                <div className={cx('actor-right-detail')}>{item.actor}</div>
                                <div className={cx('actor-right-detail')}>{item.director}</div>
                                {item && typeMovie && <div className={cx('actor-right-detail')}>{typeMovieItem()}</div>}
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
                                onClick={handleShowVideo}
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
        </div>
    );
}

export default DetailMovie;
