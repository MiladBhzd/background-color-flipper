const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

// #f15025 do a loop to generate a hex color

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){

//Je choisis let et non const pour que je puisse changer la valeur de hexColor.

let hexColor = '#'

console.log(hex[getRandomNumber()]);

for( let i = 0 ; i < 6; i++) {
    // Je fais une ittération allant de 0 à 6 car il me faut
    hexColor += hex[getRandomNumber()] 
}
color.textContent = hexColor
document.body.style.backgroundColor = hexColor

})

// Je crée une fonction expression qui va générer des valeurs au hasard.
// Je fix à 16 ou à la longueur du tableau hex.
// Je génére un nombre flottant généré entre 0 (inclus) et 1 (exclu).
// La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
// Donc j'aurais des nombres au hasard allant de 0 à 16.
// Par la suite je passe ma fonction dans l'index du tableau hex.
// Et a chaque ittération grâce à ma boucle for j'incrémente hexColor.

const getRandomNumber = () => Math.floor(Math.random() * hex.length)