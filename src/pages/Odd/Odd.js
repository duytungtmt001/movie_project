import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useEffect, useState } from 'react';
import {ApiContext} from '../../context';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../components/Loading'
import { listMovieOdd } from '../../apiServices';
import { useNavigation } from 'react-router-dom';

function Odd() {
    const apiData = useContext(ApiContext);
    const typeMovie = apiData.typeMovie.filter((item) => item.category === "odd");  
    const dataLoader = useLoaderData();
    // const [listOdd, setListOdd] = useState();
    // useEffect(() => {
    //     const callApi = async () => {
    //         try {
    //             const res = await listMovieOdd();
    //             setListOdd(res);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     callApi();
    // }, []);
    
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
    )
}

export default Odd;
