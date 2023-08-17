import * as request from '../../utils';

export const listTrendHome = async () => {
    try {
        const res = await request.get('home_movie_trend');
        return res;
    } catch (error) {
        console.log('Lỗi get data list odd');
    }
};
