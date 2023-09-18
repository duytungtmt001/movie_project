import styles from './ListMovieByCategory.module.scss';
import classNames from 'classnames/bind';

import SliderCarousel from '../Slider/Slider';
import SlideBig from '../Slider/SlideBig/SlideBig';
import { ArrowRightIcon } from '../Icons';
import { useContext, useState } from 'react';
import Video from '../Video';

import {ApiContext} from '../../context'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListMovieByCategory({
    dataCarousel,
    typeMovie,
    dataListMovie,
    sourceSliderImg,
    sourceListImg,
}) {
    
    const dataContext = useContext(ApiContext) 

    const [showVideo, setShowVideo] = useState(false);
    const [path, setPath] = useState();
    const [login, setLogin] = useState(false);
    const [item, setItem] = useState();
    let navigate = useNavigate();

    const scaleAnimation = showVideo
        ? {
              animation: `Scale linear .6s`,
          }
        : {};

    const handleReRender = (item, type) => {
        if (localStorage.getItem('isLogin')) {
            setShowVideo(!showVideo);
            item[type] && setPath(item[type]);
            setItem(item);
        } else {
            setLogin(true);
        }
    };

    const findIdTypeMovie = (name) => {
        return dataContext.typeMovie.find((type, index) => name === type.name).id
    }


    const MySwal = withReactContent(Swal);

    login &&
        MySwal.fire({
            title: 'Đăng nhập để xem phim nhé',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đăng nhập ngay',
        }).then((result) => {
            setLogin(false);
            if (result.isConfirmed) {
                return navigate('/movie_project/login');
            }
        });

    return (
        <div>
            {showVideo && <Video path={path} isPlaying={true} reRenderParent={handleReRender} item={item} />}
            <div className={cx('wrapper')} style={{ ...scaleAnimation }}>
                <div className={cx('carousel')}>
                    <div className={cx('carousel-wrapper')}>
                        <SliderCarousel
                            data={dataCarousel}
                            SlideComponent={SlideBig}
                            reRenderParent={handleReRender}
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
                    {
                        typeMovie.map((type, index) => {
                            const listMovie = dataListMovie.reduce((result, currentItem, index) => {
                                return currentItem.typeMovie_id === type.id
                                    ? [...result, currentItem]
                                    : result;
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
                                            reRenderParent={handleReRender}
                                            data={listMovie}
                                            typeMovie={typeMovie}
                                            sourceListImg={sourceListImg}
                                            classNameSlide={cx('list-slide-padding')}
                                            responsive
                                            slidesToShow={5.2}
                                            slideEnd
                                            seeAllPath={`/movie_project/ribbon/${type.category}-${findIdTypeMovie(type.name)}`}
                                            easing="ease"
                                            speed={1100}
                                            zoomWhenHover
                                        />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ListMovieByCategory;
