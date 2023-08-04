import {ArrowLeftFade, ArrowLeftMain, ArrowRightFade, ArrowRightMain} from './Arrow'
import slideDots from './Dot';
import Slide from './Slide'

import Slider from 'react-slick';
import './Slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useLayoutEffect, useState } from 'react';

function SliderCarousel({
    data = [],
    SlideComponent = Slide,
    sourceImg,
    classNameSlide = 'slide',
    variableWidth = false,
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
        variableWidth,
        customPaging: () => slideDots(),
        nextArrow: arrowFade ? <ArrowRightFade /> : <ArrowRightMain />,
        prevArrow: arrowFade ? <ArrowLeftFade /> : <ArrowLeftMain />,

        responsive: variableWidth ? [] : [
            {
                breakpoint: 10000,   
                settings: {
                    slidesToShow: 5.2,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1537,   
                settings: {
                    slidesToShow: 4.2,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 3
                }
            }
        ]
    };

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    
    const slideWidthDefault = () => {
        if(window.innerWidth > 1536) {
            return 800;
        } else if(window.innerWidth <= 1536 && window.innerWidth > 1280) {
            return 650;
        } else if(window.innerWidth <= 1280) {
            return 600;
        }
    }
    
    const [slideWidth, setSlideWidth] = useState(slideWidthDefault);

    useEffect(() => {
        const handleWindowResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        if(widthScreen > 1536) {
            setSlideWidth(800);
        } else if(widthScreen <= 1536 && widthScreen > 1280) {
            setSlideWidth(650);
        } else if(widthScreen <= 1280 && widthScreen > 740) {
            setSlideWidth(550);
        } else if(widthScreen <= 740) {
            setSlideWidth(400)
        }
    }, [widthScreen])

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className={classNameSlide} style={{ 
                    width: slideWidth
                }}>
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
