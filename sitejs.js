const button = document.getElementById('btn-change-image');
const image = document.getElementById('myPic');
button.addEventListener('click', changeImage);

function changeImage() {
  if (image.classList.contains('box-out') || image.classList.length === 0) {
    image.classList.remove('box-out');
    image.classList.add('box-in');
    image.src = 'maya_happy.jpeg';

    button.textContent = '🙂 Make Maya Happy   🙂';
  } else {
    image.classList.remove('box-in');
    image.classList.add('box-out');
    image.src = 'maya_picture.jpeg';

    button.textContent = '😁 Make Maya Happier 😁';
  }
}
