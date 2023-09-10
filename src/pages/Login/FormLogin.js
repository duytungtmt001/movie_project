import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormLogin({users, handleToggleLogin}) {
    const [nameValue, setNameValue] = useState('');
    const [passValue, setPassValue] = useState('');
    let navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const result = users.find(
            (user, index) => user.name === nameValue && user.pass === passValue,
        );
        if (!!result) {
            localStorage.setItem('isLogin', 'true');
            return navigate('/');
        }
    };

    return (
        <form className={cx('form')} id="form-1">
            <label htmlFor="phone" className={cx('header-input')}>
                Tên đăng nhập
            </label>

            <div className={cx('input-wrap')}>
                <input
                    id="phone"
                    name="phone"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    type="text"
                    placeholder="Tên đăng nhập"
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

            <p className={cx('regulation')}>
                Khi tiếp tục, bạn đã đồng ý <span>Quy chế sử dụng dịch vụ</span> của Phim Free.
            </p>

            <div className={cx('form-button')}>
                <Button light href="" onClick={handleLogin} className={cx('button-login')}>
                    Đăng nhập
                </Button>
            </div>

            <div className={cx('register')}>
                <span>Bạn chưa có tài khoản?</span>
                <span className={cx('toggle-login')} onClick={() => handleToggleLogin()}>
                    Đăng ký
                </span>
            </div>

            <span className={cx('forgot')}>Quên mật khẩu</span>
        </form>
    );
}

export default FormLogin;
