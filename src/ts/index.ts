import '../css/index.css'
import '@splidejs/splide/dist/css/splide.min.css'
import Splide from '@splidejs/splide'

class openToggle {
  constructor(el: HTMLElement) {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      el.classList.toggle('is-open')
    })
    window.addEventListener('click', (e) => {
      if (el.classList.contains('is-open') && !el.contains(e.target as HTMLElement)) {
        el.classList.remove('is-open')
      }
    })
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.classList.contains('is-open')) {
        el.classList.remove('is-open')
      }
    })
  }
}

document.querySelectorAll('.open-toggle').forEach(el => new openToggle(el as HTMLElement))

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  window.scrollY > 133 ? header?.classList.add('bg-primary-950/90') : header?.classList.remove('bg-primary-950/90')
})

const heroSlider = new Splide('.hero__slider', {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  arrows: false,
  pagination: true
})

heroSlider.mount()