import { useEffect, useState } from 'react';
import SliderCarousel from '../../components/Slider';

import { sliderMain } from '../../apiServices';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles)

function Home() {
    const [dataSliderMain, setDataSliderMain] = useState([]);

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
            <h1 className={cx('title')}>Giải trí hay - Thưởng thức ngay</h1>
            <SliderCarousel data={dataSliderMain}/>
        </div>
    );
}

export default Home;
