import {ArrowLeftFade, ArrowLeftMain, ArrowRightFade, ArrowRightMain} from './Arrow'
import slideDots from './Dot';
import Slide from './Slide'

import Slider from 'react-slick';
import './Slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

function SliderCarousel({
    reRenderParent = () => {},
    data = [],
    SlideComponent = Slide,
    sourceListImg,
    sourceSliderImg,
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
    slideLarge = false,
    responsive = false,
    dotsFade = false,
    autoplay = false,
    autoplaySpeed = 9000,
    pauseOnHover = false,
    pauseOnDotsHover = true,
    typeMovie = [],
    slideEnd = false,
    slideEndBig = false,
}) {
    const appenDotsFn = dotsFade ? {
        appendDots: (dots) => (
            <div
                style={{
                    bottom: '18%',
                    right: '5%',
                    marginRight: "120px",
                    width: 'unset',
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        )
    } : {}

    if(slideEnd) {
        data = [...data, { img: "slideEnd.jpg", title: "Xem Tất Cả" }]
    } else if(slideEndBig) {
        data = [...data, { img: "slideEndBig.jpg", title: "Xem Tất Cả" }]
    }

    const settings = {
        dots,
        fade,
        speed,
        easing,
        infinite,
        autoplay,
        draggable,
        centerMode,
        slidesToShow,
        pauseOnHover,
        autoplaySpeed,
        pauseOnDotsHover,
        slidesToScroll,
        variableWidth,
        ...appenDotsFn,
        customPaging: () => slideDots(),
        nextArrow: arrowFade ? <ArrowRightFade /> : <ArrowRightMain />,
        prevArrow: arrowFade ? <ArrowLeftFade /> : <ArrowLeftMain />,

        responsive: !responsive
            ? []
            : [
                  {
                      breakpoint: 10000,
                      settings: {
                          slidesToShow: slidesToShow,
                          slidesToScroll: 5,
                      },
                  },
                  {
                      breakpoint: 1537,
                      settings: {
                          slidesToShow: slidesToShow - 1,
                          slidesToScroll: 4,
                      },
                  },
                  {
                      breakpoint: 1281,
                      settings: {
                          slidesToShow: slidesToShow - 2,
                          slidesToScroll: 3,
                      },
                  },
              ],
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
                        {<SlideComponent sourceListImg={sourceListImg} item={item} typeMovie={typeMovie} slideLarge={slideLarge} sourceSliderImg={sourceSliderImg} reRenderParent={reRenderParent}/>}
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SliderCarousel;
