// question no 1
// var number = 3.45214;
// document.write("Number :", number);
// document.write("<br>");
// document.write("Roundoff value :", Math.round(number));
// document.write("<br>");
// document.write("Floor value :", Math.floor(number));
// document.write("<br>");
// document.write("ceil value :", Math.ceil(number));
// question no 2
//  var number = -2.673;
// document.write("Number :", number);
// document.write("<br>");
// document.write("Roundoff value :", Math.round(number));
// document.write("<br>");
// document.write("Floor value :", Math.floor(number));
// document.write("<br>");
// document.write("ceil value :", Math.ceil(number));
// question no 3
// var number = prompt("please enter a number");
// var absvalue = Math.abs(number)
// document.write("The absolute value of ",number +" is " +absvalue);
// question no 4
// var randomNum = (Math.random()*6) +1
// var roundNum = Math.floor(randomNum)
// document.write("random dice value :", roundNum);
// question no 5
// var randomNum = (Math.random()*6) +1
// var roundNum = Math.floor(randomNum)
// if (roundNum == 2) {
//  document.write(" ", roundNum);
//  document.write("<br>");
// document.write("random coin value :Heads");
// }
// else if(roundNum == 1){
// document.write(" ", roundNum);
// document.write("<br>");
//  document.write("random coin value : Tails");}
// else 
// document.write("try again")
// question no 6
// var ran =(Math.random()*100)+1
// var ran1 = Math.floor(ran)
// document.write("random number between 1 to 100 :",ran1);
// question no 7
// var weight = prompt("please enter your weight: ") 
// if (( weight.charAt(2) &&  weight.charAt(4) == "k") || (weight.charAt(2) == 0) ) {
//  document.write(weight +"kilogram")   
// }
// question no 8
// var ran = +prompt("please enter a number 1 to 10 : ")
// var secretnum =(Math.random()*10)+1
// var ran1 = Math.floor(secretnum)
// if (ran == secretnum) {
//     document.write("secret value is :",ran1);
//      document.write("<br>");
//     document.write("congratulations you win");
// }
// else
// document.write("secret value is :",ran1);
//  document.write("<br>");
// document.write("try again");
//new chapter date methods
 // question no 1
// var datetime = new Date();
//  document.write(datetime);
// question no 2
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var d = new Date();
//  document.write("Current month : " , monthNames[d.getMonth()]);
// question no 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var new1 = new Date();
// var Day = new1.getDay();
// var Today = dayNames[Day];
// alert("Today is : " , Today);
// question no 4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var new1 = new Date();
// var Day = new1.getDay();
// var Today = dayNames[Day];
// document.write("Today is : " , Today);
// if (Today === "Sat" && Today === "Sun") {
//     document.write("Today is :  " , Today +"so It's Funday");
// }
// else
// document.write("Today is : " , Today);

// question no 5
// var datetime = new Date();
// var now = datetime.getDate();
// if(now < 15){
//  document.write("First fifteen days of the month");}
// else
// document.write("Last fifteen days of the month");
// question no 6
// var datetime = new Date();
// var millisec = datetime.getTime();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//  var d = new Date();
//  var newvar = monthNames[d.getMonth()];
// var min = datetime.getMinutes();
//  document.write("Current date :",datetime +"<br>");
//  document.write("ellapsed milliseconds since :" +newvar +millisec +"<br>");
//  document.write("ellapsed milliseconds since :" +newvar +min +"<br>");
// question no 7
// var date = new Date();
// var current = date.getHours();
// if (current < 12 ){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }
// question no 8
var laterdate = new Date(2022,11,31)
document.write("Laterdate :",laterdate)


 




 

 





