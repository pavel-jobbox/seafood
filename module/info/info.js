import ce from "../../assets/ce.js";


export default class {
    constructor(info) {
        this.info = info;
        this.render();
    }

    render() {
        this.elem = ce(`
        <div class="info">
            <div class="info__item" data-contacts>
                <h4 class="info__title">Наши контакты</h4>
                <a class="info__link info__text" href="">${this.info.adress}</a>
            </div>
            <div class="info__item" data-grafic>
                <h4 class="info__title">Режим работы</h4>
                <span class="info__text">
                с ${this.info.week.open} до ${this.info.week.close} (${this.info.week.days})
                </span>
                <span class="info__text">
                с ${this.info.weekend.open} до ${this.info.weekend.close} (${this.info.weekend.days})
                </span>
            </div>
        </div>
        `);

        for (let i of this.info.phones) {
            let phone = ce(`<a href="cell:${i}" class="info__link info__text">${i}</a>`)
            this.elem.querySelector("[data-contacts]").append(phone)
        }
    }

}