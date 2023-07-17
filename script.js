const cursor = document.querySelector('#cursor')
const cursorBlur = document.querySelector('#cursor-blur')
const arrow = document.querySelector('#arrow')

arrow.addEventListener('click', () => {
  // document.getElementById('scroller').scrollIntoView()
  window.scrollBy(0, 800)
})

document.addEventListener('mousemove', function (dets) {
  cursor.style.transform = `translate(${dets.clientX - 10}px, ${
    dets.clientY - 10
  }px)`
  cursorBlur.style.transform = `translate(${dets.clientX - 200}px, ${
    dets.clientY - 200
  }px)`
})
const navElements = document.querySelectorAll('#nav h4')
navElements.forEach((element) => {
  element.addEventListener('mouseenter', function () {
    cursor.style.scale = 3
    cursor.style.border = '1px solid #fff'
    cursor.style.filter = 'brightness(10)'
    cursor.style.backgroundColor = 'transparent'
  })
  element.addEventListener('mouseleave', function () {
    cursor.style.scale = 1
    cursor.style.border = 'none'
    cursor.style.filter = 'brightness(1)'
    cursor.style.backgroundColor = '#a7d52e'
  })
})

const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
let currentSlide = 0

function showSlide() {
  slides[currentSlide].classList.add('active')
  dots[currentSlide].classList.add('activeSlide')
  // slideshowDot.play()
}

function hideSlide() {
  slides[currentSlide].classList.remove('active')
  dots[currentSlide].classList.remove('activeSlide')
  // slideshowDot.reverse()
}

function nextSlide() {
  hideSlide()
  currentSlide = (currentSlide + 1) % slides.length
  showSlide()
}

showSlide() // Show the first slide
setInterval(nextSlide, 3000) // Change slide every 3 seconds

gsap.to('#nav', {
  backgroundColor: '#000',
  duration: 0.5,
  height: '105px',
  scrollTrigger: {
    trigger: '#nav',
    scroller: 'body',
    // markers: true,
    start: 'top -10%',
    end: 'top -12%',
    scrub: 1,
  },
})

gsap.to('#main', {
  backgroundColor: '#000',
  scrollTrigger: {
    trigger: '#main',
    scroller: 'body',
    // markers: 'true',
    start: 'top -25%',
    end: 'top -80%',
    scrub: true,
  },
})

gsap.from('#about-us img, #about-us-in', {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#about-us',
    scroller: 'body',
    start: 'top 70%',
    end: 'top 65%',
    scrub: 3,
  },
})
gsap.from('.card', {
  y: 100,
  opacity: 0,
  duration: 1,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: '.card',
    scroller: 'body',
    start: 'top 70%',
    end: 'top 67%',
    scrub: true,
  },
})
gsap.from('#page2-b .section', {
  y: 100,
  opacity: 0,
  duration: 1,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: '.section',
    scroller: 'body',
    start: 'top 100%',
    end: 'top 70%',
    scrub: 3,
  },
})

// const button = document.querySelector('#right-sec button')
// const buttonText = document.querySelector('#right-sec button span')

// button.addEventListener('mouseenter', () => {
//   buttonText.play()
// })
// button.addEventListener('mouseleave', () => {
//   buttonText.reverse()
// })

// gsap.from(buttonText, {
//   paused: true,
//   y: 10,
//   opacity: 0,
//   duration: 0.5,
// })

gsap.from('#colon1', {
  y: -70,
  x: -70,
  scrollTrigger: {
    scroller: 'body',
    trigger: '#page3',
    start: 'top 50%',
    end: 'top 80%',
    scrub: 4,
  },
})
gsap.from('#colon2', {
  y: 70,
  x: 70,
  scrollTrigger: {
    scroller: 'body',
    trigger: '#page3',
    start: 'top 50%',
    end: 'top 80%',
    scrub: 3,
  },
})
gsap.from('#page4 h1', {
  y: 70,
  duration: 1,
  scrollTrigger: {
    // markers: true,
    scroller: 'body',
    trigger: '#page4',
    start: 'top 80%',
    end: 'top 60%',
    scrub: 1,
  },
})
