import styles from './Ribbon.module.scss';
import classNames from 'classnames/bind';

import { ApiContext } from '../../context';
import { useLoaderData } from 'react-router-dom';
import SliderCarousel from '../../components/Slider';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Ribbon() {
    const {resMovie, id} = useLoaderData();
    const apiData = useContext(ApiContext);


    // Function split data
    const splitData = (list) => {
        const a = [];
        const lengthList = Math.ceil(list.length / 5);
        for (let i = 0; i < lengthList; i++) {
            const b = [];
            for (let j = 1; j <= 5; j++) {
                list[0] && b.push(list.shift());
            }
            a.push(b);
        }
        return a;
    };

    // Function find category movie
    const categoryMovie = () => {
        return apiData.typeMovie.find((type, index) => type.id === Number(id)).name
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{`Phim ${categoryMovie()}`}</div>
            {splitData(resMovie).map((item, index) => (
                <div className={cx('slider')} key={index}>
                    <SliderCarousel
                        data={item}
                        typeMovie={apiData.typeMovie}
                        sourceListImg="List_Movie_Img"
                        classNameSlide={cx('padding')}
                        slidesToShow={5}
                        responsive
                        draggable={false}
                    />
                </div>
            ))}
        </div>
    );
}

export default Ribbon;
