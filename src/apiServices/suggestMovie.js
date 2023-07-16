import * as request from '../utils'

export const suggestMovie = async () => {
    try {
        const res = await request.get('suggest');
        return res
    } catch (error) {
        console.log("Lỗi get data suggest movie");
    }
}