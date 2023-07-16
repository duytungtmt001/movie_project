import * as request from '../utils'

export const sliderMain = async () => {
    try {
        const res = await request.get('slider-main');
        return res
    } catch (error) {
        console.log("Lỗi get data slider main");
    }
}