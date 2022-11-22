// function renderHTML(APIResponse, AnotherAPIResponse){
//     document.querySelector('body').innerHTML = `<h1>${APIResponse}: ${AnotherAPIResponse}</h1>`
// }

// function APIENDPointCallOne(){
//     return fetch("https://api.le-systeme-solaire.net/rest.php/bodies/mercury")
//         .then( res => res.json());
// }

Promise.all([
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/soleil").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/mercury").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/venus").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/terre").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/mars").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/jupiter").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/saturn").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/uranus").then(value => value.json()),
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/neptune").then(value => value.json()),
    
])
.then((value) => {
    
    console.log(value[0])
})
.catch((err) => {
});

function htmlData() {
    
}






// async function fetchSolarBodies(){

// const result =  await fetch("https://api.le-systeme-solaire.net/rest.php/bodies/uranus")
// .then(await fetch("https://api.le-systeme-solaire.net/rest.php/bodies/jupiter"))
// const parsedResponse = await result.json();
// console.log(parsedResponse)

// }
// fetchSolarBodies();