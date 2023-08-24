import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useState } from 'react';

import {ApiContext} from '../../context';
import { useLoaderData } from 'react-router-dom';

function Release() {
    const apiData = useContext(ApiContext);
    const dataLoader = useLoaderData()
    const typeMovie = dataLoader.resType.filter((item) => item.category === 'release');

    return (
        <ListMovieByCategory
            dataCarousel={dataLoader.resListSlider}
            dataListMovie={dataLoader.resListMovie}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Release"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Release;
