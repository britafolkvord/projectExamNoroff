document.getElementById(`toggle`).addEventListener(`click`, function () {
    const menu = document.querySelector("ul");
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
