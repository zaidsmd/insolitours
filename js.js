const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 100,
    wrap: false
})
onload(carousel)

function day1() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    const frames = document.querySelectorAll('.frame');
    for (let u = 0; u < frames.length; u++) {
        frames[u].classList.remove("active");
    }
    const affectFrame = document.getElementById("frame1");
    affectFrame.classList.add("active")
    const affectButton = document.getElementById("day1");
    affectButton.classList.add("active")
}

function day2() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    const frames = document.querySelectorAll('.frame');
    for (let u = 0; u < frames.length; u++) {
        frames[u].classList.remove("active");
    }
    const affectFrame = document.getElementById("frame2");
    affectFrame.classList.add("active")
    const affectButton = document.getElementById("day2");
    affectButton.classList.add("active")
}

function day3() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    const frames = document.querySelectorAll('.frame');
    for (let u = 0; u < frames.length; u++) {
        frames[u].classList.remove("active");
    }
    const affectFrame = document.getElementById("frame3");
    affectFrame.classList.add("active")
    const affectButton = document.getElementById("day3");
    affectButton.classList.add("active")
}

function day4() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    const frames = document.querySelectorAll('.frame');
    for (let u = 0; u < frames.length; u++) {
        frames[u].classList.remove("active");
    }
    const affectFrame = document.getElementById("frame4");
    affectFrame.classList.add("active")
    const affectButton = document.getElementById("day4");
    affectButton.classList.add("active")
}

function mapStars() {
    const buttons = document.querySelectorAll('.button-map');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    const frames = document.querySelectorAll('.map-container');
    for (let u = 0; u < frames.length; u++) {
        frames[u].classList.remove("active");
    }
    const affectFrame = document.getElementById("starts-map");
    affectFrame.classList.add("active")
    const affectButton = document.getElementById("button-start");
    affectButton.classList.add("active")
}

function mapHotel() {
    const buttons = document.querySelectorAll('.button-map');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    const frames = document.querySelectorAll('.map-container');
    for (let u = 0; u < frames.length; u++) {
        frames[u].classList.remove("active");
    }
    const affectFrame = document.getElementById("hotel-map");
    affectFrame.classList.add("active")
    const affectButton = document.getElementById("button-hotel");
    affectButton.classList.add("active")
}

function mapEnds() {
    const buttons = document.querySelectorAll('.button-map');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    const frames = document.querySelectorAll('.map-container');
    for (let u = 0; u < frames.length; u++) {
        frames[u].classList.remove("active");
    }
    const affectFrame = document.getElementById("ends-map");
    affectFrame.classList.add("active")
    const affectButton = document.getElementById("button-end");
    affectButton.classList.add("active")
}
