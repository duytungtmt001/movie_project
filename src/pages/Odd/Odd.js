import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useEffect, useState } from 'react';
import {ApiContext} from '../../context';
import { useLoaderData, useNavigation } from 'react-router-dom';

function Odd() {
    const apiData = useContext(ApiContext);
    const typeMovie = apiData.typeMovie.filter((item) => item.category === "odd");  
    const dataLoader = useLoaderData();
    
    return (
        <div>
            <ListMovieByCategory
                dataCarousel={dataLoader.resListSlider}
                dataListMovie={dataLoader.resListMovie}
                typeMovie={typeMovie}
                sourceSliderImg="Slider_Odd"
                sourceListImg="List_Movie_Img"
            />
        </div>
    );
}

export default Odd;
