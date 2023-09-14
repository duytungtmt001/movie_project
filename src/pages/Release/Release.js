import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useContext, useEffect, useState } from 'react';

import {ApiContext} from '../../context';
import { listMovieRelease } from '../../apiServices';
import Loading from '../../components/Loading'
import { useLoaderData } from 'react-router-dom';

function Release() {
    const apiData = useContext(ApiContext);
    // const [listRelease, setListRelease] = useState([]);
    // useEffect(() => {
    //     const callApi = async () => {
    //         try {
    //             const res = await listMovieRelease()
    //             setListRelease(res)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     callApi()
    // })
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
    )
}

export default Release;
