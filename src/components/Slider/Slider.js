import classNames from "classnames/bind";
import styles from './Slider.module.scss';

import Image from '../Image'
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons/Icons";

const cx = classNames.bind(styles);

function Slider({
    data = [],
    dragable = false,
}) {

    return (
        <div className={cx("box")}>
            <div className={cx("slider-wrapper")}>
                <div className={cx("slider")}>
                    <div className={cx("wrapper")}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className={cx("slide")} key={index}>
                                        <div className={cx("wrap-item")}>
                                            <Image src={require(`../../assets/images/slider/${item.img}`)} className={cx("slide-image")} alt=""/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <span className={cx("prev")}>
                    <ArrowLeftIcon width="3.2rem" height="3.2rem"/>
                </span>
                <span className={cx("next")}>
                    <ArrowRightIcon width="3.2rem" height="3.2rem"/>
                </span>

                {/* <div className={cx("slide-dots")}>
                    <button className={cx("dot active")}></button>
                    <button className={cx("dot")}></button>
                    <button className={cx("dot")}></button>
                    <button className={cx("dot")}></button>
                    <button className={cx("dot")}></button>
                </div> */}
            </div>
        </div>
    );
}

export default Slider;
