var getHelloWorld = function HelloWorld(){
    console.log("HelloWorld");
}

getHelloWorld();


const getHelloWorld2 = () =>{
    console.log("HelloWorld with const");
}

getHelloWorld2();


const getHelloWorld3 = (message) =>{
    console.log(message);
}

getHelloWorld3("Hello world with variable function");


var addition = (number1,number2) =>{

    return number1 + number2;
}

let result = addition(12,15);
console.log(result);