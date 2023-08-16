import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext } from 'react';
import {ApiContext} from '../../context';

function Odd() {
    const apiData = useContext(ApiContext);

    const typeMovie = apiData.typeMovie.filter((item) => item.category === "odd");

    return (
        <ListMovieByCategory
            dataCarousel={apiData.listSliderOdd}
            dataListMovie={apiData.listDataMovieOdd}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Odd"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Odd;
