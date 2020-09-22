// TODO 可以思考一下可否用reduce来做
const parseData = (input) => {
    // TODO 解构可以优化到函数接受参数中
    let {data , column} = input;
    // TODO keyWord 没有太大必要
    let keyWord = column.map(object => object.name);

    return data.map(user => {
        let result = {};
        // TODO forEach内可以使用箭头函数
        keyWord.forEach(function (value,index){
            result[value] = user[index];
        });
        return result;
    })
};

export { parseData };
