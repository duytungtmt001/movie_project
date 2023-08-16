import { createContext, useEffect, useState } from 'react';
import { suggestMovie, typeMovieApi, sliderMain, sliderOdd, sliderSeries, sliderRelease, listTrendHome } from '../apiServices/Get';
export const ApiContext = createContext();

export function ApiProvider({ children }) {
    const [typeMovie, setTypeMovie] = useState();
    const [suggest, setSuggest] = useState();
    const [listSliderMain, setSliderMain] = useState();
    const [listSliderOdd, setSliderOdd] = useState();
    const [listSliderSeries, setSliderSeries] = useState();
    const [listSliderRelease, setSliderRelease] = useState();
    const [listTrend, setListTrend] = useState();

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
                setTypeMovie(resTypeMovie);
                setSuggest(resSuggest);
                setSliderMain(resSliderMain);
                setSliderOdd(resSliderOdd);
                setSliderSeries(resSliderSeries);
                setSliderRelease(resSliderRelease);
                setListTrend(resListTrend);
            } catch (error) {
                console.log(error);
            }
        }

        getApi();
    }, [])

    return (
        typeMovie &&
        suggest &&
        listSliderMain &&
        listSliderOdd &&
        listSliderSeries &&
        listSliderRelease &&
        listTrend && (
            <ApiContext.Provider
                value={{
                    typeMovie,
                    suggest,
                    listSliderMain,
                    listSliderOdd,
                    listSliderSeries,
                    listSliderRelease,
                    listTrend,
                }}
            >
                {children}
            </ApiContext.Provider>
        )
    );
}
