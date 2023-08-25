import classNames from "classnames/bind";
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('wrapper')}>
            {/* <div className={cx('content')}>
                <img alt="" src={require(`../../assets/images/Await_Icon/1.jpg`)} width="120px" />
                <div className={cx('dot-elastic')}></div>
            </div> */}
        </div>
    );
}

export default Loading;
