const btnMenu = document.querySelector('.home-header__btn-menu');
const burgerMenuNav = document.querySelector('.home-header__burger-menu-nav')

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('home-header__btn-menu_active');
	burgerMenuNav.classList.toggle('home-header__burger-menu-nav_active');
});



const btnToTop = document.querySelector('.home-main__btn-to-top');

window.addEventListener('scroll', checkScroll);
btnToTop.addEventListener('click', backToTop);

function checkScroll() {
	const scrolled = window.scrollY;
	if (scrolled > 100) {
		btnToTop.classList.add('home-main__btn-to-top_show');
	}	else {
		btnToTop.classList.remove('home-main__btn-to-top_show');
	}
}

function backToTop() {
	if (window.scrollY > 0) {
		window.scrollBy(0, -20);
		setTimeout(backToTop, 0);
	}
}