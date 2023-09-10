import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import InputGroup from './InputGroup';

import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function FormLogin({users, handleToggleLogin}) {
    const [valueName, setValueName] = useState('');
    const [valuePass, setValuePass] = useState('');
    let navigate = useNavigate();

    console.log(valueName);

    const handleLogin = (e) => {
        e.preventDefault();
        const result = users.find(
            (user, index) => user.name === valueName && user.pass === valuePass,
        );
        if (!!result) {
            localStorage.setItem('isLogin', 'true');
            return navigate('/');
        }
    };

    return (
        <form className={cx('form')} id="form-1">
            <InputGroup
                id="name"
                labelText="Tên đăng nhập"
                placeholder="Tên đăng nhập"
                formMessage="Vui lòng nhập tên đăng nhập"
                value={valueName}
                setValue={setValueName}
            />

            <InputGroup
                id="password"
                labelText="Mật khẩu"
                type="password"
                placeholder="Mật khẩu"
                formMessage="Vui lòng nhập mật khẩu"
                value={valuePass}
                setValue={setValuePass}
            />

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
