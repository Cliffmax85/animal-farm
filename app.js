// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const dogSound = document.getElementById('dog-sound');
const dogImage = document.getElementById('dog-image');
const catSound = document.getElementById('cat-sound');
const catImage = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const horseImage = document.getElementById('horse-image');
const whichAnimal = document.getElementById('show-animal');

dogImage.addEventListener('click', () => {
  dogSound.play();
  whichAnimal.textContent('Doggie!!!');
});

catImage.addEventListener('click', () => {
  catSound.play();
  whichAnimal.textContent('Kitty!!!!');
});

horseImage.addEventListener('click', () => {
  horseSound.play();
  whichAnimal.textContent('Horsey!!!');
});

// document.addEventListener('keydown', (event) => {
  
//   if (event.key === 'c') {

//   }

//   if (event.key === 'd') {

//   }


// });

