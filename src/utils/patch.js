import request from './baseUrlApi';

export const patch = async (path, data = {}) => {
    await request.patch(path, data);
    return false
};
