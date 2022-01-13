const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.nav .nav-bar .nav-list ul li a');
const nav = document.querySelector('.nav.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		nav.style.backgroundColor = '#C8C8C8';
	} else {
		nav.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});