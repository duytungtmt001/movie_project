import { useState } from 'react';
import Button from '../../components/Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import InputGroup from './InputGroup';
import {addUser} from '../../apiServices/Post'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const cx = classNames.bind(styles);

function FormRegister({users, handleToggleLogin, setFocus }) {
    const [nameValue, setNameValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [passAgainValue, setPassAgainValue] = useState('');
    const [submit, setSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const [exist, setExist] = useState(false)

    const MySwal = withReactContent(Swal);

    success &&
        MySwal.fire({
            icon: 'success',
            title: 'Đăng ký thành công',
            confirmButtonText: 'Đăng nhập ngay',
        }).then(() => {
            setSuccess(false);
            handleToggleLogin();
        });

    const handleRegister = (e) => {
        e.preventDefault();
        const result = users.find((item, index) => item.name === nameValue);
        if(!!result) {
            setExist(true)
        } else {
            if (nameValue === '' && passValue === '') {
                setSubmit(true);
            } else {
                const handleAddUser = async () => {
                    await addUser({ name: nameValue, pass: passValue, img: '' });
                };
                handleAddUser();
                setSuccess(true);
            }
        }
    };

    return (
        <form className={cx('form')} id="form-2" autoComplete="off">
            <InputGroup
                id="name"
                labelText="Tên đăng nhập"
                placeholder="Tên đăng nhập"
                formMessage="Vui lòng nhập tên đăng nhập"
                value={nameValue}
                setValue={setNameValue}
                setFocus={setFocus}
                submit={submit}
                existRule
            />

            <InputGroup
                id="password"
                labelText="Mật khẩu"
                type="password"
                placeholder="Mật khẩu"
                formMessage="Vui lòng nhập mật khẩu"
                value={passValue}
                setValue={setPassValue}
                setFocus={setFocus}
                submit={submit}
            />

            <InputGroup
                id="passwordAgain"
                labelText="Nhập lại mật khẩu"
                type="password"
                placeholder="Nhập lại mật khẩu"
                formMessage="Vui lòng nhập nhập lại mật khẩu"
                value={passAgainValue}
                setValue={setPassAgainValue}
                setFocus={setFocus}
                submit={submit}
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
