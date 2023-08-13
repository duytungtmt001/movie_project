import request from "./baseUrlApi";

export const post = async (path, data = {}) => {
    const response = await request.post(path, data);
    return response;
};
