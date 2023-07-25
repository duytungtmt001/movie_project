import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import Image from '../Image';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons/Icons';
import { useRef, useState } from 'react';

import './Slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);
const defaultFn = () => {};

// function Slider({ data = [], dragable = false, sliderWidth = 300 }) {
//     const sliderWidthDefault = sliderWidth;
//     const [sliderActive, setSliderActive] = useState(2);
//     const [sliderActiveForwarding, setSliderActiveForwarding] = useState(null);
//     const [transitionSlider, setTransitionSlider] = useState(true);
//     const wrapperSliderRef = useRef();

//     const [ableClick, setAbleClick] = useState(false);

//     const handlePrev = () => {
//         setAbleClick(() => defaultFn);
//         sliderActiveForwarding && setSliderActiveForwarding(null);
//         setSliderActive(sliderActive - 1);
//         setTransitionSlider(true);
//         sliderActive <= 2 && setSliderActiveForwarding(data.length / 2);
//     };

//     const handleNext = () => {
//         setAbleClick(() => defaultFn);
//         sliderActiveForwarding && setSliderActiveForwarding(null);
//         setSliderActive(sliderActive + 1);
//         setTransitionSlider(true);
//         sliderActive >= data.length / 2 && setSliderActiveForwarding(2);
//     };

//     const handleTransitionEnd = () => {
//         if (sliderActive >= data.length / 2 + 1) {
//             setTransitionSlider(false);
//             setSliderActive(2);
//         } else if (sliderActive <= 1) {
//             setTransitionSlider(false);
//             setSliderActive(data.length / 2);
//         } else {
//             setAbleClick(false);
//         }        
//     };

//     const renderSlides = () => (
//         data.map((item, index) => (
//             <div
//                 className={cx('slide', {
//                     'slider-active': index === sliderActive || index === sliderActiveForwarding,
//                 })}
//                 key={index}
//             >
//                 <div className={cx('wrap-item')}>
//                     <Image
//                         src={require(`../../assets/images/slider/${item.img}`)}
//                         className={cx('slide-image')}
//                         alt=""
//                     />
//                 </div>
//             </div>
//         ))
//     )

//     const handleClickDot = (index) => {
//         setSliderActive(index+2);
//         setTransitionSlider(true);
//     }

//     const renderDots = () => (
//         data.map((item, index) =>
//             index + 1 < data.length / 2 && (
//                 <button
//                     key={index}
//                     onClick={() => handleClickDot(index)}
//                     className={cx('dot', { active: index === sliderActive - 2 || index === ((sliderActive-2)>(data.length/2-2) && 0) || index === (sliderActive<2 && data.length/2-2) })}
//                 ></button>
//             ),
//         )
//     );

//     return (
//         <div className={cx('box')}>
//             <div className={cx('slider-wrapper')}>
//                 <div className={cx('slider')} style={{ width: `${sliderWidthDefault}px` }}>
//                     <div
//                         className={cx('wrapper')}
//                         ref={wrapperSliderRef}
//                         style={{
//                             transform: `translateX(-${sliderActive * sliderWidthDefault}px)`,
//                             transition: transitionSlider ? `all ease-out .4s` : 'none',
//                             width: `${data.length * sliderWidthDefault}px`,
//                         }}
//                         onTransitionEnd={handleTransitionEnd}
//                     >
//                         {renderSlides()}
//                     </div>
//                 </div>

//                 <span className={cx('prev')} onClick={ableClick || handlePrev}>
//                     <ArrowLeftIcon width="3.2rem" height="3.2rem" />
//                 </span>
//                 <span className={cx('next')} onClick={ableClick || handleNext}>
//                     <ArrowRightIcon width="3.2rem" height="3.2rem" />
//                 </span>

//                 <div className={cx('slide-dots')}>
//                     {renderDots()}
//                 </div>
//             </div>
//         </div>
//     );
// }

function SliderCarousel({
    data = []
}) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        easing: "easeOut",
        variableWidth: true,
    }

    return (
        <Slider {...settings}>
            {
                data.map((item, index) => (
                    <div key={index} className={cx('slide')}  style={{width: 700}}>
                        <div className='slide-wrapper'>
                            <img alt='' width="100%" className={cx('slide-img')} src={require(`../../assets/images/slider/${item.img}`)} />
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
}

export default SliderCarousel;
