let word = document.getElementById('word')
let button = document.getElementById('button')
let codeOutput = document.getElementById("code-output")


//function definiton

function vowelRemover(value){
    let solution = ''
    console.log('value', value)
    let len - value.length
    console.log('the length of the number is',len)
    for(let i = 0; i < len ;i++){
        console.log(value[i])
        if(value[i] == 'a') || value[i] == 'e' || value[i] == 'i' || value[i] == 'o' || value[i] == 'u' ){

        }
        else{
            solution += value[i]
        }
    }
    codeOutput.innerHtml = solution

}

//add event listener to the button
button.addEventListener('click', function(){
    let wordValue = word.value
    vowelRemover(wordValue)
})

/*

this is a funciton definition
function name (perams) {
    the action the funciton does
}
this is how we do a function call
we use the function name followed by ()
name ()
*/