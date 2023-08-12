import * as request from '../../utils';

export const updateWishList = async (path, data) => {
    try {
        const res = await request.patch(`list_movie_${path}`, data);
        return res;
    } catch (error) {
        console.log('Lỗi update wishlist');
    }
};
