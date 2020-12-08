const button = document.getElementById('btn-change-image');
const image = document.getElementById('myPic');

button.addEventListener('click', changeImage);

function changeImage() {
  if (image.classList.contains('box-out')) {
    image.classList.remove('box-out');
    image.classList.add('box-in');
    image.src = 'maya_happy.jpeg';
  } else {
    image.classList.remove('box-in');
    image.classList.add('box-out');
    image.src = 'maya_picture.jpeg';
  }
}
