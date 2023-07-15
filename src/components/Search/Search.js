import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { CloseIcon, LoadingIcon, SearchIcon } from '../Icons';

import {motion, useMotionValue, useSpring} from 'framer-motion'
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Popper/Wrapper';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

function Search({
    data = [],
    hideOnClick = false
}) {
    const [inputSearch, setInputSearch] = useState(false);
    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)
    
    const searchWrapRef = useRef()
    const inputRef = useRef();


    const springConfig = {
        damping: 200,
        stiffness: 1400,
    };
    const transformDefault = -8;
    const transform = useSpring(transformDefault, springConfig);
    const opacity = useSpring(0, springConfig);

    const renderResult = ({attrs}) => {
        return (
            <motion.div {...attrs} style={{opacity, y: transform}}>
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

    const handleSearch = () => {
        if(!inputSearch) {
            setInputSearch(true);
            inputRef.current.focus();
            setVisible(true);
        } else {
            // console.log('Search') 
        }
    }

    const handleClickOutside = () => {
        setInputSearch(false)
        setVisible(false)
    }

    const handleMount = () => {
        transform.set(12);
        opacity.set(1);
    }

    const handleHide = ({unmount}) => {
        const cleanup = opacity.on('change', (value) => {
            if (value <= 0) {
                cleanup();
                unmount();
            }
        });

        transform.set(transformDefault);
        opacity.set(0)
    }

    const handleChangeInput = (e) => {
        if(!e.target.value.startsWith(' ')) {
            setValue(e.target.value)
        }
    }

    const handleClickClose = () => {
        setValue('');
    }

    return (
        <div>
            <Tippy
                visible={visible}
                interactive
                placement='bottom-end'
                render={renderResult}
                onMount={handleMount}
                onHide={handleHide}
                onClickOutside={handleClickOutside}
                animation={true}
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
                        value={value}  
                        className={cx('search-input', {
                            "input-show": inputSearch,
                        })}
                        placeholder="Tìm kiếm phim, diễn viên..."
                        onChange={handleChangeInput}
                    />
                    {value && <CloseIcon classname={cx('search-right', 'close')} onClick={handleClickClose} />}
                    {/* <LoadingIcon width='3rem' height='3rem' classname={cx('search-right', 'loading')}/> */}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
