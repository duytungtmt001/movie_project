import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import {
    BackVideoIcon,
    FeedbackIconVideo,
    FowardIconVideo,
    MaxVolumeIcon,
    OptionsIconVideo,
    PauseIconVideo,
    PlayIconVideo,
    RewindIconVideo,
    SpeedIconVideo,
    ZoomInIcon,
} from '../Icons';

const cx = classNames.bind(styles);

function Video({
    item = {},
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
    const videoRef = useRef(null);
    const [videoDuration, setVideoDuration] = useState(null);
    const [playedVideo, setPlayedVideo] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [showControl, setShowControl] = useState(true);
    const [movePageX, setMovePageX] = useState(0)

    // const state = {
    //     item,
    //     playing,
    //     loop,
    //     controls,
    //     light,
    //     volume,
    //     playbackRate,
    //     width,
    //     height,
    //     style,
    //     fallback,
    //     playIcon,
    //     config,
    // };

    const styleControl = showControl
        ? {
              opacity: 1,
          }
        : { opacity: 0 };

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor((d % 3600) / 60);
        var s = Math.floor((d % 3600) % 60);

        var hDisplay = h > 0 ? `${h}:` : '0';
        var mDisplay = m > 0 ? `${m}:` : '0:';
        var sDisplay = s >= 0 && s < 10 ? `0${s}` : s < 0 ? '' : `${s}`;
        return hDisplay + mDisplay + sDisplay;
    }

    const handleDuration = (duration) => {
        setVideoDuration(duration);
    };

    const handleProgress = (progress) => {
        setPlayedVideo(progress.playedSeconds.toFixed());
        setRangeValue(progress.played * 100);
    };

    const handleChangeRangeValue = () => {};

    const handlePlayVideo = () => {
        setPlaying(!playing);
        setShowControl(playing);
    };

    const handleRewindVideo = () => {
        videoRef.current.seekTo(videoRef.current.getCurrentTime() - 10);
    };

    const handleFowardVideo = () => {
        videoRef.current.seekTo(videoRef.current.getCurrentTime() + 10);
    };

    const handleMouseOver = () => {
        setShowControl(true);
        // setTimeout(() => {
        //     showControl && playing && setShowControl(false);
        // }, 3000);
    };

    const handleMouseMove = (e) => {
        setShowControl(true);
        setMovePageX(e.pageX)
        if (playing) {
            setTimeout(() => {
                console.log("e:" ,e.pageX);
                console.log("move" ,movePageX);
                showControl && setShowControl(false);
            }, 5000);
        }
    };

    const handleMountLeave = () => {
        playing && setShowControl(false);
    };

    return (
        <div
            className={cx('wrapper')}
            onMouseLeave={handleMountLeave}
            onMouseOver={handleMouseOver}
        >
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
            <div className={cx('video')} onClick={handlePlayVideo} onMouseMove={handleMouseMove}>
                <ReactPlayer
                    ref={videoRef}
                    url={require(`../../assets/videos/3.mp4`)}
                    width="100%"
                    height="100vh"
                    onDuration={handleDuration}
                    onProgress={handleProgress}
                    playing={playing}
                />
            </div>
            <div className={cx('control-wrapper')} style={{ ...styleControl }}>
                <div className={cx('time-progress')}>
                    <div className={cx('time-current')}>{secondsToHms(playedVideo)}</div>
                    <div className={cx('range')}>
                        <input
                            id="time"
                            type="range"
                            min="0"
                            max="100"
                            step="0.01"
                            value={rangeValue}
                            onChange={handleChangeRangeValue}
                        />
                    </div>
                    <div className={cx('time-duration')}>
                        {videoDuration && secondsToHms(videoDuration)}
                    </div>
                </div>
                <div className={cx('control')}>
                    <div className={cx('control-left')}>
                        <div className={cx('control-icon')}>
                            <RewindIconVideo
                                width="4rem"
                                height="4rem"
                                onClick={handleRewindVideo}
                            />
                        </div>
                        <div className={cx('control-icon')}>
                            {playing ? (
                                <PlayIconVideo
                                    width="4rem"
                                    height="4rem"
                                    onClick={handlePlayVideo}
                                />
                            ) : (
                                <PauseIconVideo
                                    width="4rem"
                                    height="4rem"
                                    onClick={handlePlayVideo}
                                />
                            )}
                        </div>
                        <div className={cx('control-icon')}>
                            <FowardIconVideo
                                width="4rem"
                                height="4rem"
                                onClick={handleFowardVideo}
                            />
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
