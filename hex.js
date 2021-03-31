const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

// #f15025 do a loop to generate a hex color

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){

//if I fix const and not let I'am going to have an error

let hexColor = '#'

for( let i = 0 ; i < 6; i++) {
    hexColor += hex[0] 
}
color.textContent = hexColor
document.body.style.backgroundColor = hexColor

})