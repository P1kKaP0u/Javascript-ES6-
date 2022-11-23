var number = 10;
var city = "Muğla";

number = 11;
city = "İzmir";

var city = "Adana";

// Let var'ın aksine sadece bir kere tanımlanabilir. 

let country = "Ankara";
country = "Bursa";

function getMessage()
{
    var name = "Mustafa Kemal";
    console.log(city);
    console.log(name);
}


console.log(country);
console.log(number);
console.log(city);

getMessage();

// function içerisinde tanımlanan name değişkeni function dışında kullanılamaz. Erişim belirteçleri gibi düşünülebilir
console.log(name);


for(var i=1; i<10;i++)
{
    
} 

console.log(i);


for(let k=1; k<10;k++)
{
    
} 

console.log(k);


// döngülerde tanımlanan var değişkenleri dögü dışında kullanilabilir iken let ile tanımlanmış değişkenler kullanılamaz.



// Değişmeyecek veriler için kullanılır
const surname = "Aktaş";

//Diziler ve objeler referans tipli çalışır bu yüzden push işlemi gerçekleşir fakat yeniden tanımlanamaz.
const cities = ["Ankara", "İstanbul"]
cities.push("İzmir")

console.log(cities)
console.log(surname);