
function testimonialFunc() {
	$(".testim-wrap .testim-inner .show-box a").click(function(){
		$(".testim-wrap .testim-box").removeClass("active");
		$(this).parent().parent().parent().parent().addClass("active");
		return false;
	});
}

$(document).ready(function() {
	testimonialFunc();
	
	$(".explore-arrow").click(function(){
		//$("html, body").animate({ scrollTop: window.innerHeight }, 1500);
		// var getSndSceneScroll = $(".scene-2").offset().top + (window.innerHeight * 4.5) + (window.innerHeight * .60);
		// $("html, body").animate({ scrollTop: getSndSceneScroll }, 1500);
		// return false;
	});

  

    $("[data-toggle=popover]").popover();
    $('.homecarousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1334,
          settings: {
            arrows: false,
          }
        }
      ]
    });
	
	$(function(){
		$('#header-wrap nav.main-nav ul').slicknav({
			prependTo:'.top-nav',
			init: function() {
				$(".top-nav > a").each(function(){
					$('.slicknav_nav').append("<li><a href='"+$(this).attr('href')+"' role='menuitem' tabindex='0'>"+$(this).text()+"</a></li>");
				})
			}
		});
	});
});



$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop(true).animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
// ------------------------- >>>
// HASH EXTERNAL LINK
// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1);



    // your current click function
    $('a[href*=#]:not([href=#])').on('click', function(e) {
        e.preventDefault();
        $('html, body').stop(true).animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });

    // *only* if we have anchor on the url
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').stop(true).animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1000, 'swing');
    }

});


$(document).keydown(function(e) {
	var addY = (6200 - ($(window).height() * 2)) / 32;
	var y = $(window).scrollTop();
    switch(e.which) {
        case 38: window.scrollTo(0, y-addY);
        break;

        case 40: window.scrollTo(0, y+addY);
        break;

        default: return;
    }
});


// ------------------------- >>>
// HEADER STICKY
  /* $(document).ready(function(){
    $("#header-wrap").sticky({topSpacing:0});
  }); */

 // HASH INTERNAL PAGE SMOOTH SCROLL 
