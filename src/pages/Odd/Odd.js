import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext } from 'react';
import {ApiContext} from '../../context';
import { useLoaderData } from 'react-router-dom';

function Odd() {
    const apiData = useContext(ApiContext);
    const typeMovie = apiData.typeMovie.filter((item) => item.category === "odd");  
    const dataLoader = useLoaderData();
    
    return (
        <div>
            <ListMovieByCategory
                dataCarousel={apiData.listSliderOdd}
                dataListMovie={dataLoader}
                typeMovie={typeMovie}
                sourceSliderImg="Slider_Odd"
                sourceListImg="List_Movie_Img"
            />
        </div>
    );
}

export default Odd;
