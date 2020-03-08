export default class Item {
    constructor(title, img, num) {
        this.title = title;
        this.img = img;
        this.button = 'choose it';
        this.num = num;
    }
    draw () {
       return `
    <div class="item">
        <h2 class="title">${this.title}</h2>
        <div class="pic"><img src="${this.img}"></div>
        <button class="click" data-num = '${this.num}' >${this.button}</button>
    </div> 
`
    }
}