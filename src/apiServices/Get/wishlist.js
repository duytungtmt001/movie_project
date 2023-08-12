import * as request from '../../utils'

export const wishlist = async () => {
    try {
        const res = await request.get('wishlist');
        return res
    } catch (error) {
        console.log("Lỗi get data wishlist");
    }
}