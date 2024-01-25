let mohib = document.getElementById('heading');
// mohib.innerText = 'Muhammad Mohib of Q N Software Services';

// image1 = document.getElementById('image');

// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(json => {
//     console.log(json.message)
//     mohib.innerHTML = `<img id="image" src="${json.message}" alt="">`
// });


// https://www.superheroapi.com/api.php/10223569763528853/

let num = 1;
const getSuperHero = () =>{
    console.log("Fit hai !!!!");
    fetch(`https://www.superheroapi.com/api.php/10223569763528853/${num}`).then(response => response.json())
    .then(result => {
        console.log(result)
        mohib.innerHTML = `<h1>${result.name}</h1><img id="image" src="${result.image.url}" height=300 width=300alt="">`
    })
    num ++
}

getSuperHero()