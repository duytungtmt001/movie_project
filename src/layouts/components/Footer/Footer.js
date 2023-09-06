import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info', 'footer-item')}>
                <img
                    alt=""
                    src={require('../../../assets/images/logo/logo.png')}
                    className={cx('info-logo')}
                />
                <p>
                    Phim Free là dịch vụ được cung cấp bởi Công ty Cổ phần Phim Free.
                </p>
                <p>Địa chỉ: Cầu Giấy, Hà Nội, Việt Nam.</p>
                <p>Mã số doanh nghiệp: 9999999999.</p>
                <p>Ngày cấp mã số doanh nghiệp: 15/5/2014.</p>
                <p>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội.</p>
                <img
                    alt=""
                    src={require('../../../assets/images/logo/business.jpg')}
                    className={cx('info-business')}
                />
            </div>
            <div className={cx('introduction', 'footer-item')}>
                <h3 className={cx('title')}>GIỚI THIỆU</h3>
                <ul className={cx('list')}>
                    <li className={cx('item')}>Quy chế sử dụng Dịch vụ</li>
                    <li className={cx('item')}>Chính sách bảo mật</li>
                    <li className={cx('item')}>Về chúng tôi</li>
                </ul>
            </div>
            <div className={cx('support', 'footer-item')}>
                <h3 className={cx('title')}>HỖ TRỢ</h3>
                <ul className={cx('list')}>
                    <li className={cx('item')}>1800 9999 (24/7)</li>
                    <li className={cx('item')}>phimfree@gmail.com</li>
                    <li className={cx('item')}>https://phimfree.vn/help</li>
                </ul>
            </div>
            <div className={cx('contact', 'footer-item')}>
                <div className={cx('download')}>
                    <h3 className={cx('title')}>TẢI ỨNG DỤNG</h3>
                    <div className={cx('download-img')}>
                        <img alt="" src={require('../../../assets/images/Footer/ggplay.jpg')} className={cx('img-download')} />
                        <img alt="" src={require('../../../assets/images/Footer/appstore.jpg')} className={cx('img-download')} />
                    </div>
                </div>
                <div className={cx('connect')}>
                    <h3 className={cx('title')}>KẾT NỐI VỚI CHÚNG TÔI</h3>
                    <div className={cx('connect-img')}>
                        <img
                            alt=""
                            src={require('../../../assets/images/Footer/facebook.png')}
                            className={cx('connect-img-item')}
                        />
                        <img
                            alt=""
                            src={require('../../../assets/images/Footer/instagram.png')}
                            className={cx('connect-img-item')}
                        />
                        <img
                            alt=""
                            src={require('../../../assets/images/Footer/youtube.png')}
                            className={cx('connect-img-item')}
                        />
                        <img
                            alt=""
                            src={require('../../../assets/images/Footer/tiktok.png')}
                            className={cx('connect-img-item')}
                        />
                        <img
                            alt=""
                            src={require('../../../assets/images/Footer/zalo.png')}
                            className={cx('connect-img-item')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
