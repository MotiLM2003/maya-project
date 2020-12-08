const button = document.getElementById('btn-change-image');
const image = document.getElementById('myPic');
const happyEmojy = document.getElementById('happy-emojy');
const buttonText = document.getElementById('button-text');
button.addEventListener('click', changeImage);

function changeImage() {
  if (image.classList.contains('box-out') || image.classList.length === 0) {
    image.classList.remove('box-out');
    image.classList.add('box-in');
    image.src = 'maya_happy.jpeg';
    happyEmojy.src = 'happier.png';
    buttonText.textContent = ' Make Maya Happy';
  } else {
    image.classList.remove('box-in');
    image.classList.add('box-out');
    image.src = 'maya_picture.jpeg';
    happyEmojy.src = 'happy.png';
    buttonText.textContent = ' Make Maya Happier';
  }
}
