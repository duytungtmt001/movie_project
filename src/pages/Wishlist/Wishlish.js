import { useContext, useEffect, useState } from 'react';
import styles from './Wishlist.module.scss';
import classNames from 'classnames/bind';

import SliderCarousel from '../../components/Slider'

import { ApiContext } from '../../context';
import { wishlist } from '../../apiServices';

const cx = classNames.bind(styles);

function Wishlish() {
    const apiData = useContext(ApiContext);
    const [dataWishlist, setDataWishlist] = useState([])
    
    // Function split data
    const splitData  = (list) => {
        const a = [];
        const lengthList = Math.ceil(list.length / 5);
        for(let i=0; i<lengthList; i++) {
            const b = [];
            for(let j=1; j<=5; j++) {
                list[0] && b.push(list.shift());
            }
            a.push(b)
        }
        return  a;
    }

    // Get wishlist
    useEffect(() => {
        const getWishlist = async () => {
            try {
                const res = await wishlist();
                setDataWishlist(splitData(res));
            } catch (error) {
                console.log(error);
            }
        };

        getWishlist()
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Danh sách phim yêu thích</div>
            {dataWishlist.map((item, index) => (
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

export default Wishlish