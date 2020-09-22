// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    // TODO forEach内可以使用箭头函数
    sections.forEach(function(section,index){
        items.splice(section.index+index,0,section.content);
    });
    return items;
}
export { inject };
