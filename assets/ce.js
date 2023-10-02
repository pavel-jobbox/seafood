export default function (html) {
    let div = document.createElement('dIV');
    div.innerHTML = html;
    return div.firstElementChild;
}