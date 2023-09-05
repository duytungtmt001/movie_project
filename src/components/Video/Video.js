import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import {
    BackVideoIcon,
    FeedbackIconVideo,
    FowardIconVideo,
    MaxVolumeIcon,
    MinVolumeIcon,
    MutedIconVideo,
    OptionsIconVideo,
    PauseIconVideo,
    PlayIconVideo,
    RewindIconVideo,
    SizeIconVideo,
    SpeedIconVideo,
    SubtitleIconVideo,
    ZoomInIcon,
    ZoomOutIcon,
} from '../Icons';
import PopperVideo from '../Popper/PopperVideo';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Video({
    pathVideo,
    isPlaying,
    reRenderParent,
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
    const [timeVideoValue, setTimeVideoValue] = useState(0);
    const [playing, setPlaying] = useState(isPlaying);
    const [speedVideo, setSpeedVideo] = useState(1)
    const [zoom, setZoom] = useState(false);
    const [showControl, setShowControl] = useState(true);
    const [volumeValue, setVolumeValue] = useState(1);
    const [itemSpeedActive, setItemSpeedActive] = useState(2)

    let timerId = useRef();
    const inputVolumeRef = useRef();
    const inputTimeRef = useRef();
    let preVolumeValue = useRef(0);

    const speedOptions = [
        0.5, 0.75, 1.0, 1.25, 1.5 
    ]

    const styleControl = showControl ? {opacity: 1} : { opacity: 0 };

    const handleKeyDown = (e) => {
        if(e.keyCode === 32) {
            setPlaying(!playing);
            setShowControl(playing);
        } else if(e.keyCode === 39) {
            handleFowardVideo();
        } else if(e.keyCode === 37) {
            handleRewindVideo();
        }
    };

    const handleChangeTimeValue = () => {
        const inputTimeRefValue = Number(inputTimeRef.current.value);
        setTimeVideoValue(inputTimeRefValue)
        videoRef.current.seekTo((inputTimeRefValue * videoRef.current.getDuration())/100)
    };

    const handleChangeVolumeValue = () => {
        setVolumeValue(Number(inputVolumeRef.current.value));
    };

    function secondsToHms(d) {
        d = Number(d);
        const h = Math.floor(d / 3600);
        const m = Math.floor((d % 3600) / 60);
        const s = Math.floor((d % 3600) % 60);

        const hDisplay = h > 0 ? `${h}:` : '0';
        const mDisplay = m > 0 ? `${m}:` : '0:';
        const sDisplay = s >= 0 && s < 10 ? `0${s}` : s < 0 ? '' : `${s}`;
        return hDisplay + mDisplay + sDisplay;
    };

    const handleDuration = (duration) => {
        setVideoDuration(duration);
    };

    const handleProgress = (progress) => {
        setPlayedVideo(progress.playedSeconds);
        setTimeVideoValue(progress.played * 100);
    };

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
    };

    const handleMouseMove = (e) => {
        setShowControl(true);
        timerId.current && clearTimeout(timerId.current);
        if (playing) {
            timerId.current = setTimeout(() => {
                showControl && setShowControl(false);
            }, 3000);
        }
    };

    const handleMountLeave = () => {
        playing && setShowControl(false);
    };

    const handleZoomVideo = () => {
        if (
            (document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
            (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
            (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
            (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)
        ) {
            if (document.body.requestFullScreen) {
                document.body.requestFullScreen();
            } else if (document.body.mozRequestFullScreen) {
                document.body.mozRequestFullScreen();
            } else if (document.body.webkitRequestFullScreen) {
                document.body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (document.body.msRequestFullscreen) {
                document.body.msRequestFullscreen();
            }
            setZoom(true);
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setZoom(false);
        }
    };

    const renderSubtitle = () => (
        <div className={cx('subtitle-container')}>
            <div className={cx('subtitle-item')}>
                <div className={cx('subtitle-header')}>
                    <SubtitleIconVideo />
                    <p>Phụ đề</p>
                </div>
                <div className={cx('subtitle-content')}>
                    <p className={cx('subtitle-content-item')}>Tiếng Việt</p>
                    <p className={cx('subtitle-content-item')}>English</p>
                    <p className={cx('subtitle-content-item')}>Tắt</p>
                </div>
            </div>
            <div className={cx('subtitle-item')}>
                <div className={cx('subtitle-header')}>
                    <SizeIconVideo />
                    <p>Kích thước</p>
                </div>
                <div className={cx('subtitle-content')}>
                    <p className={cx('subtitle-content-item')}>Nhỏ</p>
                    <p className={cx('subtitle-content-item')}>Vừa</p>
                    <p className={cx('subtitle-content-item')}>Lớn</p>
                </div>
            </div>
            <div className={cx('subtitle-item')}>
                <div className={cx('subtitle-header')}>
                    <SubtitleIconVideo />
                    <p>Âm thanh</p>
                </div>
                <div className={cx('subtitle-content')}>
                    <p className={cx('subtitle-content-item')}>Tiếng Việt</p>
                </div>
            </div>
        </div>
    );

    const handleSpeedActive = (item, index) => {
        setItemSpeedActive(index)
        setSpeedVideo(item);
    }

    const renderSpeed = () => (
        <div className={cx('speed-container')}>
            <div className={cx('speed-title')}>
                <p>Tốc độ</p>
            </div>
            <div className={cx('speed-bar')}>
                {speedOptions.map((item, index) => (
                    <div className={cx('speed-item', itemSpeedActive === index ? 'speed-active' : '')} onClick={() => handleSpeedActive(item, index)} key={index}>
                        <div className={cx('speed-item-text')}>{item === 1 ? '1.0' : item}x</div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div
            className={cx('wrapper')}
            onMouseLeave={handleMountLeave}
            onMouseOver={handleMouseOver}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
        >
            <div className={cx('header')}>
                <div className={cx('header-left')} style={{ ...styleControl }}>
                    <div className={cx('age')}>T16</div>
                    <BackVideoIcon
                        className={cx('icon')}
                        width="4.2rem"
                        height="4.2rem"
                        onClick={reRenderParent}
                    />
                </div>
                <div className={cx('header-name')} style={{ ...styleControl }}>
                    Transformer 7
                </div>
                <div className={cx('header-logo')}>
                    <img alt="" src={require('../../assets/images/logo/logo.png')} width="100%" />
                </div>
            </div>
            <div
                className={cx('video')}
                onClick={handlePlayVideo}
                onDoubleClick={handleZoomVideo}
                onMouseMove={handleMouseMove}
            >
                <ReactPlayer
                    ref={videoRef}
                    url={require(`../../assets/videos/${pathVideo}`)}
                    width="100%"
                    height="100vh"
                    volume={volumeValue}
                    onDuration={handleDuration}
                    onProgress={handleProgress}
                    playbackRate={speedVideo}
                    playing={playing}
                />
            </div>
            <div className={cx('control-wrapper')} style={{ ...styleControl }}>
                <div className={cx('time-progress')}>
                    <div className={cx('time-current')}>{secondsToHms(playedVideo)}</div>
                    <div className={cx('range')}>
                        <input
                            ref={inputTimeRef}
                            id="time"
                            type="range"
                            min="0"
                            max="100"
                            step="0.01"
                            value={timeVideoValue}
                            onChange={handleChangeTimeValue}
                        />
                    </div>
                    <div className={cx('time-duration')}>
                        {videoDuration && secondsToHms(videoDuration)}
                    </div>
                </div>
                <div className={cx('control')}>
                    <div className={cx('control-left')}>
                        <div className={cx('control-icon')} tabIndex={1}>
                            <RewindIconVideo
                                width="4rem"
                                height="4rem"
                                onClick={handleRewindVideo}
                            />
                        </div>
                        <div className={cx('control-icon')} tabIndex={2}>
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
                        <div className={cx('control-icon')} tabIndex={3}>
                            <FowardIconVideo
                                width="4rem"
                                height="4rem"
                                onClick={handleFowardVideo}
                            />
                        </div>
                        <div className={cx('control-icon')} tabIndex={4}>
                            {volumeValue == 1 ? (
                                <MaxVolumeIcon
                                    width="4rem"
                                    height="4rem"
                                    onClick={() => {
                                        setVolumeValue(0);
                                        preVolumeValue.current = volumeValue;
                                    }}
                                />
                            ) : volumeValue == 0 ? (
                                <MutedIconVideo
                                    width="4rem"
                                    height="4rem"
                                    onClick={() => setVolumeValue(preVolumeValue.current)}
                                />
                            ) : (
                                <MinVolumeIcon
                                    width="4rem"
                                    height="4rem"
                                    onClick={() => {
                                        setVolumeValue(0);
                                        preVolumeValue.current = volumeValue;
                                    }}
                                />
                            )}
                        </div>
                        <input
                            ref={inputVolumeRef}
                            className={cx('icon-volumn')}
                            type="range"
                            id="volume"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volumeValue}
                            onChange={handleChangeVolumeValue}
                        />
                    </div>
                    <div className={cx('control-right')}>
                        <div>
                            <PopperVideo renderContent={renderSubtitle}>
                                <div className={cx('control-icon')}>
                                    <OptionsIconVideo width="4rem" height="4rem" />
                                </div>
                            </PopperVideo>
                        </div>

                        <div>
                            <PopperVideo renderContent={renderSpeed}>
                                <div className={cx('control-icon')}>
                                    <SpeedIconVideo width="4rem" height="4rem" />
                                </div>
                            </PopperVideo>
                        </div>

                        <Tippy placement="top" content="Phản hồi" offset={[0, 15]}>
                            <div className={cx('control-icon')}>
                                <FeedbackIconVideo width="4rem" height="4rem" />
                            </div>
                        </Tippy>

                        <div className={cx('control-icon')} onClick={handleZoomVideo}>
                            {zoom ? (
                                <ZoomOutIcon width="4rem" height="4rem" />
                            ) : (
                                <ZoomInIcon width="4rem" height="4rem" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
