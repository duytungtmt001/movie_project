import * as request from '../../utils';

export const addUser = async (data) => {
    try {
        const res = await request.post('users', data);
        return res;
    } catch (error) {
        console.log('Lỗi add data users');
    }
};
