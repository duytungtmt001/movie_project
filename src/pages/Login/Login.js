import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useLoaderData } from 'react-router-dom';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

const cx = classNames.bind(styles);

function Login() {
    const [login, setLogin] = useState(true);
    const users = useLoaderData();

    const handleToggleLogin = () => {
        setLogin(!login)
    }

    return (
        <div className={cx('wrapper')}>
            <Button to="/" className={cx('logo')}>
                <img alt="" src={require('../../assets/images/logo/logo.png')} width="100%" />
            </Button>

            <div className={cx('content')}>
                <div className={cx('container')}>
                    <p className={cx('title')}>{login ? 'Đăng nhập' : 'Đăng ký'}</p>

                    {login ? (
                        <FormLogin users={users} handleToggleLogin={handleToggleLogin} />
                    ) : (
                        <FormRegister handleToggleLogin={handleToggleLogin} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
