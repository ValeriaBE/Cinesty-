let imagen = document.getElementById('imagen');
let hi = document.getElementById('hi');
let classicmov = document.getElementById('classicmov');
let name = document.getElementById('name');
let demo = document.getElementById('demo');
const newMovies = document.getElementById('newMovies');
const newBtn = document.getElementById('new');
const classicbtn = document.getElementById('classic');
const home = document.getElementById('home');
const watch = document.getElementById('watch');
const randomMovieArray = ['Toy Story 4', 'What men want', "Isn't it romantic",'The perfect Date', "Wonder Park", 'The lego movie 2', 'Shazam!', 'Happy Death day 2U','The upside', 'Drunk Parents', 'Stuber','The secret life of pets 2'];
home.addEventListener('click', ()=>{
    hi.style.display='none';
    classicmov.style.display='none';
    demo.style.display='block';
    watch.style.display='block';
})
let card = (data) => {
    return `
          <div class="card cards">
                    <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <p>Country : ${data.Country}</p>
                    <p>Year : ${data.Year}  </p>
                    <p>Director : ${data.Director}</p>
                    <p>${data.Plot}</p>
                    <p>Awards: ${data.Awards}</p>
            </div>
      </div> `
};

const randomMovie = randomMovieArray.forEach(item => {
    fetch('https://www.omdbapi.com/?t=' + item + '&apikey=691b66e1')
        .then(res => res.json())
        .then(data => {
            newBtn.addEventListener('click', () => {
                classicmov.style.display='none';
                demo.style.display = 'none';
                watch.style.display = 'none';
                hi.style.display='block';
                document.getElementById('hi').innerHTML += card(data);
            });
        })
});
const classicMovieArray = ['Meet the Parents', 'The naked Gun', 'Mean girls', 'Pulp fiction', "There's something about Mary", 'Harold and Maude', 'Superbad', 'The mask', 'American Pie', 'School of rock', 'Old school', 'Slap Shot'];
const classMovie = classicMovieArray.forEach(item => {
    fetch('https://www.omdbapi.com/?t=' + item + '&apikey=691b66e1')
        .then(res => res.json())
        .then(data => {
            classicbtn.addEventListener('click', () => {
                demo.style.display = 'none';
                watch.style.display = 'none';
                hi.style.display='none';
                classicmov.style.display='block';
                document.getElementById('classicmov').innerHTML += card(data);
            });
        })
});


const pintarModal = (data) => {
    return `
        <div>
            <h2>${data.Title}</h2>
            <p>Actors: ${data.Actors}</p>
            <p>Director: ${data.Director}</p>
            <p>Plot: ${data.Plot}</p>
        </div>`
}

const learnsponge = document.getElementById('learn1');
const modalbody = document.getElementById('modal-body');
const sliderArr = ['The spongebob movie'];
const slide = sliderArr.forEach(item =>{
    fetch('https://www.omdbapi.com/?t=' + item + '&apikey=691b66e1')
    .then(res => res.json())
    .then(data => {
        learnsponge.addEventListener('click',()=> {
            modalbody.innerHTML = pintarModal(data);
        })
    })
});
const learngrown = document.getElementById('learn2');
const sliderArr2 = ['Grown-ups'];
const slide2 = sliderArr2.forEach(item =>{
    fetch('https://www.omdbapi.com/?t=' + item + '&apikey=691b66e1')
    .then(res => res.json())
    .then(data => {
        learngrown.addEventListener('click',()=> {
            modalbody.innerHTML = pintarModal(data);
        })
    })
});

const learnzoo = document.getElementById('learn3');
const sliderArr3 = ['Zootopia'];
const slide3 = sliderArr3.forEach(item =>{
    fetch('https://www.omdbapi.com/?t=' + item + '&apikey=691b66e1')
    .then(res => res.json())
    .then(data => {
        learnzoo.addEventListener('click',()=> {
            modalbody.innerHTML = pintarModal(data);
        })
    })
})



