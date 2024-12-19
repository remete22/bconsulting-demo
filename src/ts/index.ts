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

const solutionsSlider = new Splide('.solutions__slider', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  gap: 60,
  arrows: true,
  arrowPath: "M21.6161 6.61612C22.1043 6.12796 22.8957 6.12796 23.3839 6.61612L35.8839 19.1161C36.1183 19.3505 36.25 19.6685 36.25 20C36.25 20.3315 36.1183 20.6495 35.8839 20.8839L23.3839 33.3839C22.8957 33.872 22.1043 33.872 21.6161 33.3839C21.128 32.8957 21.128 32.1043 21.6161 31.6161L31.9822 21.25H5C4.30964 21.25 3.75 20.6904 3.75 20C3.75 19.3096 4.30964 18.75 5 18.75H31.9822L21.6161 8.38388C21.128 7.89573 21.128 7.10427 21.6161 6.61612Z",
  pagination: false
})

solutionsSlider.mount()
