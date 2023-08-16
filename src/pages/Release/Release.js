import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useEffect, useState } from 'react';

import {ApiContext} from '../../context';
import { listMovieRelease } from '../../apiServices';

function Release() {
    const [dataMovieRelease, setDataMovieRelease] = useState([]);
    
    const apiData = useContext(ApiContext);
    
    const typeMovie = apiData.typeMovie.filter((item) => item.category === "release");
    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await listMovieRelease();
                setDataMovieRelease(res);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <ListMovieByCategory
            dataCarousel={apiData.listSliderRelease}
            dataListMovie={dataMovieRelease}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Release"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Release;
