import {ArrowLeftFade, ArrowLeftMain, ArrowRightFade, ArrowRightMain} from './Arrow'
import slideDots from './Dot';
import Slide from './Slide'

import Slider from 'react-slick';
import './Slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderCarousel({
    data = [],
    SlideComponent = Slide,
    sourceImg,
    classNameSlide = 'slide',
    variableWidth = false,
    slideWidth = 780,
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
    slideLarge = false
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
                    <div
                        className={`slide-wrapper`}
                        style={{ opacity: slideOpacity ? '0.6' : '1' }}
                    >
                        {<SlideComponent sourceImg={sourceImg} item={item} slideLarge={slideLarge} />}
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SliderCarousel;
