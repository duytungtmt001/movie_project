import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

import Button from '../../Button'

const cx = classNames.bind(styles);
function MenuItem({data, onClick}) {
  const classes = cx('item-button', {
    separate: data.separate
  })

  return (
    <div className={cx('menu-item')}>
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={data.onClick}>
            {data.title}
        </Button>
    </div>
  )
}

export default MenuItem