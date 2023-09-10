import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FormRegister({handleToggleLogin}) {
    const [nameValue, setNameValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [passAgainValue, setPassAgainValue] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
    };

    return (
        <form className={cx('form')} id="form-2">
            <label htmlFor="phone" className={cx('header-input')}>
                Tên đăng nhập
            </label>

            <div className={cx('input-wrap')}>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <span className={cx('form-message')}>Vui lòng nhập tài khoản</span>
            </div>

            <label htmlFor="password" className={cx('header-input')}>
                Mật khẩu
            </label>

            <div className={cx('input-wrap')}>
                <input
                    id="password"
                    name="pasword"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={passValue}
                    onChange={(e) => setPassValue(e.target.value)}
                />
                <span className={cx('form-message')}>Vui lòng nhập mật khẩu</span>
            </div>

            <label htmlFor="passwordAgain" className={cx('header-input')}>
                Nhập lại mật khẩu
            </label>

            <div className={cx('input-wrap')}>
                <input
                    id="passwordAgain"
                    name="pasword"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    value={passAgainValue}
                    onChange={(e) => setPassAgainValue(e.target.value)}
                />
                <span className={cx('form-message')}>Nhập lại mật khẩu không chính xác</span>
            </div>

            <p className={cx('regulation')}>
                Khi tiếp tục, bạn đã đồng ý <span>Quy chế sử dụng dịch vụ</span> của Phim Free.
            </p>

            <div className={cx('form-button')}>
                <Button light href="" onClick={handleRegister} className={cx('button-login')}>
                    Đăng ký
                </Button>
            </div>

            <div className={cx('register')}>
                <span>Bạn đã có tài khoản?</span>
                <span className={cx('toggle-login')} onClick={() => handleToggleLogin()}>
                    Đăng nhập
                </span>
            </div>
        </form>
    );
}

export default FormRegister;
