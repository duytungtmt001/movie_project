import { useEffect, useState } from 'react';
import SliderCarousel from '../../components/Slider';

import { sliderMain } from '../../apiServices';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles)

function Home() {
    const [dataSliderMain, setDataSliderMain] = useState([]);
    const dataTest = [
        {
            img: 'listTest.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'listTest.jpg',
        },
        {
            img: 'listTest.jpg',
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
                    variableWidth
                />
            </div>

            <div className={cx('list')}>
                <div className={cx('list-movie', 'list-trend')}>
                    <h1 className={cx('list-title')}>Phim Mới Thịnh Hành Trên Phim Free</h1>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slideWidth={360}
                            variableWidth
                        />
                    </div>
                </div>
                <div className={cx('list-movie', 'list-release')}>
                    <h1 className={cx('list-title')}>Phim Chiếu Rạp Mới Nhất</h1>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slideWidth={360}
                            variableWidth
                        />
                    </div>
                </div>
                <div className={cx('list-movie', 'list-odd')}>
                    <h1 className={cx('list-title')}>Phim Lẻ Hay Nhất</h1>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slideWidth={360}
                            variableWidth
                        />
                    </div>
                </div>
                <div className={cx('list-movie', 'list-series')}>
                    <h1 className={cx('list-title')}>Phim Bộ Hot Nhất</h1>
                    <div className={cx('list-slider')}>
                        <SliderCarousel
                            data={dataTest}
                            img="Home_Slider_Trend"
                            classNameSlide={cx('list-slide-padding')}
                            slideWidth={360}
                            variableWidth
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
