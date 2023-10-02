import ce from "./assets/ce.js";
import of from "./module/offer-grid/og.js";
import Wf from "./module/work-filters/wf.js"
import Info from "./module/info/info.js";


export default class Main {
    async render() {
        this.if = await this.fatchInfo();
        this.wfd = await this.fatchWorks();
        this.of = await this.fetchOffer()
        this.renderInfo()
        this.renderWorkFilter()
        this.renderOfferGrid();
    }

    renderInfo() {
        let info = new Info(this.if);
        document.querySelectorAll('[data-our-info]').forEach((i) => {
            i.append(info.elem)
        })
    }

    renderOfferGrid() {
        let grid = new of(this.of)
        document.querySelector('[data-offer-grid]').append(grid.elem)
    }


    renderWorkFilter() {
        let wf = new Wf(this.wfd)
        document.querySelector("[data-work-filter]").append(wf.elem)
    }

    async fatchInfo() {
        let data = await fetch("./info.json");
        let newData = await data.json()
        return newData;
    }

    async fetchOffer() {
        let data = await fetch("./offer.json");
        let newData = await data.json()
        return newData
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