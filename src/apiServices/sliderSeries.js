import * as request from '../utils';

export const sliderSeries = async () => {
    try {
        const res = await request.get('slider-series');
        return res;
    } catch (error) {
        console.log('Lỗi get data slider main');
    }
};
