import * as request from '../../utils';

export const users = async () => {
    try {
        const data = await request.get('users');
        return data;
    } catch (error) {
        console.log('Lỗi get users');
    }
};