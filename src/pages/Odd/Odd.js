import { sliderOdd, listMovieOdd, typeMovieApi } from '../../apiServices/Get';
import ListMovieByCategory from '../../components/ListMovieByCategory';

import { useEffect, useState } from 'react';

function Odd() {
    const [dataCarousel, setDataCarousel] = useState([]);
    const [dataListMovie, setDataListMovie] = useState([]);
    const [typeMovie, setTypeMovie] = useState([]);

    // Call API load data Carousel
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await sliderOdd();
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
                const dataList = await listMovieOdd();
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
                const result = dataType.filter((item) => item.category==="odd")
                setTypeMovie(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    return (
        <ListMovieByCategory
            dataCarousel={dataCarousel}
            dataListMovie={dataListMovie}
            typeMovie={typeMovie}
            sourceSliderImg="Slider_Odd"
            sourceListImg="List_Movie_Img"
        />
    );
}

export default Odd;
