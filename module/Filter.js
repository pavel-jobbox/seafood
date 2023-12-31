import ce from "../assets/ce.js";

export default class {
    constructor(data) {
        this.data = data;
        this.render();
        this.addEventsListener();
    }

    render() {
        this.elem = ce(`
            <div class="work-filter">
                <div class="filter__controls">
                    <button class="active" data-show="all">показать все</button>
                    <button data-show="haircut">парикхмахерские услуги</button>
                    <button data-show="nail">маникюр</button>
                    <button data-show="visag">визаж</button>
                </div>
                <div class="filter__inner"></div>
            </div>
        `);
        this.renderContent();
        this.addElements();
    }

    addEventsListener() {
        this.sub('controls').addEventListener('click', (e) => {
            if (!e.target.closest('button')) { return; }
            this.elem.querySelector('button.active').classList.remove('active');
            e.target.classList.add('active');
            this.filter(e);
        })
    }


    filter(e) {
        this.elem.querySelectorAll('.filter__item').forEach(i => {
            i.classList.remove('hide');
            if (i.dataset.list !== e.target.dataset.show && e.target.dataset.show !== "all") {
                i.classList.add('hide');
            }
        });
    }
    renderContent() {
        for (let i of this.data) {
            let card = ce(`
                <picture class="filter__item" data-list=${i.name}>
                    <source srcset="../images/works/webp/${i.image}.webp" type="image/webp">
                    <source srcset="./images/works/${i.image}.jpeg" type="image/jpeg">
                    <img src="./images/works/${i.image}.jpeg" loading="lazy" alt="${i.name}">
                </picture>            
            `);

            this.elem.querySelector('.filter__inner').append(card)
        }
    }

    addElements() {
        document.querySelector("[data-work-filter]").append(this.elem)
    }



    sub(ref) {
        return this.elem.querySelector(`.filter__${ref}`);
    }
}