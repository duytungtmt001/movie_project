import styles from './ListMovieByCategory.module.scss';
import classNames from 'classnames/bind';

import SliderCarousel from "../Slider/Slider";
import SlideBig from '../Slider/SlideBig/SlideBig';
import { ArrowRightIcon } from '../Icons';

const cx = classNames.bind(styles);

function ListMovieByCategory({ dataCarousel, typeMovie, dataListMovie, sourceSliderImg, sourceListImg }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('carousel')}>
                <div className={cx("carousel-wrapper")}>
                    <SliderCarousel
                        data={dataCarousel}
                        SlideComponent={SlideBig}
                        classNameSlide={cx('carousel-slide-padding')}
                        sourceSliderImg={sourceSliderImg}
                        fade
                        infinite
                        dots
                        dotsFade
                        arrowFade
                        autoplay
                        classArrowFadeLeft={cx('arrow-left')}
                        classArrowFadeRight={cx('arrow-right')}
                    />
                </div>
            </div>

            <div className={cx('list')}>
                {typeMovie.map((type, index) => {
                    const listMovie = dataListMovie.reduce((result, currentItem, index) => {
                        return currentItem.typeMovie_id === type.id ? [...result, currentItem] : result;
                    }, []);
                    return (
                        <div key={index} className={cx('list-movie')}>
                            <div className={cx('list-title')}>
                                <p className={cx('title-head')}>{`Phim ${type.name}`}</p>
                                <ArrowRightIcon
                                    width="4.4rem"
                                    height="4.4rem"
                                    className={cx('title-icon')}
                                />
                            </div>
                            <div className={cx('list-slider')}>
                                <SliderCarousel 
                                    data={listMovie} 
                                    typeMovie={typeMovie}
                                    sourceListImg={sourceListImg}
                                    classNameSlide={cx('list-slide-padding')}
                                    responsive
                                    slideEnd
                                    slideWidth="auto"
                                    easing="ease"
                                    speed={1100}
                                    zoomWhenHover
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListMovieByCategory