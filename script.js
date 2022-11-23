// function renderHTML(APIResponse, AnotherAPIResponse){
//     document.querySelector('body').innerHTML = `<h1>${APIResponse}: ${AnotherAPIResponse}</h1>`
// }

// function APIENDPointCallOne(){
//     return fetch("https://api.le-systeme-solaire.net/rest.php/bodies/mercury")
//         .then( res => res.json());
// }

Promise.all([
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/soleil").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/mercury").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/venus").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/terre").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/mars").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/jupiter").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/saturn").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/uranus").then(
    (value) => value.json()
  ),
  fetch("https://api.le-systeme-solaire.net/rest.php/bodies/neptune").then(
    (value) => value.json()
  ),
])
  .then((value) => {
    insert(value)
    console.log(value)
    
    })
  .catch((err) => {});

function insert(value){
    for (let i = 0; i < value.length; i++) {
        document.getElementById("cardContainer").innerHTML =
          renderPlanetCard(value);
}}

function renderPlanetCard(data) {
  const planetArray = data.map(function (data) {
    return `<div class="col">
        <div class="card">
          <img src="https://images.newscientist.com/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.englishName}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>`;
  });
  return planetArray.join("")
}
