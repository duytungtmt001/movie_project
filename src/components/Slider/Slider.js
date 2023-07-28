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
    draggable = false,
    infinite = false,
    dots = false,
    fade = false,
    easing = 'easeOut',
    speed = 500,
    centerMode = false,
    arrowFade = false,
    slideOpacity = false,
    slidesToShow = 1,
    slidesToScroll = 1,
}) {
    const settings = {
        dots,
        fade,
        speed,
        easing,
        infinite,
        draggable,
        centerMode,
        slidesToShow,
        variableWidth,
        slidesToScroll,
        customPaging: () => slideDots(),
        nextArrow: arrowFade ? <ArrowRightFade /> : <ArrowRightMain />,
        prevArrow: arrowFade ? <ArrowLeftFade /> : <ArrowLeftMain />,
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className={classNameSlide} style={{ width: slideWidth }}>
                    <div className="slide-wrapper" style={{opacity: slideOpacity ? '0.6' : '1'}}>
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
