// the users input word is declared for js
let input1 = document.getElementById("word");
let button = document.getElementById("button");
let output1 = document.getElementById("code-output");

console.log("The button is", button )
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// defines the function
function encoder1() {
    let before_UpperCase = input1.value;
    let value = before_UpperCase.toUpperCase()
    console.log("INPUT IS: ", value);

    let encoded = ""
    

    for (let i = 0; i < 9; i++) {
        console.log("the letter is", i)
        let encoded = alphabet.indexOf(value[i])   
     }

    let len = value.length;
    console.log(" The word is ", len, " letters long.");

    let encodedValue = "";

    for(let i=0;i<len; i++) {
        console.log("the letter is ", value[i]);
        //encryption algorithm
        //convert letters to numbers
        let result = alphabet.indexOf(value[i]);
        
        
        encoded += result+"/"; 
    }
    output1.innerHTML = encoded; 
}
// this is where user enters the input
let input2 = document.getElementById("word2");
let button2 = document.getElementById("button2");
let output2 = document.getElementById("code-output2");

// decoder1
function decoder1() {
let value = input2.value;
console.log("Some words",value);
let len = value.length;
console.log("The variable length is", len);
let trimValue = value.trim();
console.log ("The trimValue is...", trimValue);
let splitValue = trimValue.split("/");
console.log ("The split value is", splitValue);
 splitValue.pop();
console.log ("The popvalue is...", splitValue);
let len2 = splitValue.length;
console.log ("The len2 is...", len2);
let result = "";
    for(let i=0; i<len2; i++) {        
    console.log("The index is...", i);
    console.log("The value is...", value[i]);
// if(value[i] == ""){ 
    console.log("here",typeof Number(splitValue[i]));
//    }
// the algorithym for decoding goes here
    let codeValue =  alphabet[Number(splitValue[i])];
    console.log("The codevalue is...", codeValue);
    if(splitValue[i] === "-1"){        
    result += " "
    }
    else{
    result += codeValue 

    }
    }
    console.log("The final result is...", result);
    output2.innerHTML= result.toLowerCase();
  }  
//function call