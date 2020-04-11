const getData = {
    dataToArray: (data) => {
        let dataArr = [];

        for (let phone in data) {
            const phoneInfo = data[phone];
            phoneInfo.id = phone;
            dataArr.push(phoneInfo);
        }
        return dataArr;
    }
}

export default getData;