const array = [1,2,3,4];

const squareArray = [];

array.forEach(number =>{
    squareArray.push(number*number);
});

console.log(squareArray);


//map function 

const mapArray = array.map(number => number * 3);

console.log(mapArray);


//filter function

const filterArray = array.filter(number => number>2);

console.log(filterArray);


//reduce function

const reduceArray = array.reduce((acc,number)=>{
    return acc + number;
});

console.log(reduceArray);