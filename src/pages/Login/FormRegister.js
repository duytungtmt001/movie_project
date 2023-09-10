import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import InputGroup from './InputGroup';

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
            <InputGroup
                id="name"
                labelText="Tên đăng nhập"
                placeholder="Tên đăng nhập"
                formMessage="Vui lòng nhập tên đăng nhập"
                value={nameValue}
                setValue={setNameValue}
            />

            <InputGroup
                id="password"
                labelText="Mật khẩu"
                type="password"
                placeholder="Mật khẩu"
                formMessage="Vui lòng nhập mật khẩu"
                value={passValue}
                setValue={setPassValue}
            />

            <InputGroup
                id="passwordAgain"
                labelText="Nhập lại mật khẩu"
                type="password"
                placeholder="Nhập lại mật khẩu"
                formMessage="Vui lòng nhập nhập lại mật khẩu"
                value={passAgainValue}
                setValue={setPassAgainValue}
            />

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
