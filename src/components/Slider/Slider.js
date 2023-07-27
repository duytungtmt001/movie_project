import {ArrowLeftFade, ArrowLeftMain, ArrowRightFade, ArrowRightMain} from './Arrow'
import slideDots from './Dot';

import Slider from 'react-slick';
import './Slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderCarousel({
    data = [],
    img,
    classNameSlide = 'slide',
    variableWidth = false,
    slideWidth = 700,
    infinite = false,
    dots = false,
    fade = false,
    centerMode = false,
    arrowFade = false,
    slidesToShow = 1,
    slidesToScroll = 1,
}) {
    const settings = {
        dots,
        fade,
        centerMode,
        slidesToShow,
        infinite,
        easing: 'easeOut',
        slidesToScroll,
        variableWidth,
        customPaging: () => slideDots(),
        nextArrow: arrowFade ? <ArrowRightFade /> : <ArrowRightMain />,
        prevArrow: arrowFade ? <ArrowLeftFade /> : <ArrowLeftMain />,
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className={classNameSlide} style={{ width: slideWidth }}>
                    <div className="slide-wrapper">
                        <img
                            className="slide-wrapper__img"
                            alt=""
                            width="100%"
                            src={require(`../../assets/images/${img}/${item.img}`)}
                        />
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SliderCarousel;
