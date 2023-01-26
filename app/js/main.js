
(function () {
const tabsItem = document.querySelectorAll('.selector__label') 
const tabsContent = document.querySelectorAll('.selector__content') 
const headerBurgerBtn = document.querySelector('.logo__burger')
const headerNav = document.querySelector('.header__nav')
const headerNavCloseBtn = document.querySelector('.header__nav-close')

headerBurgerBtn.addEventListener('click',  (e) =>{
    headerNav.classList.add('active');

})
headerNavCloseBtn.addEventListener('click', (e) => {
    headerNav.classList.remove('active');
})

tabsItem.forEach((tab, index) => {
tab.addEventListener('click', (e) =>{


            tabsContent.forEach(content => {
            content.classList.remove('active')
        });

            tabsItem.forEach(tab =>{
            tab.classList.remove('active')
        });

            tabsItem[index].classList.add('active')
            tabsContent[index].classList.add('active')
        })
    })
})();
const swiper = new Swiper('.swiper', {
  // Optional parameters
direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
  // If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 1, 
    /* breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    } */
});