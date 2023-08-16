import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useEffect, useState } from 'react';
import {ApiContext} from '../../context';
import { listMovieSeries } from '../../apiServices';

function Series() {
    const [dataMovieSeries, setDataMovieSeries] = useState([]);
    const apiData = useContext(ApiContext);

    const typeMovie = apiData.typeMovie.filter((item) => item.category === "series");

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await listMovieSeries();
                setDataMovieSeries(res);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    return (
        <ListMovieByCategory
            dataCarousel={apiData.listSliderSeries}
            dataListMovie={dataMovieSeries}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Series"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Series;