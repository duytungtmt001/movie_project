import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useEffect, useState } from 'react';
import {ApiContext} from '../../context';
import { listMovieOdd } from '../../apiServices';

function Odd() {
    const [dataMovieOdd, setDataMovieOdd] = useState([]);
    
    const apiData = useContext(ApiContext);
    
    const typeMovie = apiData.typeMovie.filter((item) => item.category === "odd");

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await listMovieOdd();
                setDataMovieOdd(res);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <ListMovieByCategory
            dataCarousel={apiData.listSliderOdd}
            dataListMovie={dataMovieOdd}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Odd"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Odd;
