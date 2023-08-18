import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../context/ApiProvider';
import { listMovieOdd, listMovieSeries, listMovieRelease } from '../../apiServices';
function DetailMovie({ category, nameMovie }) {
    const {typeMovie} = useContext(ApiContext);
    const [item, setItem] = useState({});

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


    useEffect(() => {
        const callApi = async () => {
            try {
                const res = await listMovie();
                const result = res.find((child, index) => child.name === nameMovie);
                setItem(result)
            } catch (error) {
                console.log(error);
            }
        }

        callApi();
    }, [])

    return (
        <div>
            <h1 style={{ margin: '200px', color: '#fff' }}>{nameMovie}</h1>
            <h1 style={{ margin: '200px', color: '#fff' }}>{category}</h1>
        </div>
    );
}

export default DetailMovie;
