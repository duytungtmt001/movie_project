import * as request from '../utils';

export const typeMovieReleaseApi = async () => {
    try {
        const data = await request.get('type_movie_release');
        return data;
    } catch (error) {
        console.log('Lỗi data type_movie');
    }
};
