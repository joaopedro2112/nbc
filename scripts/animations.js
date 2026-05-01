const button_arrow = document.querySelector('.button-arrow')
const primary_section = document.querySelector('.primary-section')
const btn = document.querySelector('.btn')
const navbar_section = document.querySelector('.navbar-section')
window.addEventListener('scroll', () => {
    position_scroll = window.scrollY
    if (position_scroll > 50) {
        navbar_section.classList.add('navbar-section-active')
        button_arrow.classList.add('button-arrow-active')
    } else {
        navbar_section.classList.remove('navbar-section-active')
        button_arrow.classList.remove('button-arrow-active')
    }
})
button_arrow.addEventListener("click", () => {
    primary_section.scrollIntoView({
        behavior:"smooth",
        block:'center',
    })
    button_arrow.classList.toggle('button-arrow-active')    
})

 