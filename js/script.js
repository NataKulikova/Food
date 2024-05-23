window.addEventListener("DOMContentLoaded", () => {
   
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide','fade');
            item.classList.remove('show');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) { //если в функцию не передан аргумент то по умолчанию будет то что записано после знака = 
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) { //если тот эл-т в который мы кликнули совпадает с тем эл-том кот мы сейчас перебираем
                    hideTabContent();
                    showTabContent(i); //i-это номер того элемента который совпал.то есть номер таба в который кликнул юзер
                }
            });
        }
    });
});

