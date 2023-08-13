import request from "./baseUrlApi";

export const post = async (path, data = {}) => {
    const response = await request.post(path, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response;
};
