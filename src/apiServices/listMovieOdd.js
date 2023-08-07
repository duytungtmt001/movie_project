import * as request from '../utils'

export const listMovieOdd = async () => {
    try {
        const res = await request.get('list-movie');
        return res
    } catch (error) {
        console.log("Lỗi get data list odd");
    }
}