import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    dark,
    light,
    circle,
    disabled = false,
    onClick,
    className,
    children,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if(to) {
        props.to = to;
        Comp = Link;
    } else if(href) {
        props.href = href;
        Comp = 'a';
    } else if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof key === 'function') {
                delete props[key]
            }
        })
    }

    const classes = cx('wrapper', {
            [className]: className,
            dark,
            light,
            circle,
            disabled,
            leftIcon,
            rightIcon,
        }
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
        </Comp>
    );

}

export default Button