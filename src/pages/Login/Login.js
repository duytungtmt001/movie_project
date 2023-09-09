import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { redirect, useLoaderData } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [login, setLogin] = useState(true);
    const [nameValue, setNameValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [passAgainValue, setPassAgainValue] = useState("");

    const users = useLoaderData()

    const handleLogin = (e) => {
        e.preventDefault();
        if (!!(users.find((user, index) => user.name === nameValue && user.pass === passValue))) {
            return redirect("/odd")
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <div className={cx('wrapper')}>
            <Button to="/" className={cx('logo')}>
                <img alt="" src={require('../../assets/images/logo/logo.png')} width="100%" />
            </Button>

            <div className={cx('content')}>
                <p className={cx('title')}>{login ? "Đăng nhập" : "Đăng ký"}</p>

                {login ? (
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
                            <span className={cx('form-message')}></span>
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
                            <span className={cx('form-message')}></span>
                        </div>

                        <p className={cx('regulation')}>
                            Khi tiếp tục, bạn đã đồng ý <span>Quy chế sử dụng dịch vụ</span> của
                            Phim Free.
                        </p>

                        <div className={cx('form-button')}>
                            <Button light href="" onClick={handleLogin} className={cx('button-login')}>
                                Đăng nhập
                            </Button>
                        </div>

                        <div className={cx('register')}>
                            <span>Bạn chưa có tài khoản?</span>
                            <span className={cx('toggle-login')} onClick={() => setLogin(!login)}>Đăng ký</span>
                        </div>

                        <span className={cx('forgot')}>Quên mật khẩu</span>
                    </form>
                ) : (
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
                            <span className={cx('form-message')}></span>
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
                            <span className={cx('form-message')}></span>
                        </div>

                        <label htmlFor="password" className={cx('header-input')}>
                            Nhập lại mật khẩu
                        </label>

                        <div className={cx('input-wrap')}>
                            <input
                                id="password"
                                name="pasword"
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                value={passAgainValue}
                                onChange={(e) => setPassAgainValue(e.target.value)}
                            />
                            <span className={cx('form-message')}></span>
                        </div>

                        <p className={cx('regulation')}>
                            Khi tiếp tục, bạn đã đồng ý <span>Quy chế sử dụng dịch vụ</span> của
                            Phim Free.
                        </p>

                        <div className={cx('form-button')}>
                            <Button light href="" onClick={handleRegister} className={cx('button-login')}>
                                Đăng ký
                            </Button>
                        </div>

                        <div className={cx('register')}>
                            <span>Bạn đã có tài khoản?</span>
                            <span className={cx('toggle-login')} onClick={() => setLogin(!login)}>Đăng nhập</span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Login;
