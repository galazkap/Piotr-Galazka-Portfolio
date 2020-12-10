const contactMe = () => {
	$('#gform').on('submit', function(e) {
		$('#gform').append('<span id="contactText" style="margin-left: 10px; font-size:20px; display:none">Thanks for your email</span>');
		$('#contactText').fadeIn(2000);
		$('#contactText').delay(2000).fadeOut(2000);
	});
};
contactMe();
