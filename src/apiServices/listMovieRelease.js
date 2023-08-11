import * as request from '../utils';

export const listMovieRelease = async () => {
    try {
        const res = await request.get('list_movie_release');
        return res;
    } catch (error) {
        console.log('Lỗi get data list odd');
    }
};
