import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useEffect, useState } from 'react';
import {ApiContext} from '../../context';
import { useLoaderData } from 'react-router-dom';

function Series() {
    const apiData = useContext(ApiContext);
    const typeMovie = apiData.typeMovie.filter((item) => item.category === "series");
    const dataLoader = useLoaderData()
    
    return (
        <ListMovieByCategory
            dataCarousel={dataLoader.resListSlider}
            dataListMovie={dataLoader.resListMovie}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Series"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Series;