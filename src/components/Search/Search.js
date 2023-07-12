import { useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '../Icons';

const cx = classNames.bind(styles);

function Search() {
    const [inputSearch, setInputSearch] = useState(false);

    return (
        <div className={cx('search')}>
            <input
                className={cx('search-input', {
                    show: inputSearch,
                })}
                placeholder="Tìm kiếm phim, diễn viên, thể loại..."
            />

            <div className={cx('search-icon')} onClick={() => setInputSearch((prev) => !prev)}>
                <SearchIcon width="2.8rem" height="2.8rem" />
            </div>
        </div>
    );
}

export default Search;
