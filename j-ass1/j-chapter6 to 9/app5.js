//--------- Question no 1
// var a=10;
// document.write("RESULT:");
// document.write("<br> The value of a is :" ,a );
// document.write(" <br> ---------------------");
// document.write("<br> The value of ++a is:",++a);
// document.write("<br> Now the value of a is:",a);
// document.write("<br> <br> The value of a is:",a++);
// document.write("<br> Now the value of a is:",a);
// document.write("<br> <br> The value of a is:",--a);
// document.write("<br> Now the value of a is:",a);
// document.write("<br> <br> The value of a is:",a--);
// document.write("<br> Now the value of a is:",a--);
//--------- Question no 2
// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
//  dry run >>>>>>
// result = (2-1) - (1-1) + (1+1) + (1-1) 
////////// = 1 - 0 + 2 + 0 
////////// = 3
// STEPS>>>>>
// --a
// (2-1);
// --a - --b;
//  (1) - (1-1);
// --a - --b + ++b;
// 1 - 0 + (1+1) ;
// --a - --b + ++b +b--;
// 1 -0 + 2 +(1-1);
// 1 + 2 + 0 ;
//3;
// document.write( " <br> THE VALUE OF a IS ", a);
// document.write( " <br> THE VALUE OF b IS ", b);
// document.write( " <br> THE RESULT IS ", result);
//--------- Question no 3
// var username = prompt("What's your name :");
// prompt("HELLO" +username);
//--------- Question no 5
// let num = +prompt("Please enter a number");
// for (let i =1; i<=10 ;i++){
//      document.write("<br>");
//     document.write(num +" * " +i +" = "  +num*i);
// }
// if (num == 0){
// for (let i =1; i<=10 ;i++){
//     document.write("<br>");
//    document.write(5 +" * " +i +" = "  +5*i);
// }
// }
//--------- Question no 6
// let subject1 = prompt("Enter the name of subject1");
// let subject2 = prompt("Enter the name of subject2");
// let subject3 = prompt("Enter the name of subject3");
// let obtain_marks1 = +prompt("Enter the obtain marks for subject1");
// let obtain_marks2 = +prompt("Enter the obtain marks for subject2");
// let obtain_marks3 = +prompt("Enter the obtain marks for subject3");
// let obtain_marks = obtain_marks1 + obtain_marks2 + obtain_marks3;
// let total_Marks1 = 100;
// let total_Marks2 = 100;
// let total_Marks3 = 100;
// let total_marks = total_Marks1 + total_Marks2 + total_Marks3;
// let percentage1 = (obtain_marks1 * 100) / total_Marks1;
// let percentage2 = (obtain_marks2 * 100) / total_Marks2;
// let percentage3 = (obtain_marks3 * 100) / total_Marks3;
// let percentage = (obtain_marks * 100) / total_marks;
// document.write("<br> Subject TotalMarks Obtain marks Percentage");
// document.write("<br>",subject1  +"  " , total_Marks1  +" " , obtain_marks1  +" " , percentage1);
// document.write("<br>",subject2 +" "  , total_Marks2 +" "  , obtain_marks2 +" " , percentage2);
// document.write("<br>",subject3 +" " , total_Marks3 +" "  , obtain_marks3  +" " , percentage3);
// document.write("<br> " , total_marks +" " , obtain_marks  +" " , percentage);













