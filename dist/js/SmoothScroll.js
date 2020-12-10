$(document).on('click', 'a[href^="#"]', function(e) {
	var id = $(this).attr('href');
	var $id = $(id);
	if ($id.length === 0) return;
	$('a.active').removeClass('active');
	$(this).addClass('active');
	closeNavigation();
	e.preventDefault();
	var pos = $id.offset().top;
	$('body, html').animate({
		scrollTop: pos
	}, 1500);
});
const closeNavigation = ()=>
{
	const nav = document.querySelector('.nav-links');
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelectorAll('.nav-links li');
	if(nav.classList.contains("nav-active"))
	{
		document.body.classList.toggle('lock-scroll');
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		navLinks.forEach((link, i) =>
		{
			if (link.style.animation) link.style.animation = '';
			else link.style.animation = `navLinkFade 0.5s ease forwards ${i / 4 + 0.5}s`
		});
	}
}
window.addEventListener('scroll', event => {
	let navigationLinks = document.querySelectorAll('nav ul li a');
	let fromTop = window.scrollY;
	navigationLinks.forEach(link => {
		let section = document.querySelector(link.hash);
		if (section.offsetTop - 250 <= fromTop && section.offsetTop + section.offsetHeight - 250 > fromTop) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
});
