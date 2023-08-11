import * as request from '../utils';

export const sliderRelease = async () => {
    try {
        const res = await request.get('slider-release');
        return res;
    } catch (error) {
        console.log('Lỗi get data slider main');
    }
};
