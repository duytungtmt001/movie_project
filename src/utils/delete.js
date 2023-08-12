import request from './baseUrlApi';

export const deleteRequest = async (path) => {
    const response = await request.delete(path);
    return response;
};
