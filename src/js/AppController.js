import { AppModel } from "./AppModel";
import { AppView } from "./AppView";


export class AppController {
  constructor(selector) {
    this.$el = document.querySelector(selector)
    this.model = new AppModel()
    this.template = new AppView()
    this.filtersElements = null
  }

  async init() {
    const data = await this.model.getData()
    this.$el.innerHTML = this.template.toHtml(data)
    this.filters()
    this.filtersElements = document.querySelectorAll('.cards__item')
  }

  filters() {
    const input = document.querySelector('.search__input')

    input.addEventListener('input', (evt) => {
      const value = evt.target.value.toLowerCase()
      
      if(value.length > 3) {
        this.filtersElements.forEach((card) => {
          if(card.dataset.name.toLowerCase().indexOf(value) > -1) {
            card.style.display = ''
          } else {
            card.style.display = 'none'
          }
        })
      }

      if(value.length <= 3) {
        this.filtersElements.forEach((card) => {
          card.style.display = ''
        })
      }
    })
  }
} 