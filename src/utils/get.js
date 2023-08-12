import request from './baseUrlApi';

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}