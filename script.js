<!DOCTYPE HTML>
<html>
<head>
<title>JS Intro< /title>
< script >
function checkAge() {
    var age = prompt('What is your age?');
    console.log('Hello, you are' + age);
    if (age < 21) {
        alert('you are under 21')
    } else {
        alert('you are 21 or older')
    }
}

checkAge();

function checkGrade() {
    grade = grade.toUpperCase();
}
var grade = prompt('what is your letter grade in the class?');
switch (grade) {
    case 'A':
        alert('Excellent');
        break;

    case 'B':
        alert('Good JOb!');
        break;

    case 'C':
        alert('Solid Effort!');
        break;

    case 'D':
        alert('Meh!');
        break;

    default: ('better luck next time!')

}
var staff=['tyler','hilary','haley'];
 function printStaff() {
     if (shouldAddDavid) {
         staff.push("David");
     }
     for (var i = 0; i<staff.length; i++) {
         console.log('Introducing staff member' + [i]);
         
        
     } 
         
 
 }

function add(opp1,opp2) {
return op1 + op2;
}
function subtract(op1,op2) {
    return op1 - op2;
}
function divide(op1,op2) {
    if (op2 != 0);
     return op1/op2
     } 
     else {
         alert('You cannot do that')
     }
     }