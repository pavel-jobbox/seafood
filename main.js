import ce from "./assets/ce.js";



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