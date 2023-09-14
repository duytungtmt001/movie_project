import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import InputGroup from './InputGroup';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function FormLogin({users, handleToggleLogin, setFocus}) {
    const [valueName, setValueName] = useState('');
    const [valuePass, setValuePass] = useState('');
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false)
    let navigate = useNavigate();

    const MySwal = withReactContent(Swal);

    error &&
        MySwal.fire({
            icon: 'error',
            title: 'Sai tên đăng nhập hoặc mật khẩu'
        }).then(() => {
            setError(false)
        });

    success &&
        MySwal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công',
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            setSuccess(false);
            return navigate('/movie_project');
        });
        

    const handleLogin = (e) => {
        e.preventDefault();
        const result = users.find(
            (user, index) => user.name === valueName && user.pass === valuePass,
        );
        if (!!result) {
            localStorage.setItem('isLogin', valueName);
            setSuccess(true);
        } else {
            if(valueName === "" && valuePass === "") {
                setSubmit(true)
            } else {
                setError(true)
            }
        }
    };

    return (
        <form className={cx('form')} id="form-1" autoComplete="off">
            <InputGroup
                id="name"
                labelText="Tên đăng nhập"
                placeholder="Tên đăng nhập"
                formMessage="Vui lòng nhập tên đăng nhập"
                value={valueName}
                setValue={setValueName}
                setFocus={setFocus}
                submit={submit}
            />

            <InputGroup
                id="password"
                labelText="Mật khẩu"
                type="password"
                placeholder="Mật khẩu"
                formMessage="Vui lòng nhập mật khẩu"
                value={valuePass}
                setValue={setValuePass}
                setFocus={setFocus}
                submit={submit}
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
