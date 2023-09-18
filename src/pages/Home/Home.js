import { useContext, useEffect, useState } from 'react';
import SliderCarousel from '../../components/Slider';
import SlideWithDescription from '../../components/Slider/SlideWithDescription';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { ApiContext } from '../../context';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import Video from '../../components/Video'
import { ArrowRightIcon } from '../../components/Icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const cx = classNames.bind(styles);

function Home() {
    const apiData = useContext(ApiContext);
    const loaderData = useLoaderData();

    const [showVideo, setShowVideo] = useState(false);
    const [path, setPath] = useState('3.mp4');
    const [item, setItem] = useState();
    const [login, setLogin] = useState(false)
    let navigate = useNavigate();
    
    
    const MySwal = withReactContent(Swal);

    login && MySwal.fire({
        title: 'Đăng nhập để xem phim nhé',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đăng nhập ngay',
    }).then((result) => {
        setLogin(false)
        if (result.isConfirmed) {
            return navigate('/movie_project/login');
        }
    });

    const scaleAnimation = showVideo
        ? {
              animation: `Scale linear .6s`,
          }
        : {};

    const handleReRender = (item, type) => {
        if(localStorage.getItem('isLogin')){
            setShowVideo(!showVideo);
            item[type] && setPath(item[type]);
            setItem(item);
        } else {
            setLogin(true)
        }
    }

    return (
        <div>
            {showVideo && (
                <Video path={path} isPlaying={true} reRenderParent={handleReRender} item={item} />
            )}
            <div className={cx('wrapper')} style={{ ...scaleAnimation }}>
                <div className={cx('carousel')}>
                    <h1 className={cx('carousel-title')}>Giải trí hay - Thưởng thức ngay</h1>
                    <SliderCarousel
                        reRenderParent={handleReRender}
                        data={apiData.listSliderMain}
                        sourceSliderImg="Slider_Main"
                        slidesToShow={1}
                        SlideComponent={SlideWithDescription}
                        typeMovie={apiData.typeMovie}
                        centerMode
                        dots
                        infinite
                        draggable
                        variableWidth
                        slideOpacity
                    />
                </div>

                <div className={cx('list')}>
                    <div className={cx('list-movie', 'list-trend')}>
                        <div className={cx('list-title')}>
                            <p className={cx('title-head')}>Phim Mới Thịnh Hành Trên Phim Free</p>
                            <ArrowRightIcon
                                width="4.4rem"
                                height="4.4rem"
                                className={cx('title-icon')}
                            />
                        </div>
                        <div className={cx('list-slider')}>
                            <SliderCarousel
                                reRenderParent={handleReRender}
                                data={loaderData.resultTrend}
                                sourceListImg="Home_Slider_Trend"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                typeMovie={apiData.typeMovie}
                                slidesToShow={5.2}
                                slideWidth="auto"
                                slideEndBig
                                slideLarge="true"
                                easing="ease"
                                speed={1100}
                                zoomWhenHover
                            />
                        </div>
                    </div>

                    <div className={cx('list-banner')}>
                        <img alt="" src={require('../../assets/images/Home_List_Banner/2.jpg')} />
                    </div>

                    <div className={cx('list-movie', 'list-release')}>
                        <div className={cx('list-title')}>
                            <p className={cx('title-head')}>Phim Chiếu Rạp Mới Nhất</p>
                            <ArrowRightIcon
                                width="4.4rem"
                                height="4.4rem"
                                className={cx('title-icon')}
                            />
                        </div>
                        <div className={cx('list-slider')}>
                            <SliderCarousel
                                reRenderParent={handleReRender}
                                data={loaderData.resultRelease}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/movie_project/release'}
                                typeMovie={apiData.typeMovie}
                                slidesToShow={5.2}
                                slideWidth="auto"
                                easing="ease"
                                speed={1100}
                            />
                        </div>
                    </div>

                    <div className={cx('list-movie', 'list-odd')}>
                        <div className={cx('list-title')}>
                            <p className={cx('title-head')}>Phim Lẻ Hay Nhất</p>
                            <ArrowRightIcon
                                width="4.4rem"
                                height="4.4rem"
                                className={cx('title-icon')}
                            />
                        </div>
                        <div className={cx('list-slider')}>
                            <SliderCarousel
                                reRenderParent={handleReRender}
                                data={loaderData.resultOdd}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/movie_project/odd'}
                                typeMovie={apiData.typeMovie}
                                slidesToShow={5.2}
                                slideWidth="auto"
                                easing="ease"
                                speed={1100}
                            />
                        </div>
                    </div>

                    <div className={cx('list-banner')}>
                        <img alt="" src={require('../../assets/images/Home_List_Banner/1.jpg')} />
                    </div>

                    <div className={cx('list-movie', 'list-series')}>
                        <div className={cx('list-title')}>
                            <p className={cx('title-head')}>Phim Bộ Hot Nhất</p>
                            <ArrowRightIcon
                                width="4.4rem"
                                height="4.4rem"
                                className={cx('title-icon')}
                            />
                        </div>
                        <div className={cx('list-slider')}>
                            <SliderCarousel
                                reRenderParent={handleReRender}
                                data={loaderData.resultSeries}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/movie_project/series'}
                                typeMovie={apiData.typeMovie}
                                slidesToShow={5.2}
                                slideWidth="auto"
                                easing="ease"
                                speed={1100}
                            />
                        </div>
                    </div>

                    <div className={cx('list-movie', 'list-wishlist')}>
                        <div className={cx('list-title')}>
                            <p className={cx('title-head')}>Danh Sách Phim Yêu Thích</p>
                            <ArrowRightIcon
                                width="4.4rem"
                                height="4.4rem"
                                className={cx('title-icon')}
                            />
                        </div>
                        <div className={cx('list-slider')}>
                            <SliderCarousel
                                reRenderParent={handleReRender}
                                data={loaderData.resultSeries}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/movie_project/wishlist'}
                                typeMovie={apiData.typeMovie}
                                slidesToShow={5.2}
                                slideWidth="auto"
                                easing="ease"
                                speed={1100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
