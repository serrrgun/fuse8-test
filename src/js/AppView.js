export class AppView {
  toHtml(data) {
    return `
    <div class="container">
      <h1 class="title wrapper">Our Latest Developments</h1>
      <div class="search wrapper">
        <div class="srach__wraper">
          <label class="search__label" for="search">Filter</label>
          <input class="search__input" type="text">
        </div>
      </div>
      <div class="cards wrapper">
        ${data.map((card) => this.getTemplateCard(card).trim()).join(``)}
      </div>
      <a href="#" class="button">Show more</a>
    </div>`
  }

  getTemplateCard(item) {
    return `
      <a href=" /details/${item.id}" class="cards__item" data-name="${item.title}">
        <div class="cards__item-img">
          <img src="https://via.placeholder.com/300x150/FF0000/FFFFFF?text=HOUSE" alt="">
          <span class="cards__item-type ${item.type === 'IndependentLiving' ? 'cards__item-type' : 'cards__item-type--support'}">
          ${item.type === 'IndependentLiving' ? 'Independent living' : 'Restaurant & Support available'}</span>
        </div>
        <div class="cards__item-wrapper">
          <h2 class="cards__item-title">${item.title}</h2>
          <span class="cards__item-adress">${item.address}</span>
          <p class="cards__item-price">New Properties for Sale from <span>${item.price}&#163;</span></p>
          <span class="cards__item-shared">Shared Ownership Available</span>
        </div>
      </a>
    `
  }
}