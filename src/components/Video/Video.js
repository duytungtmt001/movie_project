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
    const [zoom, setZoom] = useState(false);
    const [showControl, setShowControl] = useState(true);

    
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
    let timerId = useRef();
    
    const handleChangeRangeValue = () => {};

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
    }

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

    const renderSpeed = () => (
        <div className={cx('speed-container')}>
            <div className={cx('speed-title')}>
                <p>Tốc độ</p>
            </div>
            <div className={cx('speed-bar')}>
                <div className={cx('speed-item')}>
                    <div className={cx('speed-item-text')}>0,5x</div>
                </div>
                <div className={cx('speed-item')}>
                    <div className={cx('speed-item-text')}>0,75x</div>
                </div>
                <div className={cx('speed-item')}>
                    <div className={cx('speed-item-text')}>Bình thường</div>
                </div>
                <div className={cx('speed-item')}>
                    <div className={cx('speed-item-text')}>1,25x</div>
                </div>
                <div className={cx('speed-item')}>
                    <div className={cx('speed-item-text')}>1,5x</div>
                </div>
            </div>
        </div>
    );

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
            <div className={cx('video')} onClick={handlePlayVideo} onDoubleClick={handleZoomVideo} onMouseMove={handleMouseMove}>
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
                        <input
                            className={cx('icon-volumn')}
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value="1"
                            onChange={handleChangeRangeValue}
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
