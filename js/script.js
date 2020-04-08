document.addEventListener('scroll', () => {
	if ($(window).scrollTop() > 40) {
		$('header').addClass('header-fixed');
	}
	else {
		$('header').removeClass('header-fixed');
	}
});

$('nav').mouseover(() => {
	$('.nav-itens').addClass('nav-show');
});
$('nav').mouseout(() => {
	$('.nav-itens').removeClass('nav-show');
});
$('a.tooltip').mouseover(function() {
	$(this).children('.text-tooltip').css('opacity', '1');
});
$('a.tooltip').mouseout(function() {
	$(this).children('.text-tooltip').css('opacity', '0');
});
$('.text-tooltip').mouseover(e =>
	e.stopPropagation()
);

$('a.tooltip').click(function() {
	$('body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 375);
});