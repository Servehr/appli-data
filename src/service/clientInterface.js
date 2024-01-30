const FetchClient = {

    async get(url)
    {
        return await fetch(url);
    },

    async post(url, body)
    {
        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async getById(url, id)
    {
        return await fetch(url+id);
    },

    async delete(url, id)
    {
        return await  fetch(url+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async update(url, body)
    {
        return await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
}

export default FetchClient;