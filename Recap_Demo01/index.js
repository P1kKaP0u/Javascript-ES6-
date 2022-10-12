var users = [

    {
        email:"mustafa@gmail.com",password:12345},
    {
        email:"mustafakemal12@gmail.com",password:1234567},
    

];

var tweets = [

    { email:"mustafa@gmail.com",tweet:"Böyün canlı ders yok mu hocam"},
    { email:"mustafakemal12@gmail.com", tweet:"Dolar 20 oldu çok iyi amk"},
    { email:"mustafakemal12@gmail.com", tweet:"Hava çok sıcak moruk"}

];

var email = prompt("email?")
var password = prompt("password?")

function login()
{
    if ((email == users[0].email && password == users[0].password)||
    (email == users[1].email && password == users[1].password))
    {
        console.log("Login Successful");
        console.log(tweets);
    }
    else
    {
        console.log("Login Failed");
    }
}

login(email, password)