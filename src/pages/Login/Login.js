import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useLoaderData } from 'react-router-dom';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import { listUsers } from '../../apiServices';

const cx = classNames.bind(styles);

function Login() {
    const [login, setLogin] = useState(true);
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const getUsers = async () => {
            try {
                const resUsers = await listUsers();
                setUsers(resUsers)
                return resUsers;
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, [login]) 

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
                        <FormRegister users={users} handleToggleLogin={handleToggleLogin} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
