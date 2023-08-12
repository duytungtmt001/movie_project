import * as request from '../../utils';

export const listMovieSeries = async () => {
    try {
        const res = await request.get('list_movie_series');
        return res;
    } catch (error) {
        console.log('Lỗi get data list odd');
    }
};
