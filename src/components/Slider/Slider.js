import Image from '../Image';
import {ArrowLeft, ArrowRight} from './Arrow'
import slideDots from './Dot';

import Slider from 'react-slick';
import './Slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderCarousel({ data = [], dots = () => {} }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        easing: 'easeOut',
        variableWidth: true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        customPaging: () => dots && slideDots(),
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className='slide' style={{ width: 700 }}>
                    <div className="slide-wrapper">
                        <img
                            alt=""
                            width="100%"
                            src={require(`../../assets/images/slider/${item.img}`)}
                        />
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SliderCarousel;
