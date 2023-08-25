import {
    getMovieById,
    listMovieOdd,
    listMovieRelease,
    listMovieSeries,
    listTrendHome,
    sliderOdd,
    sliderRelease,
    sliderSeries,
    typeMovieApi,
} from '../apiServices';

export const loaders = {
    odd: async () => {
        try {
            const resListMovie = await listMovieOdd();
            return resListMovie;
        } catch (error) {
            console.log(error);
        }
    },
    series: async () => {
        try {
            const resListMovie = await listMovieSeries();
            return resListMovie;
        } catch (error) {
            console.log(error);
        }
    },
    release: async () => {
        try {
            const resListMovie = await listMovieRelease();
            return resListMovie;
        } catch (error) {
            console.log(error);
        }
    },
    detail: async ({ params }) => {
        const [type, id] = params.info.split('-');
        let listMovie;
        switch (type) {
            case 'odd':
                listMovie = listMovieOdd;
                break;
            case 'series':
                listMovie = listMovieSeries;
                break;
            case 'release':
                listMovie = listMovieRelease;
                break;
            default:
                console.error('Category không hợp lệ');
        }
        try {
            const resListMovie = await listMovie();
            const resMovie = await getMovieById(type, id);
            return { resListMovie, resMovie, type };
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
                resultRelease,
            };
        } catch (error) {
            console.log(error);
        }
    },
};