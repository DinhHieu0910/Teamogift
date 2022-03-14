btn_headerMenu = document.querySelector('#mobile_menu');

btn_headerMenu.addEventListener('click', () => {
    btn_menulist = document.querySelector('.mobile_menu--active');
    btn_menulist.classList.toggle("open");
});