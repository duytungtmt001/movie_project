import { useEffect, useState } from 'react';
import styles from './Wishlist.module.scss';
import classNames from 'classnames/bind';

import { wishlist } from '../../apiServices';
import SliderCarousel from '../../components/Slider'

const cx = classNames.bind(styles);

function Wishlish() {
    // const [dataWishlist, setDataWishlist] = useState([]);
    // const [sliders, setSliders] = useState([]);
    // const [typeMovie, setTypeMovie] = useState([]);

    // // Call API get Type movie
    // useEffect(() => {
    //     const fetchApi = async () => {
            
    //     }
    // }, [])

    // // Call API get data Wishlist
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         try {
    //             const data = await wishlist();
    //             setDataWishlist(data);
    //             const a = [];
    //             const lengthA = Math.ceil(data.length/5);
    //             for(let i=0; i<lengthA; i++) {
    //                 const b = [];
    //                 for(let j=1; j<=5; j++) {
    //                     data[0] && b.push(data.shift())
    //                 }
    //                 a.push(b)
    //             }

    //             setSliders(a)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchApi();
    // }, [])

    // return (
    //     <div className={cx('wrapper')}>
    //         {
    //             sliders.map((item, index) => (
    //                 <div className={cx('slider')} key={index}>
    //                     <SliderCarousel
    //                         data={item}
    //                         sourceListImg="List_Movie_Release"
    //                         arrows={false}
    //                         slidesToShow={5}
    //                         draggable={false}
    //                     />
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )

    return (
        <div>Wishlist</div>
    )
}

export default Wishlish