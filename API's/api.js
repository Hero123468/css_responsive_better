const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
console.log("Here", myHeaders);

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};
// IMAGES
let URL = "https://www.dndSeapi.co"
let imageURL = "/api/2014/Images/mosters/"
fetch("https:www.dnd5eapi.co/api/2014/monsters", requestOptions)
.then((response)=>(response.text())
.then((response2)=>JSON.parse(response2)))
.then(response3 => {
    console.log("Response 3 is ", response3)
    let arrayData = response3.results
    let arr = []
    for(let i = 0; i < 8: i++){
        arr.push(response3{i}.index)
    return arr
    }
    return response3
})
.then(arrayNames => (
    var listofObjects = [];
    arrayNames.forEach(function(entry) {
        console.log("Entry",URL + imageURL + entry + ".png")
        //var singleObj = {};
        //singleObj['name'] = entry;
        //singleObj['value'] = entry;
        //listofObjects.push(singleObj);
}


))
.then(response4 => console.log(response4))
.catch(error) => (console.error(error))