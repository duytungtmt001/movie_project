import { useParams } from 'react-router-dom';
import DetailMovie from '../../components/DetailMovie';
import { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../context/ApiProvider';
import { listMovieOdd, listMovieSeries, listMovieRelease } from '../../apiServices';

function Detail() {
    const param = useParams();
    const [category, nameMovie] = param.info.split('-');

    const { typeMovie } = useContext(ApiContext);
    const [item, setItem] = useState({});
    const [list, setList] = useState([])

    useEffect(() => {
        let listMovie;
        switch (category) {
            case 'odd':
                listMovie = listMovieOdd;
                break;
            case 'series':
                listMovie = listMovieSeries;
                break;
            case 'release':
                listMovie = listMovieRelease;
                break;
            default:
                console.error('Category không hợp lệ');
        }

        const callApi = async () => {
            try {
                const res = await listMovie();
                const result = res.find((child, index) => child.name === nameMovie);
                setList(res);
                setItem(result);
            } catch (error) {
                console.log(error);
            }
        };

        callApi();
    }, [param.info]);

    return item.img_banner && <DetailMovie item={item} typeMovie={typeMovie} category={category} list={list} />;
}

export default Detail;
