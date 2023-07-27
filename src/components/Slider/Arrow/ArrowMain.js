import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Icons";

export const ArrowLeftMain = ({ className, style, onClick, width, height }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ArrowLeftIcon width={width} height={height} />
        </div>
    );
};

export const ArrowRightMain = ({ className, style, onClick, width, height }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ArrowRightIcon width={width} height={height} />
        </div>
    );
};
