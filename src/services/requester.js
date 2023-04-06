const request = async (method, url, data) => {
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
    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);
        if (auth.accessToken) {
            options.headers = {
                ...options.headers, // destructuring saves the other headers and add a new property
                'X-Authorization': auth.accessToken
            };
        }
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
export const requestFactory = () => {
    return {
        get: request.bind(null, "GET"),
        post: request.bind(null, "POST"),
        put: request.bind(null, "PUT"),
        delete: request.bind(null, "DELETE"),
        patch: request.bind(null, "PATCH"),
    };
}
// export const patch = request.bind(null, "PATCH");
