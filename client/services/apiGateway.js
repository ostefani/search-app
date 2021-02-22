const getAPI = url => {
    const initialObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetch(url, initialObject)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error('We run into problem, try again later');
        })
        .catch(error => {
            console.log(error);
            return { status: 'error' };
        });
};

export default getAPI;
