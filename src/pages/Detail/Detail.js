import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import DetailMovie from '../../components/DetailMovie';
import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../context/ApiProvider';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import Loading from '../../components/Loading';
import { listMovieOdd, listMovieRelease, listMovieSeries } from '../../apiServices';
const cx = classNames.bind(styles);

function Detail() {
    // const dataLoader = useLoaderData();

    // const navigation = useNavigation();
    // const [render, setRender] = useState(false)
    // const [listMovie, setListMovie] = useState([]);
    // const [item, setItem] = useState();

    // const {info} = useParams();
    // const [type, name] = info.split('-');

    // const { typeMovie } = useContext(ApiContext);

    
    // useEffect(() => {
    //     let listMovie;
    //     switch (type) {
    //         case 'odd':
    //             listMovie = listMovieOdd;
    //             break;
    //         case 'series':
    //             listMovie = listMovieSeries;
    //             break;
    //         case 'release':
    //             listMovie = listMovieRelease;
    //             break;
    //         default:
    //             console.error('Category không hợp lệ');
    //     }
    //     const callApi = async () => {
    //         try {
    //             const resList = await listMovie();
    //             const resMovie = resList.find((item, index) => item.name === name);
    //             setListMovie(resList);
    //             setItem(resMovie);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     callApi();
    // }, [info]);

    // const opacityAnimation = render ? {
    //     animation: `Opacity linear .6s`,
    // } : {}

    // useEffect(() => {
    //     setRender(!render);
    //     window.scrollTo({ top: 0, left: 0 });
    // }, [info]);
    
    // return (
    //     <div>
    //         {navigation.state === 'loading' && <Loading />}
    //         {item ? (
    //             <div className={cx('wrapper')} style={{ ...opacityAnimation }}>
    //                 <DetailMovie item={item} typeMovie={typeMovie} list={listMovie} type={type} />
    //             </div>
    //         ) : (
    //             <Loading />
    //         )}
    //     </div>
    // );

    const navigation = useNavigation();
    const dataLoader = useLoaderData();
    const { typeMovie } = useContext(ApiContext);
    const [render, setRender] = useState(false);

    const opacityAnimation = render
        ? {
              animation: `Opacity linear .6s`,
          }
        : {};

    useEffect(() => {
        setRender(!render);
        window.scrollTo({ top: 0, left: 0 });
    }, [dataLoader.resMovie]);

    return (
        <div>
            {navigation.state === 'loading' && <Loading />}
            <div className={cx('wrapper')} style={{ ...opacityAnimation }}>
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
