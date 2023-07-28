import { useEffect, useState } from 'react';
import SliderCarousel from '../../components/Slider';

import { sliderMain } from '../../apiServices';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { ArrowRightIcon } from '../../components/Icons';
const cx = classNames.bind(styles)

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
        },
    ];

    const dataTrend = [
        {
            img: '1.jpg',
        },
        {
            img: '2.jpg',
        },
        {
            img: '3.jpg',
        },
        {
            img: '4.jpg',
        },
        {
            img: '5.jpg',
        },
        {
            img: '6.jpg',
        },
        {
            img: '7.jpg',
        },
        {
            img: '8.jpg',
        },
        {
            img: '9.jpg',
        },
        {
            img: '10.jpg',
        },
        {
            img: 'endBig.jpg',
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
                    img="slider"
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
                        <h1 className={cx('title-head')}>Phim Mới Thịnh Hành Trên Phim Free</h1>
                        <ArrowRightIcon
                            width="4.4rem"
                            height="4.4rem"
                            className={cx('title-icon')}
                        />
                    </div>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTrend}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slidesToShow={5.2}
                            slidesToScroll={5}
                            slideWidth="auto"
                            easing="ease"
                            speed={1100}
                        />
                    </div>
                </div>
                <div className={cx('list-movie', 'list-release')}>
                    <div className={cx('list-title')}>
                        <h1 className={cx('title-head')}>Phim Chiếu Rạp Mới Nhất</h1>
                        <ArrowRightIcon
                            width="4.4rem"
                            height="4.4rem"
                            className={cx('title-icon')}
                        />
                    </div>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slidesToShow={5.2}
                            slidesToScroll={5}
                            slideWidth="auto"
                            easing="ease"
                            speed={1100}
                        />
                    </div>
                </div>
                <div className={cx('list-movie', 'list-odd')}>
                    <div className={cx('list-title')}>
                        <h1 className={cx('title-head')}>Phim Lẻ Hay Nhất</h1>
                        <ArrowRightIcon
                            width="4.4rem"
                            height="4.4rem"
                            className={cx('title-icon')}
                        />
                    </div>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slidesToShow={5.2}
                            slidesToScroll={5}
                            slideWidth="auto"
                            easing="ease"
                            speed={1100}
                        />
                    </div>
                </div>
                <div className={cx('list-banner')}>
                    <div className={cx('list-banner-left')}>
                        <img
                            alt=""
                            src={require('../../assets/images/Home_List_Banner/bannder_NVBKT.jpg')}
                        />
                        <img
                            alt=""
                            src={require('../../assets/images/Home_List_Banner/mat_biec.jpg')}
                        />
                    </div>
                    <img
                        alt=""
                        src={require('../../assets/images/Home_List_Banner/3.jpg')}
                    />
                </div>
                <div className={cx('list-movie', 'list-series')}>
                    <div className={cx('list-title')}>
                        <h1 className={cx('title-head')}>Phim Bộ Hot Nhất</h1>
                        <ArrowRightIcon
                            width="4.4rem"
                            height="4.4rem"
                            className={cx('title-icon')}
                        />
                    </div>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slidesToShow={5.2}
                            slidesToScroll={5}
                            slideWidth="auto"
                            easing="ease"
                            speed={1100}
                        />
                    </div>
                </div>
                <div className={cx('list-movie', 'list-series')}>
                    <div className={cx('list-title')}>
                        <h1 className={cx('title-head')}>Phim Sắp Chiếu</h1>
                        <ArrowRightIcon
                            width="4.4rem"
                            height="4.4rem"
                            className={cx('title-icon')}
                        />
                    </div>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slidesToShow={5.2}
                            slidesToScroll={5}
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
