import { useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '../Icons';

import {motion, useMotionValue} from 'framer-motion'

const cx = classNames.bind(styles);

function Search() {
    const [inputSearch, setInputSearch] = useState(false);


    return (
        <div className={cx('search', {
            "search-hidden": inputSearch
        })}>
            <div 
                className={cx('search-icon')} 
                onClick={() => setInputSearch((prev) => !prev)}
            >
                <SearchIcon width="2.6rem" height="2.6rem" />
            </div>

            <input
                className={cx('search-input', {
                    "input-hidden": inputSearch,
                })}
                placeholder="Tìm kiếm phim, diễn viên..."
            />
        </div>
    );
}

export default Search;
