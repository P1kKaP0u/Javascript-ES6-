//document.getElementById("bio").innerHTML = "Author : Mustafa Kemal AKTAŞ";

//var intro1 = document.getElementById("intro1");
//var message = document.getElementById("message");

// message.innerHTML = intro1.innerHTML; 

// var AllList = document.getElementsByTagName("ul");
// var cities = AllList[0];

// AllItem = cities.getElementsByTagName("li");

// for (var i = 0; i < AllItem.length; i++) 
// {
//     alert(AllItem[i].innerHTML);
// }


//var classItem = document.getElementsByClassName("intro1");

//alert(classItem[1].innerHTML);
//alert(classItem.length);


// var queryElelemts = document.querySelectorAll("p.intro1");
// alert(queryElelemts.length);


// var nameElements = document.getElementsByName("userName");
// alert(nameElements[0].value);


// var name = document.getElementById("name").addEventListener("click",changeColor);

// function changeColor(){
//     document.getElementById("div1").style.backgroundColor = "red";
//     document.getElementById("div1").style.color = "white";
//     document.getElementById("div1").style.fontSize = "35px";
//     var nameElements = document.getElementsByName("userName");
//     nameElements[0].value = "Mustafa Kemal"
// }


// var node = document.getElementById("tree");
// alert(node.childNodes[0].nodeValue);


var head = document.createElement("h2");
var node = document.createTextNode("Merhaba, JavaScript");
head.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(head, p2);

alert("P2 Kaldırılıyor!!!!!!!!");
div1.removeChild(p2);