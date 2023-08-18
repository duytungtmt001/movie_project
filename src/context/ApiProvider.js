import { createContext, useEffect, useState } from 'react';
import { suggestMovie, typeMovieApi, sliderMain, sliderOdd, sliderSeries, sliderRelease } from '../apiServices/Get';
export const ApiContext = createContext();

export function ApiProvider({ children }) {
    const [typeMovie, setTypeMovie] = useState();
    const [suggest, setSuggest] = useState();
    const [listSliderMain, setSliderMain] = useState();
    const [listSliderOdd, setSliderOdd] = useState();
    const [listSliderSeries, setSliderSeries] = useState();
    const [listSliderRelease, setSliderRelease] = useState();

    useEffect(() => {
        const getApi = async () => {
            try {
                const resTypeMovie = await typeMovieApi(); 
                const resSuggest = await suggestMovie(); 
                const resSliderMain = await sliderMain(); 
                const resSliderOdd = await sliderOdd(); 
                const resSliderSeries = await sliderSeries(); 
                const resSliderRelease = await sliderRelease(); 
                setTypeMovie(resTypeMovie);
                setSuggest(resSuggest);
                setSliderMain(resSliderMain);
                setSliderOdd(resSliderOdd);
                setSliderSeries(resSliderSeries);
                setSliderRelease(resSliderRelease);
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
        listSliderRelease && (
            <ApiContext.Provider
                value={{
                    typeMovie,
                    suggest,
                    listSliderMain,
                    listSliderOdd,
                    listSliderSeries,
                    listSliderRelease,
                }}
            >
                {children}
            </ApiContext.Provider>
        )
    );
}
