document.querySelector('.navbar__btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navbar__list').classList.toggle('open');
    document.querySelector('.header__section').classList.toggle('active');
})

const linkPopups = document.querySelectorAll(".linkPopup");
const popup = document.querySelector("#popup");
const cross = document.querySelector("#cross");
const linkPopupArray = Array.from(linkPopups);

linkPopupArray.forEach(function(linkPopup) {
    linkPopup.addEventListener('click', function() {
        popup.style.display = "block";
    });
});

cross.addEventListener('click', function() {
    popup.style.display = "none";
});