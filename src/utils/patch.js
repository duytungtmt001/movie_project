import request from './baseUrlApi';

export const patch = async (path, data = {}) => {
    const response = await request.patch(path, data);
    return false
};
