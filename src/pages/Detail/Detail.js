import { useLoaderData, useNavigation } from 'react-router-dom';
import DetailMovie from '../../components/DetailMovie';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiProvider';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import Loading from '../../components/Loading';
const cx = classNames.bind(styles);

function Detail() {
    const navigation = useNavigation();
    const dataLoader = useLoaderData();
    const { typeMovie } = useContext(ApiContext);
    
    return (
        <div>
            {navigation.state === 'loading' && <Loading />}
            <div className={cx('wrapper')}>
                <DetailMovie
                    item={dataLoader.resMovie}
                    typeMovie={typeMovie}
                    list={dataLoader.resListMovie}
                    type={dataLoader.type}
                />
            </div>
        </div>
    );
}

export default Detail;
