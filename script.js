const optellen = function(...args){
    return args.reduce((acc, items) => {
        return acc + items;
    })
}

console.log(optellen(1,2,3,4,5,6));

const tellen =function(num1, num2, num3){
    return num1 + num2 + num3;
}
const cijfers = [1,2,3];

console.log(optellen(...cijfers));