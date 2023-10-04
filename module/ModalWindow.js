import ce from "../assets/ce.js";

export default class {
    constructor() {
        this.render();
        this.addEventsListener()
    }

    render() {
        this.elem = ce(`
            <section class="modal">
                <div class="modal__body">

                </div>
            </section>
        `)
    }

    addEventsListener() {
        this.elem.addEventListener('click', (e) => {

        })
    }

    modalInner(html) {
        this.elem.querySelector('modal__body').innerHTML = html;
    }

    opne() {
        document.body.append(this.elem);
    }

    close() {
        e.preventDefault();
        this.elem.remove();
    }
}