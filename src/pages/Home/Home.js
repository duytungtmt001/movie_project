import { useEffect, useState } from 'react';
import SliderCarousel from '../../components/Slider';
import SlideWithDescription from '../../components/Slider/SlideWithDescription';

import { sliderMain } from '../../apiServices';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { ArrowRightIcon } from '../../components/Icons';
const cx = classNames.bind(styles);

function Home() {
    const [dataSliderMain, setDataSliderMain] = useState([]);
    const dataTest = [
        {
            img: 'ok.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'ok2.jpg',
        },
        {
            img: 'ok.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'ok2.jpg',
        },
        {
            img: 'ok.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'ok2.jpg',
        },
        {
            img: 'ok.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'ok2.jpg',
        },
        {
            img: 'ok.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'ok2.jpg',
        },
        {
            img: 'end.jpg',
            title: 'Xem Tất Cả',
        },
    ];

    const dataTrend = [
        {
            img: '1.jpg',
            img_name: '1a.jpg',
        },
        {
            img: '2.jpg',
            img_name: '2a.jpg',
        },
        {
            img: '3.jpg',
            img_name: '3a.jpg',
        },
        {
            img: '4.jpg',
            img_name: '4a.jpg',
        },
        {
            img: '5.jpg',
            img_name: '5a.jpg',
        },
        {
            img: '6.jpg',
            img_name: '6a.jpg',
        },
        {
            img: '7.jpg',
            img_name: '7a.jpg',
        },
        {
            img: '8.jpg',
            img_name: '8a.jpg',
        },
        {
            img: '9.jpg',
            img_name: '9a.jpg',
        },
        {
            img: '10.jpg',
            img_name: '10a.jpg',
        },
        {
            img: 'endBig.jpg',
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

    return (
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
                            data={dataTest}
                            sourceImg="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            responsive
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
                            slideWidth="auto"
                            easing="ease"
                            speed={1100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
