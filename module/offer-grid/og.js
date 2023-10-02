import ce from "../../assets/ce.js";



export default class {
    constructor(data) {
        this.data = data;
        this.render()
    }


    render() {
        this.elem = ce(`
            <div class="offer-grid">
            </div>
        `);

        let card = this.data.map(i => ce(`
                <div class="offer__item">
                        <picture class="offer__picture">
                            <img src="./images/offer/${i.image}" alt="">
                        </picture>
                    <h3 class="offer__title">${i.name}</h3>
                </div>
            `)
        )

        this.elem.append(...card);
    }
}