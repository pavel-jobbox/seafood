import ce from "../../assets/ce.js";

export default class {
    constructor(data, dataset) {
        this.data = data;
        this.dataset = dataset;
        this.render();
    }

    render() {
        this.elem = ce(`
            <div class="grid-section">
            </div>
        `);


        let card = this.data.map(i => {
            let subname = '';
            if (i.subname) subname = `<span class="grid-section__subtittle">${i.subname}</span>`;
            return ce(`
            <div class="grid-section__item">
                <picture class="grid-section__picture">
                    <img src="./images/${this.dataset}/${i.image}" alt="">
                </picture>
                <h3 class="grid-section__title">${i.name}</h3>
                ${subname}
            </div>
        `)
        });

        this.elem.append(...card);
        this.addElement();
    }

    addElement() {
        document.querySelector(`[data-grid-section="${this.dataset}"]`).append(this.elem);
    }
}