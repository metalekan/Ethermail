const toggleButton = document.getElementsByClassName('toggle')[0];
const navigationButton = document.getElementsByClassName('navigation')[0];

toggleButton.addEventListener('click', () => {
    navigationButton.classList.toggle('active')
})