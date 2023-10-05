import ce from "../../assets/ce.js";


export default class {
    constructor(data, dataset) {
        this.dataset = dataset;
        this.data = data;
        this.render();
    }


    render() {
        this.elem = ce(`
                <div class="prises"></div>
            `);


        for (let i in this.data) {
            this.card = ce(`
                <div class="prises__wrapper">
                    <picture class="prises__image">
                        <img src="./images/price-image/${i}.jpeg" loading="lazy" alt="image">
                    </picture>
                </div>
            `);
            this.data[i].forEach(elem => {
                let card = ce(`
                    <div class="prises__section">
                        <h3 class="prises__information prises__information_title">${elem.name}</h3>
                        <h4 class="prises__information prises__information_subtitle">${elem.additionally}</h4>
                        <span class="prises__information prises__information_price">${elem.price}</span>
                    </div>
               `);
                this.card.append(card);
            });
            this.elem.append(this.card);
        }
        this.addElemtnts();
    }


    addElemtnts() {
        document.querySelector(`[data-grid-price="${this.dataset}"]`).append(this.elem);
    }
}