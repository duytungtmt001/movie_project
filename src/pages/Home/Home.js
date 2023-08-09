import { useEffect, useState } from 'react';
import SliderCarousel from '../../components/Slider';
import SlideWithDescription from '../../components/Slider/SlideWithDescription';

import { sliderMain, typeMovieApi, listTrendHome, listMovieOdd } from '../../apiServices';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { ArrowRightIcon } from '../../components/Icons';
const cx = classNames.bind(styles);

function Home() {
    const [dataSliderMain, setDataSliderMain] = useState([]);
    const [typeMovie, setTypeMovie] = useState([]);
    const [dataTrend, setDataTrend] = useState([]);
    const [dataMovieOdd, setDataMovieOdd] = useState([]) 
    
    const dataTest = [
        {
            img: 'ok.jpg',
            name: "Bố Già",
        },
        {
            img: 'listTest.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok2.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok.jpg',
            name: "Bố Già",
        },
        {
            img: 'listTest.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok2.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok.jpg',
            name: "Bố Già",
        },
        {
            img: 'listTest.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok2.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok.jpg',
            name: "Bố Già",
        },
        {
            img: 'listTest.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok2.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok.jpg',
            name: "Bố Già",
        },
        {
            img: 'listTest.jpg',
            name: "Bố Già",
        },
        {
            img: 'ok2.jpg',
            name: "Bố Già",
        },
        {
            img: 'end.jpg',
            title: 'Xem Tất Cả',
        },
    ];

    useEffect(() => {
        const fetchApi = async () => {
            try {
                let data = await sliderMain();
                setDataSliderMain(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                let data = await typeMovieApi();
                setTypeMovie(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                let data = await listTrendHome();
                setDataTrend(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                let data = await listMovieOdd();
                let result = [];
                for(let i = 0; i<10; i++) {
                    result.push(data[i])
                }
                setDataMovieOdd(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, [])

    return (
        dataSliderMain.length > 1 && typeMovie.length > 1 && dataTrend.length > 1 && dataMovieOdd.length > 1 && (
            <div className={cx('wrapper')}>
                <div className={cx('carousel')}>
                    <h1 className={cx('carousel-title')}>Giải trí hay - Thưởng thức ngay</h1>
                    <SliderCarousel
                        data={dataSliderMain}
                        sourceImg="Slider_Main"
                        SlideComponent={SlideWithDescription}
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
                                data={dataTrend}
                                sourceImg="Home_Slider_Trend"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                typeMovie={typeMovie}
                                slideWidth="auto"
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
                                data={dataTest}
                                sourceImg="Home_Slider_Trend"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                typeMovie={typeMovie}
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
                                data={dataMovieOdd}
                                sourceImg="List_Movie_Odd"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                typeMovie={typeMovie}
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
                                data={dataTest}
                                sourceImg="Home_Slider_Trend"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                typeMovie={typeMovie}
                                slideWidth="auto"
                                easing="ease"
                                speed={1100}
                            />
                        </div>
                    </div>

                    <div className={cx('list-movie', 'list-series')}>
                        <div className={cx('list-title')}>
                            <p className={cx('title-head')}>Phim Sắp Chiếu</p>
                            <ArrowRightIcon
                                width="4.4rem"
                                height="4.4rem"
                                className={cx('title-icon')}
                            />
                        </div>
                        <div className={cx('list-slider')}>
                            <SliderCarousel
                                data={dataTest}
                                sourceImg="Home_Slider_Trend"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                typeMovie={typeMovie}
                                slideWidth="auto"
                                easing="ease"
                                speed={1100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Home;
