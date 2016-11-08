$(function(){


	$('header nav a').click(function(e){
		e.preventDefault();
		var el = $(this);
		var page = el.attr('href');

		el.siblings().removeClass('active');
		el.addClass('active');
		$('html, body').animate({scrollTop: $(page).offset().top})

	});

	$('.portfolio li').click(function(){
		$('.lytebox').fadeIn();
		$('.lytebox img.portfolio-img').attr('src', $(this).data('url'));
		$('.lytebox .popup').css({
			width : $('.lytebox img.portfolio-img').width(),
			height : $('.lytebox img.portfolio-img').height()
		})
	});
	$('.lytebox .close').click(function(){
		$('.lytebox').fadeOut(function(){
			$('.lytebox .popup').css({
				width :'',
				height : ''
			})
		});
		
	});

	$('.page').waypoint(function(direction) {
	 	if(direction=='down'){
	 		var el = $(this);
			var page = el.attr('id');
			$('header nav a[href="#'+page+'"]').addClass('active').siblings().removeClass('active')
			window.location.hash = '#!'+page;
	 	}
	},{ offset: 200})
	.waypoint(function(direction) {
	 	if(direction=='up'){
	 		var el = $(this);
			var page = el.attr('id');
			$('header nav a[href="#'+page+'"]').addClass('active').siblings().removeClass('active')
			window.location.hash = '#!'+page;
	 	}
	}, { offset: 'bottom-in-view'})


	$('#about').waypoint(function(){
		var delay = 0;
		$('ul.what-i-do li').each(function(){
			var el = $(this);
			setTimeout(function(){
				el.addClass('animated fadeIn');
			},delay);
			delay = delay+300;
		})
	},{offset : 200});


	$("#experience").waypoint(function(){
		var e=300;
		$("#experience .badge").addClass("animated fadeIn");
		$("ul.exp li").each(function(){
			var t=$(this);
			setTimeout(function(){
				t.addClass("animated fadeInLeft")},e);
				e=e+300}
		)},{offset:200});

	$("#skills").waypoint(function(){
		var e=0;
		$(".skillset .score").each(function(){
			var t=$(this);
			var n=$("span",t).html()*10;
			$("i",t).css({width:n+"%","transition-delay":e+"ms"});
			e=e+100}
		)},{offset:200});
});

var cursorX ;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}

function minHeight(){
	$('.page').css({ minHeight :$(window).height() })
}

function parallax(){
	var winx = $(window).width();

	if(winx <= 1024 ){
		return;
	}
	var winy = $(window).height();
	var posx = (cursorX - (winx/2)) / -50;
	var posy = (cursorY - (winy/2)) / -50;

	
	$('.parallax').css({
		backgroundPosition: posx +'px ' + posy + 'px'
	})
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();




// (function animloop(){
//   requestAnimFrame(animloop);
//   parallax();
//   minHeight();
// })();

$(window).resize(function(){
	$.waypoints('refresh');
})
