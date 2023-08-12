import * as request from '../../utils';

export const deleteWishList = async (path) => {
    try {
        const res = await request.deleteRequest(`wishlist/${path}`);
        return res;
    } catch (error) {
        console.log('Lỗi delete wishlist');
    }
};
