import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { BackVideoIcon, FeedbackIconVideo, FowardIconVideo, MaxVolumeIcon, OptionsIconVideo, PauseIconVideo, RewindIconVideo, SpeedIconVideo, ZoomInIcon } from '../Icons';

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
    const [videoDuration, setVideoDuration] = useState(null);
    const [playedVideo, setPlayedVideo] = useState(0);

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
        config
    }

    const handleDuration = (duration) => {
        setVideoDuration(duration);
    }

    const handleProgress = (progress) => {
        setPlayedVideo(progress.playedSeconds.toFixed());
    }

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor((d % 3600) / 60);
        var s = Math.floor((d % 3600) % 60);

        var hDisplay = h > 0 ? `${h}:` : '';
        var mDisplay = m > 0 ? `${m}:` : '';
        var sDisplay = s > 0 ? `${s}` : '';
        return hDisplay + mDisplay + sDisplay;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <div className={cx('age')}>T16</div>
                    <BackVideoIcon className={cx('icon')} width="4.2rem" height="4.2rem" />
                </div>
                <div className={cx('header-name')}>Transformer 7</div>
                <div className={cx('header-logo')}>
                    <img alt="" src={require('../../assets/images/logo/logo.png')} width="100%" />
                </div>
            </div>
            <div className={cx('video')}>
                <ReactPlayer
                controls
                    ref={videoRef}
                    url={require(`../../assets/videos/3.mp4`)}
                    width="100%"
                    height="100vh"
                    onDuration={handleDuration}
                    onProgress={handleProgress}
                />
            </div>
            <div className={cx('control-wrapper')}>
                <div className={cx('time-progress')}>
                    <div className={cx('time-current')}>{playedVideo}</div>
                    <div className={cx('range')}></div>
                    <div className={cx('time-duration')}>
                        {videoDuration && secondsToHms(videoDuration)}
                    </div>
                </div>
                <div className={cx('control')}>
                    <div className={cx('control-left')}>
                        <div className={cx('control-icon')}>
                            <RewindIconVideo width="4rem" height="4rem" />
                        </div>
                        <div className={cx('control-icon')}>
                            <PauseIconVideo width="4rem" height="4rem" />
                        </div>
                        <div className={cx('control-icon')}>
                            <FowardIconVideo width="4rem" height="4rem" />
                        </div>
                        <div className={cx('control-icon')}>
                            <MaxVolumeIcon width="4rem" height="4rem" />
                        </div>
                    </div>
                    <div className={cx('control-right')}>
                        <div className={cx('control-icon')}>
                            <OptionsIconVideo width="4rem" height="4rem" />
                        </div>
                        <div className={cx('control-icon')}>
                            <SpeedIconVideo width="4rem" height="4rem" />
                        </div>
                        <div className={cx('control-icon')}>
                            <FeedbackIconVideo width="4rem" height="4rem" />
                        </div>
                        <div className={cx('control-icon')}>
                            <ZoomInIcon width="4rem" height="4rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
