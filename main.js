import Filter from "./module/Filter.js";
import Info from "./module/info/info.js";
import GridSection from "./module/GridSection.js";
import Footer from "./module/Footer.js";
import Nav from "./module/nav.js";
import GridPrise from "./module/grid-prise/GridPrise.js";


export default class Main {


    async renderPrice(dataset) {
        new GridPrise(await this.fatchPrice(), dataset);
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
        new Filter(await this.fatchWorks());
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
    async fatchPrice() {
        let data = await fetch("./assets/price.json");
        let newData = await data.json()
        return newData;
    }

}
