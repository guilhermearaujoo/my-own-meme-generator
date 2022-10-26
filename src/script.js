document.addEventListener('change', (event) => {
  if (event.target.id = 'formFile') {
    const img = document.getElementById('image-attach');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function () {
      URL.revokeObjectURL(img.src); // free memory
    };   
  }
})