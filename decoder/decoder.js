let input1 = document.getElementById("word");
let button = document. getElementById("button");
let output1 = document.getElementById("code-output");

console.log(button, "is the button.");


// defines the function
function encoder1(){
    let value = input1.value
    console.log("INPUT IS: ", value);


    let len = value.length;
    console.log(" The word is ", len, " letters long ")

    let encodedValue =  ""; 
    
    const alphabet = ["A", "B","C","D","E","F","G","H","I","J","K","L","M", "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
    for(let i=0;i<=10; i++) {
        console.log("the letter is ", i)
        //encryption algorithym
        //convert letters to numbers
        let result = Text. indexOf(value[i]);
        encodedValue += result;
    }
    output1.innerHTML = encodedValue;
}

//function call