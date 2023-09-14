import { useContext, useEffect, useState } from 'react';
import SliderCarousel from '../../components/Slider';
import SlideWithDescription from '../../components/Slider/SlideWithDescription';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { ApiContext } from '../../context';
import { useLoaderData } from 'react-router-dom';

import Video from '../../components/Video'
import { ArrowRightIcon } from '../../components/Icons';
import { listMovieOdd, listMovieRelease, listMovieSeries, listTrendHome } from '../../apiServices';

const cx = classNames.bind(styles);

function Home() {
    const apiData = useContext(ApiContext);
    const [listTrend, setListTrend] = useState();
    const [listOdd, setListOdd] = useState();
    const [listRelease, setListRelease] = useState();
    const [listSeries, setListSeries] = useState();
    const loaderData = useLoaderData();

    const [showVideo, setShowVideo] = useState(false);
    const [path, setPath] = useState('3.mp4');
    const [item, setItem] = useState();

    const scaleAnimation = showVideo
        ? {
              animation: `Scale linear .6s`,
          }
        : {};

    const handleReRender = (item, type) => {
        setShowVideo(!showVideo);
        item[type] && setPath(item[type]);
        setItem(item);
    }

    useEffect(() => {
        const callApi = async () =>  {
            try {
                const resOdd = await listMovieOdd();
                const resSeries = await listMovieSeries();
                const resRelease = await listMovieRelease();
                const resultTrend = await listTrendHome();
                let resultOdd = [];
                let resultSeries = [];
                let resultRelease = [];
                for (let i = 0; i < 10; i++) {
                    resultOdd.push(resOdd[i]);
                    resultSeries.push(resSeries[i]);
                    resultRelease.push(resRelease[i]);
                }
                setListTrend(resultTrend);
                setListOdd(resOdd);
                setListRelease(resultRelease);
                setListSeries(resSeries);
            } catch (error) {
                console.log(error);
            }
        }

        callApi();
    })


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
                                data={resultTrend}
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
                                data={resultRelease}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/release'}
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
                                data={resultOdd}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/odd'}
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
                                data={resultSeries}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/series'}
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
                                data={resultSeries}
                                sourceListImg="List_Movie_Img"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideEnd
                                seeAllPath={'/wishlist'}
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
