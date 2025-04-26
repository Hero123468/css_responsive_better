//Reference the 
const output = document.getElementById("out");

const input = document.getElementById("input");
//consol.log("object is ", input)

//Reference the button
const button= document.getElementById("press");
//consol.log("button is" , button)

//add an eventListener to button

function search(){
    // we need an api key
    const apiKey = "08XgvGNqTVjSUnNSxeQuddB8Ly4KQcf4"

    //we need the API url end point
    //const pathRandom = 


    console.log("The button works", input.value)

    const search 
    console.log("you typed", input.value)
    const inputValue = input.value
    fetch(input search+?g=inputValue+6api_key=YOUR_API_KEY&limit=5)
    .then((response :Response )) => response.json()) Promise<any>
    .then(response2) => {
        console.log("data being parsed", response2/data[0].images.fixed.width.still.url){
        const arr = response2.data;
        const arrayValues = [];
        return  arr.map(item) => (
            console.log ("Each time is...", Item);
            let image = document.createElement("img");
            image.src = item. images.preview_gif
            output.appendChild(image); 
        )    
    }

}
    fetch(input search+)
    //axious({
    //    method: 'get'
    //    url: pathRandom
    //    responseType: 'stream'

    }

     


button.addEventListener("click",search)