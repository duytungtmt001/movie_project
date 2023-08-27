import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Video({
    item = {},
    playing = false,
    loop = false,
    controls = false,
    light = false,
    volume = null,
    playbackRate = 1,
    width = '100%',
    height = '360px',
    style = {},
    fallback = null,
    playIcon,
    config,
}) {
    const videoRef = useRef();

    const state = {
        item,
        playing,
        loop,
        controls,
        light,
        volume,
        playbackRate,
        width,
        height,
        style,
        fallback,
        playIcon,
        config,
    }

    return (
        <div className={cx('wrapper')}>
            <ReactPlayer ref={videoRef} url={require(`../../assets/videos/${item.video}`)} {...state} />
        </div>
    );
}

export default Video;
