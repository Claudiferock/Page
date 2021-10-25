const dButton = document.querySelector('.btn-download');
const arrow = document.querySelector('.download-arrow');

dButton.onclick = () => arrow.classList.add('arrow-gone');

arrow.onanimationend = e => arrow.classList.remove('arrow-gone');