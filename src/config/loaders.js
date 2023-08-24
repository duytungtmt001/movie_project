import { listMovieOdd, listMovieRelease, listMovieSeries, listTrendHome, sliderOdd, sliderRelease, sliderSeries, typeMovieApi } from "../apiServices";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loaders = {
    odd: async () => {
        try {
            const resListMovie = await listMovieOdd();
            const resListSlider = await sliderOdd();
            return {
                resListMovie,
                resListSlider,
            };
        } catch (error) {
            console.log(error);
        }
    },
    series: async () => {
        try {
            const resListMovie = await listMovieSeries();
            const resListSlider = await sliderSeries();
            return {
                resListMovie,
                resListSlider,
            };
        } catch (error) {
            console.log(error);
        }
    },
    release: async () => {
        try {
            const resListMovie = await listMovieRelease();
            const resListSlider = await sliderRelease();
            const resType = await typeMovieApi();
            return {
                resListMovie,
                resListSlider,
                resType,
            };
        } catch (error) {
            console.log(error);
        }
    },
    home: async () => {
        try {
            const resOdd = await listMovieOdd();
            const resSeries = await listMovieSeries();
            const resRelease = await listMovieRelease();
            const resultTrend = await listTrendHome();
            let resultOdd = [];
            let resultSeries = [];
            let resultRelease = [];
            for (let i = 0; i < 10; i++) {
                resultOdd.push(resOdd[i]);
                resultSeries.push(resSeries[i]);
                resultRelease.push(resRelease[i]);
            }
            return {
                resultTrend,
                resultOdd,
                resultSeries,
                resultRelease
            };
        } catch (error) {
            console.log(error);
        }
    },
};
