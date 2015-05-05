//**//**//**//**//**//**//** jQuery UI Easing plugin //**//**//**//**//**//**//**//**
// Some cool effects can be created with easing functions such as having our DOM elements bounce or even have an elastic look and feel. 

// 	Example:
$('img').click(function() {
		$('img')
		.animate({left: '400px', top: '400px'}, 3000, "easeOutBounce");
	});


// sudden idea :)
	$('img').click(function() {
		$('img')
		.animate({left: '400px', top: '400px'}, 3000, "easeInOutQuad")
		.animate({left: '-=400px', top: '-=400px', opacity: 0}, 3000, "easeInCubic");
	});

