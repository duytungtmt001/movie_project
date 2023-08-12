import * as request from '../../utils';

export const typeMovieSuggest = async () => {
    try {
        const data = await request.get('type_movie_suggest');
        return data;
    } catch (error) {
        console.log('Lỗi data type_movie');
    }
};
