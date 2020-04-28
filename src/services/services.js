const phoneService = {
    load: async (id) => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/smartphones${id ? `/${id}` : ''}.json`);
        const data = await res.json();

        return data;
    },
    loadComments: async () => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/comments.json`);
        const data = await res.json();

        return data;
    },
    createComment: async (data) => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/comments.json`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseInfo = await res.json();
        return responseInfo;
    },
    addShoppingCart: async (data) => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/cart.json`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseInfo = await res.json();
        return responseInfo;
    },
    loadShoppingCart: async () => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/cart.json`);
        const data = await res.json();

        return data;
    },
    removeShoppingCartProduct: async (id) => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/cart/${id}.json`, {
            method: 'delete',
        });
        const responseInfo = await res.json();
        return responseInfo;
    },
    addShoppingOrder: async (data) => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/order.json`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseInfo = await res.json();
        return responseInfo;
    }

}

export default phoneService;