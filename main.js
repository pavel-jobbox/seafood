import ce from "./assets/ce.js";
import of from "./module/offer-grid/og.js";
import Wf from "./module/work-filters/wf.js"


let x = [
    {
        "name": "парикхмахерские услуги",
        "image": "hairCut.jpeg"
    },
    {
        "name": "маникюр",
        "image": "nails.jpeg"
    },
    {
        "name": "педикюр",
        "image": "nailsLags.jpeg"
    },
    {
        "name": "уход",
        "image": "crema.jpeg"
    },
    {
        "name": "косметология",
        "image": "buty.jpeg"
    },
    {
        "name": "визаж",
        "image": "visage.jpeg"
    }
]

export default class Main {
    async render() {

        this.wfd = await this.fatchWorks();

        this.renderWorkFilter()
        this.renderOfferGrid();
    }

    renderOfferGrid() {
        let grid = new of(x)
        document.querySelector('[data-offer-grid]').append(grid.elem)
    }


    renderWorkFilter() {
        let wf = new Wf(this.wfd)
        document.querySelector("[data-work-filter]").append(wf.elem)
    }

    async fatchWorks() {
        let data = await fetch("./vorks.json");
        let newData = await data.json()
        return newData;
    }
}




document.querySelector('.burger').addEventListener('click', (e) => {


    document.querySelector('.burger').classList.toggle('burger_active');

    let elem = ce(`
        <section class="modul-info">
            info
        </section>`);

    if (document.querySelector('.burger_active')) {
        document.body.append(elem);
    }
    else {
        document.querySelector('.modul-info').remove()
    }
});