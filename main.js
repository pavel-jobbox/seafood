import Wf from "./module/work-filters/wf.js"
import Info from "./module/info/info.js";
import GridSection from "./module/grid-section/GridSection.js";
import Footer from "./module/footer/Footer.js";
import Nav from "./module/nav/nav.js";


export default class Main {
    async render() {
        this.masters = await this.fatchMaster();
        this.if = await this.fatchInfo();
        this.wfd = await this.fatchWorks();
        this.offerGridFatch = await this.fetchOffer()
        this.renderInfo()
        this.renderWorkFilter()
        this.renderGridSection()
        this.renderFooter()
    }


    async renderNav() {
        const info = await this.renderInfo()
        new Nav(info)
    }

    renderGridSection(data, datset) {
        new GridSection(data, datset);
    }


    async renderFooter() {
        let info = await this.fatchInfo()
        new Footer(new Info(info).elem)
    }



    /*  функция жедт получения инфрпмации с сервера,
        полученную информацию обрабатвает в моделе (info)
        возвращет стелизированные блок кода с полученной информацией
        документация по стилям в файле README.md
    */
    async renderInfo() {
        const information = await this.fatchInfo()
        return new Info(information).elem;
    }



    async renderWorkFilter() {
        new Wf(await this.fatchWorks());
    }

    async fatchInfo() {
        let data = await fetch("./assets/info.json");
        let newData = await data.json()
        return newData;
    }


    async fatchMaster() {
        let data = await fetch('./assets/masters.json');
        let newData = await data.json()
        return newData
    }

    async fetchOffer() {
        let data = await fetch("./assets/offer.json");
        let newData = await data.json()
        return newData
    }

    async fatchWorks() {
        let data = await fetch("./assets/vorks.json");
        let newData = await data.json()
        return newData;
    }

}
