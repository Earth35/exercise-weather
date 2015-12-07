$(document).ready(function () {
	$('th').on('click', highlight);
	$('img').closest('td').on('mouseenter', highlight);
	$('img').closest('td').on('mouseleave', highlight);
	$('.icon_d').on('click', changeIcon);
	$('.icon_n').on('click', changeIcon);
});

function highlight () {
	$(this).preventDefault;
	$(this).toggleClass('highlighted');
};

function changeIcon () {
	var source = $(this).attr('src');
	var imgIdentifier = source.substring(11, 12);
	if (imgIdentifier < 6) {
		imgIdentifier++;
	}
	else {
		imgIdentifier = 0;
	}
	var newSource = source.substring(0, 11) + imgIdentifier + ".png";
	$(this).attr('src', newSource);
};