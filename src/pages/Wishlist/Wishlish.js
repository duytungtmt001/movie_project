import { useEffect, useState } from 'react';
import styles from './Wishlist.module.scss';
import classNames from 'classnames/bind';

import { typeMovieApi, wishlist } from '../../apiServices';
import SliderCarousel from '../../components/Slider'

import axios from 'axios';

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

    const newMovie = {
        "name": "Cuộc Đàm Phán Sinh Tử",
        "description": "Chưa hết ám ảnh tâm lý vì vụ án trước, chuyên gia Chae Youn lại phải tiếp tục lao vào cuộc chiến cân não với tên tội phạm khét tiếng Tae Gu khi hắn bắt cóc con tin và chỉ định cô là người đàm phán.",
        "time": 113,
        "year": 2018,
        "age": 18,
        "actor": "Hyun Bin, Son Ye Jin, Kim Sang Ho",
        "director": "Lee Jung Suk",
        "award": "",
        "img": "cuocdamphan.jpg",
        "img_name": "cuocdamphan_name.jpg",
        "trailer": "1.mp4",
        "video": "1.mp4",
        "isMonopoly": true,
        "callouts": "TM",
        "typeMovie_id": 17
    }
    
    const handleAdd = () => {
        const addMovie = async () => {
            const response = await axios.post('http://localhost:3000/wishlist')
        }
    }

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
                <button 
                    onClick={handleAdd}
                    style={{
                        color: "#000",
                        padding: "10px",
                        borderRadius: "8px"
                    }}    
                >
                    Add Movie
                </button>
            </div>
        )
    );
}

export default Wishlish