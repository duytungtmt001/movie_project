import * as request from '../../utils';

export const typeMovieApi = async () => {
    try {
        const data = await request.get('type_movie');
        return data;
    } catch (error) {
        console.log("Lỗi data type_movie");
    }
}