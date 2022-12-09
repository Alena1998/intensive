document.getElementById("hero-action").onclick = function () {
    document.getElementById("cards").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("card__btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("car").value === "") {
        alert("Выбирете машину!");
    } else {
        alert("Спасибо за заявку, мы сважимся с вами в ближайшее время!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price__img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".hero");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});