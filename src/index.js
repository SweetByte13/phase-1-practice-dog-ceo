console.log('%c HI', 'color: firebrick')

function fetchDogPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => processDogPhotos(json))
}

function processDogPhotos(images) {
    const imgContainer = document.getElementById("dog-image-container");
    images.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        imgContainer.appendChild(img)
    });

}

function fetchDogBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => processDogBreeds(json))
}

function processDogBreeds(types) {

    a = types.message;
    b = Object.keys(a);

    const breedContainer = document.getElementById("dog-breeds")
    b.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed
        breedContainer.appendChild(li);

        li.addEventListener('click', () =>
            li.style.color = 'salmon')

    })
}

function handelSelectBreed(e) {

    const breedContainer = document.getElementById("dog-breeds")
    breedContainer.innerHTML = "";

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => processDogBreedsWithFilter(json, e))
}


function processDogBreedsWithFilter(types, e) {
    let c = types.message;
    let listOfBreeds = Object.keys(c);
    console.log(listOfBreeds);
    

    const filterBreed = listOfBreeds.filter((breed) => {
        if (breed.charAt(0) === e.target.value) {
            return true
        }
        else {
            return false
        }
    })
    const breedContainer = document.getElementById("dog-breeds")
    
    filterBreed.forEach( each=> {
        const dog = document.createElement("li");
        dog.textContent = each
        breedContainer.appendChild(dog);

    })

    console.log(filterBreed);
}

document.addEventListener('DOMContentLoaded', function () {
    fetchDogPics();
    fetchDogBreeds();
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change', (e) => handelSelectBreed(e));

})