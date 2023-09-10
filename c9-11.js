// qno 1 

var city = prompt("Enter your city");
if (city == "karachi") {
    console.log("welcome to the city of lights");
    }else
    {
        console.log("welcome to the city of andara")
    }

// qno 2
var gender = prompt("Enter your gender ");
if (gender == "male") {
    console.log("welcome Sir!");
    }else
    {
        console.log("welcome Madam!")
    }


// qno 3
var color = prompt("enter the road trafic signal color");
if( color == "red"){
    console.log("Must Stop !")
} if ( color == "yellow"){
    console.log("Ready to move !")
} if (color == "green"){
    console.log("Move on !")
}

// qno 4
var fuel = prompt("enter remaning fuel of the car");
if(fuel < 0.25){
    console.log("please refill the fuel of the car")
}

// qno 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}

// qno 6 
var subject1 =  + prompt("enter your marks");
var subject2 =  +prompt("enter your marks");
var subject3 = +prompt("enter your marks");
var obtainMarks = (subject1 + subject2 + subject3);
var total  = 300 ; 
var percetage = ((obtainMarks / 300) * 100);
 document.write("<h1> Marks sheet </h1>")
 document.write("<br>");
 document.write("total marks"+total);
 document.write("<br>");
 document.write("obtain marks"+ obtainMarks);
 document.write("<br>");
 document.write("percentage:"+percetage+"%");
 document.write("<br>");
 if ( percetage >= 80) {
    document.write("Grade: A-one") 
    document.write("<br>");
    document.write("Remarks:Excellent")  
    document.write("<br>");
 }
 else if( percetage >= 70) {
    document.write("Grade: A") 
    document.write("<br>");
    document.write("Remarks:good") 
    document.write("<br>"); 
 }
 else if ( percetage >= 60) {
    document.write("Grade: B")  
    document.write("<br>");
    document.write("Remarks:you need to improve") 
    document.write("<br>");
 }
 else if ( percetage <= 60) {
    document.write("Grade: Sorry fail")  
    document.write("<br>");
    document.write("Remarks: sorry fail") 
 }

// qno 8 
//  var number = 40;
 var number = 21;
 if( number % 3 == 0) {
     console.log("The number is divisible by 3 ")
 }