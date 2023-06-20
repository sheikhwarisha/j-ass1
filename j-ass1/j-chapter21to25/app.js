//--------Question no 1
// var firstName = prompt("please enter your first name");
// var lastName = prompt("please enter your last name");
// var fullName = firstName  + lastName;
// console.log(fullName); 
//--------Question no 2
// var mobileModel = prompt("please enter your favourite mob model");
// var length = mobileModel.length;
// document.write("My favourite phone is : ",mobileModel);
// document.write("<br>");
// document.write("Length of string : ",length);
//--------Question no 3
// var string = "Pakistani";
// var indexValue  = string.indexOf("n")
// document.write("String: ",string);
// document.write("<br>");
// document.write("Index of n : ",indexValue);
//--------Question no 4
// var string = "Hello World";
// var lastIndexValue  = string.lastIndexOf("l");
// document.write("String: ",string);
// document.write("<br>");
// document.write("Last Index of 'l' : ",lastIndexValue);
//--------Question no 5
// var string = "Pakistani"
// document.write("String : ",string);
// document.write("<br>");
// document.write("Character at index 3 : ",string.charAt(3));
//--------Question no 6
// var firstName = prompt("please enter your first name");
// var lastName = prompt("please enter your last name");
// var fullName = firstName.concat(lastName);
// console.log(fullName); 
//--------Question no 7
// var city = "Hyderabad";
// document.write("City : ",city);
// document.write("<br>");
// var replaceCity = city.replace("Hyderabad","Islamabad");
// document.write("After replacement : ",replaceCity); 
//--------Question no 8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var newMsg = message.replace(/and/g,"&")
// document.write(newMsg);
//--------Question no 9
// var string = "472"
// document.write("String : ",string);
// document.write("<br>");
// document.write("Typeof : ",typeof(string));
// document.write("<br>");
// var number = parseInt(string)
// document.write("Number : ",number);
// document.write("<br>");
// document.write("Typeof : ",typeof(number));
//--------Question no 10
// var input = prompt("please enter a string : ");
// document.write("User input : ",input);
// var upperCase = input.toUpperCase();
// document.write("<br>");
// document.write("Upper Case : ",upperCase);
//--------Question no 11
// var input = prompt("please enter a string : ");
// var firstCh = input.slice(0,1);
// var otherCh = input.slice(1);
// firstCh = firstCh.toUpperCase();
// otherCh = otherCh.toLowerCase();
// var newInput = firstCh + otherCh;
// document.write("Title Case : ",newInput);
//--------Question no 12
// var num = 35.36;
// document.write("Number : ",num);
// document.write("<br>");
// var newNum = num.toString();
// var newnum1 = newNum.replace(".","");
// document.write("Result : ",newnum1);
//--------Question no 13
// var username = prompt("please enter a user name ");
// var flag = false;
// for(var i = 0; i < username.length ; i++){
//     var check = username.charCodeAt(i)
//     if(check == 33 && check == 44 && check == 46 && check == 64){
//         flag = true;
//     }
// }
//     if(flag == true){
//         document.write("Please enter a valid user name") ;   
//     }
//     else {
//         document.write(" user name is valid") ;     
//     }
//--------Question no 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]; 
// let userItem = prompt("Welcome to sawat bakery ,what do you want to order sir /mam ");
// let flag = "not found";
// for(var i = 0; i < a.length; i++){
//     if(userItem === a[i] || userItem.toUpperCase() === a[i] || userItem.toLowerCase() === a[i]){
//         flag = "found";
//     }
// }
// if(flag ==="found"){
//     document.write("",userItem +" is available in our bakery");
// }
// else{
//     document.write("We are sorry ",userItem +"is not available in our bakery");   
// }
//--------Question no 15
var pass = prompt("please enter a password");
var flag = false ;
if(pass.length == 6){
    for(i =0 ; i <  pass.length ; i++)
    if ((pass.charAt[i] >= 65 || pass.charAt[i] <= 90)&&(pass.charAt[i] >= 97 || pass.charAt[i] <= 122) ) {
      document.write("valid")  
    }
}

//--------Question no 16
// var universty = "Universty Of Karachi";
// var newData = universty.split("")
// for (let i = 0; i < newData.length ;i++) {
//  document.write("<br>");
//     document.write(newData[i])  
// }
//--------Question no 17
// var input = "Pakistan";
// document.write("User input :",input);
// document.write("<br>");
// var lastChar = input.charAt(7);
// document.write("Last character of input : " ,lastChar);
//--------Question no 18
// var string = "The quick brown fox jumps over the lazy dog.";
// document.write(" " ,string);
// document.write("<br>");
// var nString = string.replace("The","the");
// var count = 0 ;
// for (var i = 0; i < nString.length; i++)
//  {   
//  if (nString.slice(i, i + 3) === "the") 
//  {  
//     count += 1;
//    } 
//  }
// document.write("There are" +count +"occurence of word 'the'");


 








