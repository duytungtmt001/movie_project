import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Wishlist.module.scss';
import classNames from 'classnames/bind';

import SliderCarousel from '../../components/Slider'

import { ApiContext } from '../../context';
import { wishlist } from '../../apiServices';
import { ListEmpty } from '../../components/Icons';
import ReactPlayer from 'react-player';
import Video from '../../components/Video';


const cx = classNames.bind(styles);

function Wishlish() {
    const apiData = useContext(ApiContext);
    const [dataWishlist, setDataWishlist] = useState([]);
    const [updateData, setUpdateData] = useState(false);

    const handleReRender = () => {
        setUpdateData(!updateData)
    }

    const itemDemo = {
        video: "2.mp4"
    }

    const renderWishlist = () => (
        <div className={cx('wrapper')}>
            {/* <div className={cx('title')}>Danh sách phim yêu thích</div> */}
            <div style={{position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999999999999999999}}><Video item={itemDemo} controls width='100%' height='80vh'/></div>
            {/* {dataWishlist.map((item, index) => (
                <div className={cx('slider')} key={index}>
                    <SliderCarousel
                        reRenderParent={handleReRender}
                        data={item}
                        typeMovie={apiData.typeMovie}
                        sourceListImg="List_Movie_Img"
                        classNameSlide={cx('padding')}
                        slidesToShow={5}
                        responsive
                        draggable={false}
                    />
                </div>
            ))} */}
        </div>
    )

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
    }, [updateData]);

    return dataWishlist.length > 0 ? (
        renderWishlist()
    ) : (
        <div className={cx('list-empty')}>
            <ListEmpty width="30rem" height="30rem" />
            <p className={cx('list-empty-text')}>Hãy thêm phim bạn yêu thích vào đây</p>
        </div>
    );
}

export default Wishlish