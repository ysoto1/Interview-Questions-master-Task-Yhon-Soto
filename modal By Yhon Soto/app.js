
$("#toggle").click(function(){
    var $target = $('.target'),
        $toggle = $(this);

    $target.slideToggle( 500, function () {
        $toggle.text(($target.is(':visible') ? 'Hide' : '') + ' Read about The Cassini Mission');
    });
});

(document).ready(function(){  
  $('#mydiv').load('index.html', function() {
      $(this).show();
    });
});