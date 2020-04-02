const phoneService = {
    load: async (id) => {
        const res = await fetch(`https://smartphoneshopm22.firebaseio.com/smartphones${id ? `/${id}` : ''}.json`);
        const data = await res.json();

        return data;
    }
}

export default phoneService;