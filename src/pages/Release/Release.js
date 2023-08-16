import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext } from 'react';

import {ApiContext} from '../../context';

function Release() {

    const apiData = useContext(ApiContext);

    const typeMovie = apiData.typeMovie.filter((item) => item.category === "release");

    return (
        <ListMovieByCategory
            dataCarousel={apiData.listSliderRelease}
            dataListMovie={apiData.listDataMovieRelease}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Release"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Release;
