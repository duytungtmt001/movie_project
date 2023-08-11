import * as request from '../utils';

export const typeMovieSeriesApi = async () => {
    try {
        const data = await request.get('type_movie_series');
        return data;
    } catch (error) {
        console.log('Lỗi data type_movie');
    }
};
