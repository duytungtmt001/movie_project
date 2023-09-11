import { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useLoaderData } from 'react-router-dom';

const cx = classNames.bind(styles);

function InputGroup({ id, labelText, type = "text", placeholder, formMessage, value, setValue, submit, existRule}) {
    const users = useLoaderData()
    const [exist, setExist] = useState(false)
    const [showError, setShowError] = useState(false);

    const borderInputStyle = showError ? {
        border: "1px solid red"
    } : {}
    
    useEffect(() => {
        const result = users.find((item, index) => item.name === value);
        setExist(!!result)
    }, [value])
    
    useEffect(() => {
        setShowError(submit);
    }, [submit])

    const handleBlur = () => {
        if(!value) {
            setShowError(true) 
        }
    }
    

    const handleInput = () => {
        setShowError(false)
    }

    return (
        <div>
            <label htmlFor={id} className={cx('header-input')}>
                {labelText}
            </label>

            <div className={cx('input-wrap')}>
                <input
                    style={{ ...borderInputStyle }}
                    id={id}
                    onBlur={handleBlur}
                    onInput={handleInput}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type={type}
                    placeholder={placeholder}
                />
                {showError && <span className={cx('form-message')}>{formMessage}</span>}
                {existRule && exist && (
                    <span className={cx('form-message')}>Tên đăng nhập đã tồn tại</span>
                )}
            </div>
        </div>
    );
}

export default InputGroup;
