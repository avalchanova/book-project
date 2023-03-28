const request = async (method, token, url, data) => {
    const options = {};

    if (method !== "GET") {
        //options are an empty object if the method is GET because the fetch does not need any data, only to URL to fetch a get request
        options.method = method;
        if (data) {
            options.headers = {
                "content-type": "application/json",
            };
            options.body = JSON.stringify(data);
        }
    }
    if (token) {
        options.headers = {
            ...options.headers, // destructuring helps us save the other headers and add a new property
            'X-Authorization': token,
        };
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }
    return result;

};
// Factory function is a function which will create an object
export const requestFactory = (token) => {
    return {
        get: request.bind(null, "GET", token),
        post: request.bind(null, "POST", token),
        put: request.bind(null, "PUT", token),
        delete: request.bind(null, "DELETE", token),
        patch: request.bind(null, "PATCH", token),
    };
}
// export const patch = request.bind(null, "PATCH");
