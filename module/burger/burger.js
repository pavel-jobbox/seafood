import ce from "../../assets/ce.js";

export default class {
    constructor() {
        this.render();
        this.addEventsListener()
    }

    render() {
        this.elem = ce(`
        `);
    }

    addEventsListener() {
        this.elem.addEventListener('click', (e) => {
            this.elem.classList.toggle('active');
        })
    }

    sub(ref) {
        return this.elem.querySelector('')
    }
}