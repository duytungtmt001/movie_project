import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { CloseIcon, LoadingIcon, SearchIcon } from '../Icons';

import {motion, useMotionValue} from 'framer-motion'
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Popper/Wrapper';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

function Search({
    data = [],
    hideOnClick = false
}) {
    const [inputSearch, setInputSearch] = useState(false);
    const searchWrapRef = useRef()
    const inputRef = useRef();

    useEffect(() => {
        const handleHideSearch = (e) => {
            if (!e.target.closest(`.${searchWrapRef.current.className.split(' ')[0]}`)) {
                inputSearch && setInputSearch(false)
            }
        };

        if(inputSearch) {
            inputRef.current.focus()
        }

        document.addEventListener('click', handleHideSearch);

        return () => document.removeEventListener('click', handleHideSearch)
    }, [inputSearch])


    const handleSearch = () => {
        if(!inputSearch) {
            setInputSearch(true)
        } else {
            console.log('Search') 
        }
    }

    const renderResult = ({attrs}) => {
        return (
            <motion.div {...attrs}>
                <Wrapper className={cx('wrapper')}>
                    <div className="row" style={{margin: '0 -6px'}}>
                        {data.map((item, index) => (
                            <div className="col l-4" style={{marginTop: '12px', padding: '0 6px', position: 'relative'}} key={index}>
                                <Image
                                    alt="Movie"
                                    src={require(`../../assets/images/type_movie/${item.img}`)}
                                    className={cx('item-image')}
                                />
                                <span className={cx('item-title')}>{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className={cx('care')}></div>
                </Wrapper>
            </motion.div>
        );
    }

    const handleMount = () => {

    }

    const handleHide = () => {

    }

    return (
        <div>
            <Tippy
                trigger='click'
                interactive
                offset={[0, 20]}
                placement='bottom-end'
                render={renderResult}
                onMount={handleMount}
                onHide={handleHide}
                hideOnClick={hideOnClick}
            >
                <div className={cx('search', {
                    "search-show": inputSearch
                })} ref={searchWrapRef}>
                    <div 
                        className={cx('search-icon')} 
                        onClick={handleSearch}
                    >
                        <SearchIcon width="2.6rem" height="2.6rem" />
                    </div>
        
                    <input
                        ref={inputRef}   
                        className={cx('search-input', {
                            "input-show": inputSearch,
                        })}
                        placeholder="Tìm kiếm phim, diễn viên..."
                    />
                    {/* <CloseIcon  classname={cx('search-right', 'close')}/>
                    <LoadingIcon width='3rem' height='3rem' classname={cx('search-right', 'loading')}/> */}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
