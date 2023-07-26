import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Icons";

export const ArrowLeft = ({ className, style, onClick }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ArrowLeftIcon width="4.6rem" height="4.6rem" />
        </div>
    );
};

export const ArrowRight = ({ className, style, onClick }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ArrowRightIcon width="4.6rem" height="4.6rem" />
        </div>
    );
};
