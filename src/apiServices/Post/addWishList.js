import * as request from "../../utils"

export const addWishList = async (data) => {
    try {
        const res = await request.post("wishlist", data);
        return res;
    } catch (error) {
        console.log('Lỗi add data wishlist');
    }
};