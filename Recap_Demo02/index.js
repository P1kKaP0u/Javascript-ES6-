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


function IsHaveUser(email, password) {
    for (i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            return true;
        }
        
    }
    return false;
}
function login()
{
    if (IsHaveUser(email, password))
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