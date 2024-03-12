AOS.init({
    // Global settings:
    disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of data-aos as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
    // Settings that can be overridden on per-element basis, by data-aos-* attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });







const header = document.querySelector(".header")
const h_insta = document.querySelector(".h_insta")
const burger = document.querySelector(".burger_box")
const burger_menu = document.querySelector(".burger_menu")
const b_line1 = document.querySelector(".b_line1")
const b_line2 = document.querySelector(".b_line2")
const b_line3 = document.querySelector(".b_line3")
const buttons = document.querySelectorAll(".buttons")

// functions
function header_fixed() {
    if(scrollY > 20) {
        header.classList.add("scroll")

    } else {
        header.classList.remove("scroll")
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        window.open("https://linktr.ee/shlyah.ua");
    }
}

// Action
document.addEventListener('scroll', () => {
    header_fixed()
})

h_insta.onclick = () => {
    window.open('https://instagram.com/shlyah.ua?igshid=NmNmNjAwNzg=')
}

burger.onclick = () => {
    burger_menu.classList.toggle('active')

    b_line1.classList.toggle('active')
    b_line2.classList.toggle('active')
    b_line3.classList.toggle('active')
}