const headerNavbar = document.querySelector('header .navbar');
const toggler =  document.querySelector('.navbar-toggler');
const changeHeader = function (){
    console.log('clicked')
    setTimeout(() => {
        if(toggler.classList.contains('collapsed')){
            headerNavbar.classList.add('navbar-light');
            headerNavbar.classList.remove('navbar-dark');
        }
        else {
            headerNavbar.classList.remove('navbar-light');
            headerNavbar.classList.add('navbar-dark');
        }
    }, 500);
}

toggler.addEventListener("click", changeHeader);

