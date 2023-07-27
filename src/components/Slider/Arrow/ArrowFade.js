import { ArrowLeftFadeIcon, ArrowRightFadeIcon } from '../../Icons';

export const ArrowLeftFade = ({ className, style, onClick, width, height }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ArrowLeftFadeIcon width={width} height={height} />
        </div>
    );
};

export const ArrowRightFade = ({ className, style, onClick, width, height }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ArrowRightFadeIcon width={width} height={height} />
        </div>
    );
};
