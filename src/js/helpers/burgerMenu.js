const burger = document.querySelector('.home-header__btn-menu');
const navMenu = document.querySelector('.home-header__burger-menu-nav')

	burger.addEventListener('click', () => {
		burger.classList.toggle('home-header__btn-menu_active');
		navMenu.classList.toggle('home-header__burger-menu-nav_active');
})