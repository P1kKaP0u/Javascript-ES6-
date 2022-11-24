var object1 = {value: 1};
var object2 = {value: 2};
console.log(object1 === object2);

console.log(this);

this.alert("Hello world!");
alert("Hello world!!!");
window.alert("Hello world!!!!!");


const productService = {
    add : function(){
        console.log(this);
    }
};

productService.add();