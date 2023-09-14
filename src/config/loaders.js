import {
    listMovieOdd,
    listMovieRelease,
    listMovieSeries,
    listTrendHome,
    listUsers
} from '../apiServices';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
        const [type, name] = params.info.split('-');
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
            const resMovie = resListMovie.find((item, index) => item.name === name);
            return { resListMovie, resMovie, type };
        } catch (error) {
            console.log(error);
        }
    },
    ribbon: async ({ params }) => {
        const [category, id] = params.info.split('-');
        let listMovie;
        switch (category) {
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
            const resMovie = resListMovie.filter((item, index) => item.typeMovie_id === Number(id));
            return {resMovie, id}
        } catch (error) {
            console.log(error);
        }
    },
    login: async () => {
        try {
            const resUsers = await listUsers();
            return resUsers
        } catch (error) {
            console.log(error);
        }
    },
    // home: async () => {
    //     try {
    //         const resOdd = await listMovieOdd();
    //         const resSeries = await listMovieSeries();
    //         const resRelease = await listMovieRelease();
    //         const resultTrend = await listTrendHome();
    //         let resultOdd = [];
    //         let resultSeries = [];
    //         let resultRelease = [];
    //         for (let i = 0; i < 10; i++) {
    //             resultOdd.push(resOdd[i]);
    //             resultSeries.push(resSeries[i]);
    //             resultRelease.push(resRelease[i]);
    //         }
    //         return {
    //             resultTrend,
    //             resultOdd,
    //             resultSeries,
    //             resultRelease,
    //         };
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
};
