import styles from './Odd.module.scss';
import classNames from 'classnames/bind';

import SliderCarousel from '../../components/Slider';
import SlideBig from '../../components/Slider/SlideBig';
import { sliderOdd, listMovieOdd, typeMovieApi } from '../../apiServices';

import { useEffect, useState } from 'react';
import { ArrowRightIcon } from '../../components/Icons';

const cx = classNames.bind(styles);

function Odd() {
    const [dataCarousel, setDataCarousel] = useState([]);
    const [dataListMovie, setDataListMovie] = useState([]);
    const [typeMovie, setTypeMovie] = useState([]);

    // Call API load data Carousel
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await sliderOdd();
                setDataCarousel(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    // Call API load data list movie
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const dataList = await listMovieOdd();
                setDataListMovie(dataList);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    // Call API load data type movie
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const dataType = await typeMovieApi();
                setTypeMovie(dataType);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('carousel')}>
                <div className={cx("carousel-wrapper")}>
                    <SliderCarousel
                        data={dataCarousel}
                        SlideComponent={SlideBig}
                        classNameSlide={cx('carousel-slide-padding')}
                        sourceImg="Slider_Odd"
                        infinite
                        fade
                        dots
                        dotsFade
                        arrowFade
                        classArrowFadeLeft={cx('arrow-left')}
                        classArrowFadeRight={cx('arrow-right')}
                    />
                </div>
            </div>

            <div className={cx('list')}>
                {typeMovie.map((type, index) => (
                    <div key={index} className={cx('list-movie')}>
                        <div className={cx('list-title')}>
                            <p className={cx('title-head')}>{`Phim ${type.name}`}</p>
                            <ArrowRightIcon
                                width="4.4rem"
                                height="4.4rem"
                                className={cx('title-icon')}
                            />
                        </div>
                        <div className={cx('list-slider')}>
                            <SliderCarousel 
                                data={dataCarousel} 
                                sourceImg="Slider_Odd"
                                classNameSlide={cx('list-slide-padding')}
                                responsive
                                slideWidth="auto"
                                easing="ease"
                                speed={1100}
                                zoomWhenHover
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Odd;
