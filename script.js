const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');


button.addEventListener('click', () => {
    let color = "#";
    const random = Math.random().toString(16).slice(2,8);
    color += random
    bgEl.style.backgroundColor = color
    h2El.textContent = color
    // console.log(color)
})

