document.addEventListener('change', (event) => {
  if (event.target.id = 'formFile') {
    const img = document.getElementById('image-attach');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function () {
      URL.revokeObjectURL(img.src); // free memory
    };   
  }
})

//add text on over the image

const input = document.getElementById('floatingInput');
const div = document.getElementById('div-image');
const parag = document.getElementById('img-paragraph');

input.addEventListener('keyup', () => {
  parag.innerText = input.value;  
})

window.addEventListener('click', (event) => {
    if (event.target.id === 'fire') {
      div.style.border = '2px solid red';
    }
    if (event.target.id === 'water') {
      div.style.border = '2px solid blue';
    }
    if (event.target.id === 'earth') {
      div.style.border = '2px solid green';
    }
})