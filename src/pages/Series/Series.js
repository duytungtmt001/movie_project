import { sliderSeries, listMovieSeries, typeMovieApi } from '../../apiServices/Get';
import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useEffect, useState } from 'react';

function Series() {
    const [dataCarousel, setDataCarousel] = useState([]);
    const [dataListMovie, setDataListMovie] = useState([]);
    const [typeMovie, setTypeMovie] = useState([]);

    // Call API load data Carousel
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await sliderSeries();
                setDataCarousel(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    // Call API load data list movie
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const dataList = await listMovieSeries();
                setDataListMovie(dataList);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    // Call API load data type movie
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const dataType = await typeMovieApi();
                const result = dataType.filter((item) => item.category === 'series');
                setTypeMovie(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    console.log(typeMovie);

    return (
        <ListMovieByCategory
            dataCarousel={dataCarousel}
            dataListMovie={dataListMovie}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Series"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Series;