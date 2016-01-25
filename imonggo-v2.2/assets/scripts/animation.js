
	var animationDuration = 1000;
  	var controller = new ScrollMagic.Controller();

	var tween = new TimelineMax ();
function homeAnimation(){

	if($(window).width()<1300){ 
		return false;
	}
  	var scene1 = new ScrollMagic.Scene({triggerElement: ".scene-1", duration: 500})
		.setTween(tween).setPin(".scene-1").addTo(controller);

	var scene2 = new ScrollMagic.Scene({triggerElement: ".scene-2", duration: 1000 })
		.setTween(tween).setPin(".scene-2").addTo(controller);

	var cardboard2 = TweenMax.from(".cardboard-2", 4, {css: {opacity : 0, y : "-=500px"}, ease:Linear.easeNone});
	var laptop2 = TweenMax.from(".scene-2 .laptop-dummy", 2, {css: { y : "+=400px"}, ease:Linear.easeNone});
	var table2 = TweenMax.from(".scene-2 .table", 2, {css: { y : "+=600px"}, ease:Linear.easeNone});
	var gift1 	= TweenMax.from(".gift-1", 2.2, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var gift2 	= TweenMax.from(".gift-2", 3.2, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var gift3 	= TweenMax.from(".gift-3", 2.5, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var gift4 	= TweenMax.from(".gift-4", 2.8, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var tag1 	= TweenMax.from(".tag-1", 2.22, {css: {y : "-=500px"}, ease:Linear.easeNone});
	var tag2 	= TweenMax.from(".tag-2", 3.23, {css: {y : "-=500px"}, ease:Linear.easeNone});
	var tag3 	= TweenMax.from(".tag-3", 1.24, {css: {y : "-=500px"}, ease:Linear.easeNone});
	var tag4 	= TweenMax.from(".tag-4", 2.25, {css: {y : "-=500px"}, ease:Linear.easeNone});

	var scene2elements = new ScrollMagic.Scene({triggerElement: ".scene-2", duration: 1000})
		.setTween([laptop2,table2,cardboard2,gift1,gift2,gift3,gift4,tag1,tag2,tag3,tag4]).addTo(controller);

	var cardboard3 	= TweenMax.from(".cardboard-3", 2, {css: {opacity : 0, y : "-=1000px"}, ease:Linear.easeNone});
	var laptop3 	= TweenMax.from(".scene-3 .laptop-dummy", 2, {css: { y : "+=400px"}, ease:Linear.easeNone});
	var earth 		= TweenMax.from(".obj.earth", 1.5, {css: { y : "+=500px"}, ease:Linear.easeNone});
	var Sun 		= TweenMax.from(".obj.sun", 1.8, {css: { y : "+=500px", x : "-=1000px"}, ease:Linear.easeNone});
	var moon 		= TweenMax.from(".obj.moon", 1.2, {css: { y : "-=500px", x : "-=500px"}, ease:Linear.easeNone});
	var satellite 	= TweenMax.from(".obj.satellite", 2, {css: { y : "-=500px", x : "+=500px"}, ease:Linear.easeNone});
	var paper 		= TweenMax.from(".obj.paper", 2, {css: { y : "+=100px", x : "+=100px", scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});
	var mug 		= TweenMax.from(".obj.mug", 2, {css: { y : "+=90px", x : "+=100px", scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});
	var box 		= TweenMax.from(".obj.box", 2, {css: { y : "+=100px", x : "-=100px", scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});
	var branches 	= TweenMax.from(".obj.branches", 2, {css: { y : "+=1000px", scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});

	
	var scene3 = new ScrollMagic.Scene({triggerElement: ".scene-3", duration: 1000})
		.setTween(tween).setPin(".scene-3").addTo(controller);

	var scene3elements = new ScrollMagic.Scene({triggerElement: ".scene-3", duration: 1000})
		.setTween([laptop3, cardboard3,earth,Sun,moon,satellite,paper,mug,box,branches]).addTo(controller); 

	var cardboard4 = TweenMax.from(".cardboard-4", 2, {css: {opacity : 0, y : "-=1000px"}, ease:Linear.easeNone});
	var laptop4 = TweenMax.from(".scene-4 .laptop-dummy", 2, {css: { y : "+=500px"}, ease:Linear.easeNone});
	var building1 = TweenMax.from(".building-1", 2, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building2 = TweenMax.from(".building-2", 2.4, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building3 = TweenMax.from(".building-3", 2.8, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building4 = TweenMax.from(".building-4", 3.2, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building5 = TweenMax.from(".building-5", 3.6, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building6 = TweenMax.from(".building-6", 4, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});

   var scene4 = new ScrollMagic.Scene({triggerElement: ".scene-4", duration: 1000})
		.setTween(tween).setPin(".scene-4").addTo(controller);  

	var scene4elements = new ScrollMagic.Scene({triggerElement: ".scene-4", duration: 1000})
		.setTween([ laptop4, cardboard4, building1, building2, building3, building4, building5, building6]).addTo(controller);  

	scene1.offset($('.scene-1').height()/2 );
	scene2.offset($('.scene-1').height()/2 );
	scene3.offset($('.scene-1').height()/2 );
	scene4.offset($('.scene-1').height()/2 );



	var timer = false;
	$(window).resize(function(){
		if(timer){clearTimeout(timer)}
		timer = setTimeout(function(){

				scene1.offset($('.scene-1').height()/2 );
				scene2.offset($('.scene-1').height()/2 );
				scene3.offset($('.scene-1').height()/2 );
				scene4.offset($('.scene-1').height()/2 );

				scene1.refresh()
				scene2.refresh()
				scene3.refresh()
				scene4.refresh()
				scene2elements.refresh()
				scene3elements.refresh()
				scene4elements.refresh()
				$('html,body').animate({scrollTop: 0},1)
			},1000)
	});
}

window.onload = function(){
	homeAnimation();
	$('body').addClass('loaded');

	setTimeout(function(){
		$('body').removeClass('loading');
	},300);
}
$(function(){

  var $window = $(window);
  var scrollTime = 1.2;
  var scrollDistance = 170;

  $window.on("mousewheel DOMMouseScroll", function(event){

    event.preventDefault(); 

    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut,
        overwrite: 5              
      });

  });
});