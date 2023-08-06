import styles from './Odd.module.scss';
import classNames from 'classnames/bind';

import SliderCarousel from '../../components/Slider';
import SlideBig from '../../components/Slider/SlideBig'
import { sliderOdd } from '../../apiServices';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Odd() {
    const [dataCarousel, setDataCarousel] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await sliderOdd();
                setDataCarousel(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchApi()
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('carousel')}>
                <SliderCarousel
                    data={dataCarousel}
                    SlideComponent={SlideBig}
                    classNameSlide={cx('carousel-slide-padding')}
                    sourceImg="Slider_Odd"
                    infinite
                    fade
                    dots
                    arrowFade
                    classArrowFadeLeft={cx('arrow-left')}
                    classArrowFadeRight={cx('arrow-right')}
                />
            </div>

            <div className={cx('list')}></div>
        </div>
    );
}

export default Odd;
