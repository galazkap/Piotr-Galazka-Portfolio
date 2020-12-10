const burgerNav = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click', () => {
		document.body.classList.toggle('lock-scroll');
		nav.classList.toggle('nav-active');
		navLinks.forEach((link, i) => {
			if (link.style.animation) link.style.animation = '';
			else link.style.animation = `navLinkFade 0.5s ease forwards ${i / 6 + 0.1}s`
		});
		burger.classList.toggle('toggle');
	});
}
burgerNav();
