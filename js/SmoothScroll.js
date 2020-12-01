$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) return;
    $('a.active').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({scrollTop: pos}, 1500);
});
