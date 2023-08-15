import { createContext, useEffect, useState } from 'react';
import { suggestMovie, typeMovieApi, sliderMain, sliderOdd, sliderSeries, sliderRelease, listTrendHome, listMovieSeries, listMovieRelease, listMovieOdd } from '../apiServices/Get';
const ApiContext = createContext();

function ApiProvider({ children }) {
    const [typeMovie, setTypeMovie] = useState([]);
    const [suggest, setSuggest] = useState([]);
    const [listSliderMain, setSliderMain] = useState([]);
    const [listSliderOdd, setSliderOdd] = useState([]);
    const [listSliderSeries, setSliderSeries] = useState([]);
    const [listSliderRelease, setSliderRelease] = useState([]);
    const [listTrend, setListTrend] = useState([]);
    const [listDataMovieOdd, setListDataMovieOdd] = useState([]);
    const [listDataMovieSeries, setListDataMovieSeries] = useState([]);
    const [listDataMovieRelease, setListDataMovieRelease] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const resTypeMovie = await typeMovieApi(); 
                const resSuggest = await suggestMovie(); 
                const resSliderMain = await sliderMain(); 
                const resSliderOdd = await sliderOdd(); 
                const resSliderSeries = await sliderSeries(); 
                const resSliderRelease = await sliderRelease(); 
                const resListTrend = await listTrendHome(); 
                const resListMovieOdd = await listMovieOdd(); 
                const resListMovieSeries = await listMovieSeries(); 
                const resListMovieRelease = await listMovieRelease(); 
                const resWishlist = await wishlist(); 
                setTypeMovie(resTypeMovie);
                setSuggest(resSuggest);
                setSliderMain(resSliderMain);
                setSliderOdd(resSliderOdd);
                setSliderSeries(resSliderSeries);
                setSliderRelease(resSliderRelease);
                setListTrend(resListTrend);
                setListDataMovieOdd(resListMovieOdd);
                setListDataMovieSeries(resListMovieSeries);
                setListDataMovieRelease(resListMovieRelease);
                setWishlist(resWishlist);
            } catch (error) {
                console.log(error);
            }
        }

        getApi();
    }, [])

    return (
        <ApiContext.Provider
            value={{
                typeMovie,
                suggest,
                listSliderMain,
                listSliderOdd,
                listSliderSeries,
                listSliderRelease,
                listTrend,
                listDataMovieOdd,
                listDataMovieSeries,
                listDataMovieRelease,
                wishlist,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
}

export default ApiProvider;
