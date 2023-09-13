import * as request from '../../utils';

export const updateWishList = async (path, data) => {
    try {
        await request.patch(`list_movie_${path}`, data);
    } catch (error) {
        console.log('Lỗi update wishlist');
    }
};
