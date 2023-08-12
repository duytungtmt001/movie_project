import { useEffect, useState } from 'react';
import styles from './Wishlist.module.scss';
import classNames from 'classnames/bind';

import { typeMovieApi, wishlist } from '../../apiServices/Get';

import SliderCarousel from '../../components/Slider'

const cx = classNames.bind(styles);

function Wishlish() {
    const [sliders, setSliders] = useState([]);
    const [typeMovie, setTypeMovie] = useState([]);

    // Call API get Type movie
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const dataType = await typeMovieApi();
                setTypeMovie(dataType)
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    }, [])

    // Call API get data Wishlist
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await wishlist();
                const a = [];
                const lengthA = Math.ceil(data.length/5);
                for(let i=0; i<lengthA; i++) {
                    const b = [];
                    for(let j=1; j<=5; j++) {
                        data[0] && b.push(data.shift())
                    }
                    a.push(b)
                }

                setSliders(a)
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    }, [])

    return (
        typeMovie && (
            <div className={cx('wrapper')}>
                <div className={cx('title')}>Danh sách phim yêu thích</div>
                {sliders.map((item, index) => (
                    <div className={cx('slider')} key={index}>
                        <SliderCarousel
                            data={item}
                            typeMovie={typeMovie}
                            sourceListImg="List_Movie_Img"
                            classNameSlide={cx('padding')}
                            slidesToShow={5}
                            responsive
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        )
    );
}

export default Wishlish