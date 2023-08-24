import * as request from '../../utils';

export const getMovieById = async (type, id) => {
    try {
        const res = await request.get(`list_movie_${type}/${id}`);
        return res;
    } catch (error) {
        console.log('Lỗi get data list odd');
    }
};
