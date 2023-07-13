import styles from './Image.module.scss'
import classNames from 'classnames/bind';
import { useState } from "react";

import images from '../../assets/images'

const cx = classNames.bind(styles);

const Image = ({alt, src, className, fallback: customFallback = images.noImage, ...props}) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback)
    }

    return (
        <img 
            alt={alt}
            src={src || fallback}
            className={classNames(cx('wrapper', className))}
            {...props}
            onError={handleError}        
        />
    )
}

export default Image;