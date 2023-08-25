import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useState } from 'react';

import {ApiContext} from '../../context';
import { useLoaderData } from 'react-router-dom';

function Release() {
    const apiData = useContext(ApiContext);
    const dataLoader = useLoaderData()
    const typeMovie = apiData.typeMovie.filter((item) => item.category === 'release');

    return (
        <ListMovieByCategory
            dataCarousel={apiData.listSliderRelease}
            dataListMovie={dataLoader}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Release"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Release;
