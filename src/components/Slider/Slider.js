import classNames from "classnames/bind";
import styles from './Slider.module.scss';

import Image from '../Image'
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons/Icons";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);
const defaultFn = () => {}

function Slider({
    data = [],
    dragable = false,
}) {
    const sliderWidthDefault = 700;
    const wrapperSliderRef = useRef();
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();

    const [sliderActive, setSliderActive] = useState(2);
    const [sliderActiveForwarding, setSliderActiveForwarding] = useState(null)
    const [transitionSlider, setTransitionSlider] = useState(true)

    const transitionWrapper = {
        transition: transitionSlider ? `all ease-out .5s` : 'none',
    };

    console.log(sliderActive);
    
    useEffect(() => {
        const wrapperSliderElement = wrapperSliderRef.current;
        const prevBtn = prevBtnRef.current;
        const nextBtn = nextBtnRef.current;

        const handlePrev = () => {
            sliderActiveForwarding && setSliderActiveForwarding(null);
            setSliderActive(sliderActive - 1);
            setTransitionSlider(true);
            if (sliderActive <= 2) {
                setSliderActiveForwarding(data.length / 2);
            }
        }
    
        const handleNext = () => {
            sliderActiveForwarding && setSliderActiveForwarding(null);
            setSliderActive(sliderActive + 1);
            setTransitionSlider(true)
            if(sliderActive >= (data.length/2)) {
                setSliderActiveForwarding(2)
            }
        }
        
        // const handleTransitionEnd = () => {
        //     if (sliderActive >= data.length / 2 + 1) {
        //         setTransitionSlider(false)
        //         setSliderActive(2);
        //     } else if (sliderActive <= 1) {
        //         setTransitionSlider(false);
        //         setSliderActive(data.length/2);
        //     }
        // }

        // wrapperSliderElement.addEventListener('transitionend', handleTransitionEnd);
        prevBtn.addEventListener('click', handlePrev);
        nextBtn.addEventListener('click', handleNext);

    }, [])

    return (
        <div className={cx('box')}>
            <div className={cx('slider-wrapper')}>
                <div className={cx('slider')}>
                    <div
                        className={cx('wrapper')}
                        ref={wrapperSliderRef}
                        style={{
                            transform: `translateX(-${sliderActive * sliderWidthDefault}px)`,
                            ...transitionWrapper,
                        }}
                    >
                        {data.map((item, index) => {
                            return (
                                <div
                                    className={cx(
                                        'slide',
                                        (index === sliderActive ||
                                            index === sliderActiveForwarding) &&
                                            'slider-active',
                                    )}
                                    key={index}
                                >
                                    <div className={cx('wrap-item')}>
                                        <Image
                                            src={require(`../../assets/images/slider/${item.img}`)}
                                            className={cx('slide-image')}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <span className={cx('prev')} ref={prevBtnRef}>
                    <ArrowLeftIcon width="3.2rem" height="3.2rem" />
                </span>
                <span className={cx('next')} ref={nextBtnRef}>
                    <ArrowRightIcon width="3.2rem" height="3.2rem" />
                </span>

                {/* <div className={cx("slide-dots")}>
                    <button className={cx("dot active")}></button>
                    <button className={cx("dot")}></button>
                    <button className={cx("dot")}></button>
                    <button className={cx("dot")}></button>
                    <button className={cx("dot")}></button>
                </div> */}
            </div>
        </div>
    );
}

export default Slider;
