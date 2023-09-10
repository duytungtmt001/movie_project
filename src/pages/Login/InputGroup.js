import styles from './Login.module.scss';
import classNames from 'classnames/bind';

import { useState } from 'react';
const cx = classNames.bind(styles);

function InputGroup({ id, labelText, type = "text", placeholder, formMessage, value, setValue }) {
    return (
        <div>
            <label htmlFor={id} className={cx('header-input')}>
                {labelText}
            </label>

            <div className={cx('input-wrap')}>
                <input
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type={type}
                    placeholder={placeholder}
                />
                <span className={cx('form-message')}>{formMessage}</span>
            </div>
        </div>
    );
}

export default InputGroup;
