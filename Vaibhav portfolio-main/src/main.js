const vaibutton = document.getElementById('vai')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

vaibutton.addEventListener('click', toggleButton)