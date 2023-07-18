import classNames from "classnames/bind";
import styles from './Slider.module.scss';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';

const cx = classNames.bind(styles);

// function Slider({
//     data = [],
//     dragable = false,
// }) {

//     const sliderWidthDefault = 500;
//     const [sliderActive, setSliderActive] = useState(2);
//     const [sliderActiveForwarding, setSliderActiveForwarding] = useState(null);
//     const [transitionSlider, setTransitionSlider] = useState(true);
//     const [addEvent, setAddEvent] = useState(true);
//     const wrapperSliderRef = useRef();
//     const prevRef = useRef();
//     const nextRef = useRef();

//     const transitionWrapper = {
//         transition: transitionSlider ? `all ease-out .5s` : 'none',
//     };

//     useEffect(() => {
//         const prevBtn = prevRef.current;
//         const nextBtn = nextRef.current;
//         const wrapperSlider = wrapperSliderRef.current;

//         const handlePrev = () => {
//             prevBtn.removeEventListener('click', handlePrev)
//             sliderActiveForwarding && setSliderActiveForwarding(null);
//             setSliderActive(sliderActive + 1);
//             setTransitionSlider(true);
//             if (sliderActive <= 2) {
//                 setSliderActiveForwarding(data.length / 2);
//             }
//         };

//         const handleNext = () => {
//             setAddEvent(false);
//             sliderActiveForwarding && setSliderActiveForwarding(null);
//             setSliderActive(sliderActive + 1);
//             setTransitionSlider(true);
//             if (sliderActive >= data.length / 2) {
//                 setSliderActiveForwarding(2);
//             }
//         };

//         const handleTransitionEnd = () => {
//             if (sliderActive >= data.length / 2 + 1) {
//                 setSliderActive(2);
//                 setTransitionSlider(false);
//             } else if (sliderActive <= 1) {
//                 setTransitionSlider(false);
//                 setSliderActive(data.length / 2);
//             }
//             setAddEvent(true);
//         };

//         if(addEvent) {
//             prevBtn.addEventListener('click', handlePrev);
//             nextBtn.addEventListener('click', handleNext);
//         }
//         wrapperSlider.addEventListener('transitionend', handleTransitionEnd);

//         return () => {
//             prevBtn.removeEventListener('click', handlePrev);
//             nextBtn.removeEventListener('click', handleNext);
//             wrapperSlider.removeEventListener('transitionend', handleTransitionEnd);
//         };
//     }, [sliderActive, sliderActiveForwarding, data.length, addEvent]);

//     return (
//         <div className={cx('box')}>
//             <div className={cx('slider-wrapper')}>
//                 <div className={cx('slider')}>
//                     <div
//                         className={cx('wrapper')}
//                         ref={wrapperSliderRef}
//                         style={{
//                             transform: `translateX(-${sliderActive * sliderWidthDefault}px)`,
//                             ...transitionWrapper,
//                         }}
//                     >
//                         {data.map((item, index) => {
//                             return (
//                                 <div
//                                     className={cx(
//                                         'slide',
//                                         (index === sliderActive ||
//                                             index === sliderActiveForwarding) &&
//                                             'slider-active',
//                                     )}
//                                     key={index}
//                                 >
//                                     <div className={cx('wrap-item')}>
//                                         <Image
//                                             src={require(`../../assets/images/slider/${item.img}`)}
//                                             className={cx('slide-image')}
//                                             alt=""
//                                         />
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 <span ref={prevRef} className={cx('prev')}>
//                     <ArrowLeftIcon width="3.2rem" height="3.2rem" />
//                 </span>
//                 <span ref={nextRef} className={cx('next')}>
//                     <ArrowRightIcon width="3.2rem" height="3.2rem" />
//                 </span>

//                 <div className={cx("slide-dots")}>
//                     <button className={cx("dot active")}></button>
//                     <button className={cx("dot")}></button>
//                     <button className={cx("dot")}></button>
//                     <button className={cx("dot")}></button>
//                     <button className={cx("dot")}></button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Slider;

function SliderMain({
    data = [],
    dragable = false
}) {
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={2}>
        <Slider>
            {/* {
                data.map((item, index) => {
                    return (
                        <Slide index={index} key={item.id}>
                            <img alt="" src={require(`../../assets/images/slider/${item.img}`)} />
                            <img
                                alt=""
                                src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg"
                            />
                        </Slide>
                    );
                })
            } */}
            <Slide index={0}>
                <img alt="" src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg" />
            </Slide>
            <Slide index={0}>
                <img alt="" src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg" />
            </Slide>
        </Slider>
    </CarouselProvider>;    
}

export default SliderMain