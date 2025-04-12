let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("submit");
let output = document.getElementById("code-output");
// function definition
function addNumbers(x, y){
    //this is wher we convert x and y to a number
    let xNum = Number(x)
    let yNum = Number(y)


// this is the actual algorythm
let solution = xNum + yNum;


output.innerHTML = solution
return solution;
}
// function call
// let x = addNumbers (num1, num2);
// console.log("addNumbers returned the value of x",x);
button.addEventListener('click', function(){
    console.log('I got called')
    let num1 = input1.value;
    console.log("num1 is....", typeof num1)
    let num2 = input2.value;
    console.log("num2 is....", typeof num2)
    addNumbers(num1 , num2)
    
})

