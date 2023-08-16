import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext } from 'react';
import {ApiContext} from '../../context';

function Series() {
    const apiData = useContext(ApiContext);

    const typeMovie = apiData.typeMovie.filter((item) => item.category === "series");
    return (
        <ListMovieByCategory
            dataCarousel={apiData.listSliderSeries}
            dataListMovie={apiData.listDataMovieSeries}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Series"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Series;