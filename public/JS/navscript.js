let hamburger_btn = document.querySelector('.hamburger_btn')
let header = document.querySelector('.header')
let navbar = document.querySelector('.navbar') 



    hamburger_btn.addEventListener('click', function () {
        console.log('click')

        header.classList.toggle('header2')
        navbar.classList.toggle('navbar2')
        console.log(header)
        console.log(navbar)

    })