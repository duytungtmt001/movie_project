import * as request from '../utils';

export const sliderOdd = async () => {
    try {
        const res = await request.get('slider-odd');
        return res;
    } catch (error) {
        console.log('Lỗi get data slider main');
    }
};
