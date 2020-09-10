const parseData = (input) => {
    let {data , column} = input;
    let keyWord = column.map(object => object.name);

    return data.map(user => {
        let result = {};
        keyWord.forEach(function (value,index){
            result[value] = user[index];
        });
        return result;
    })
};

export { parseData };
