const nav = document.querySelector('nav')
const mobileNav = document.querySelector('nav.mobile-nav')

const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.mobile-menu-container .close-icon')
const mobileMneuContainer = document.querySelector('.mobile-menu-container')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 60) {
        nav.classList.add('scrolled')
        mobileNav.classList.add('scrolled')
    }else{
        nav.classList.remove('scrolled')
        mobileNav.classList.remove('scrolled')
    }
})


menuIcon.addEventListener("click", ()=>{
    mobileMneuContainer.classList.add('active')
})

closeIcon.addEventListener("click", ()=>{
    mobileMneuContainer.classList.remove('active')
})