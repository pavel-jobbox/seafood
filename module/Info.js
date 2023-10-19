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
                <a class="info__link info__text" href="#">${this.info.adress}</a>
            </div>
            <div class="info__item" data-grafic>
                <h4 class="info__title">Режим работы</h4>
                <span class="info__text">
                    с <time>${this.info.week.open}</time> до <time>${this.info.week.close}</time> (${this.info.week.days})
                </span>
                <span class="info__text">
                    с <time>${this.info.weekend.open}</time> до <time>${this.info.weekend.close}</time> (${this.info.weekend.days})
                </span>
                <span class="info__status"></span>
            </div>
        </div>
        `);

        for (let i of this.info.phones) {
            let phone = ce(`<a href="tel:${i}" class="info__link info__text">${i}</a>`)
            this.elem.querySelector("[data-contacts]").append(phone)
        }

        this.getData();
    }


    getData() {

        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const currentDate = new Date();


        if (currentDate.getDay() <= 5 && (currentDate.getHours() >= 10 && currentDate.getHours() < 21)) {
            this.elem.querySelector('.info__status').innerHTML = `Cегодня ${daysOfWeek[currentDate.getDay()]}, мы ОТКРЫТЫ`;
        }
        else if (currentDate.getDay() > 5 && (currentDate.getHours() >= 11 && currentDate.getHours() < 19)) {
            this.elem.querySelector('.info__status').innerHTML = `Cегодня ${daysOfWeek[currentDate.getDay()]}, мы ОТКРЫТЫ`;
        }
        else {
            this.elem.querySelector('.info__status').innerHTML = `Cегодня ${daysOfWeek[currentDate.getDay()]}, мы ЗАКРЫТЫ`;
        }
    }

}