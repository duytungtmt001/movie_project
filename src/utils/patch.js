import request from './baseUrlApi';

export const patch = async (path, data = {}) => {
    const response = await request(path, {
        method: "PATCH",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
};
