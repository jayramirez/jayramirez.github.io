function homeAnimation(){
	if($(window).width()<1300){ 
		return false;
	}
	var animationDuration = 1000;
  	var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax ();
  	// var scene = new ScrollMagic.Scene({triggerElement: "#scene1-trigger", duration: 1500, offset: 0})
			// 			.setTween(tween)
			// 			.setPin(".scene-1")
			// 			.addTo(controller);

	// var cardboard1 = TweenMax.from(".cardboard-1", 1, {css: {scaleX: 1.5, scaleY: 1.5,opacity : 0}, ease:Linear.easeNone});
	// var scene = new ScrollMagic.Scene({triggerElement: ".scene-1", duration: 1000})
	// 		    .setTween([cardboard1]).addTo(controller);

	// var scene = new ScrollMagic.Scene({triggerElement: "#scene2-trigger", duration: 2000, offset: 0})
	// 					.setTween(tween)
	// 					.setPin(".scene-2")
	// 					.addTo(controller);

	//var cardboard2 = TweenMax.from(".cardboard-2", 4, {css: {opacity : 0, y : "-=500px"}, ease:Linear.easeNone});
	var gift1 = TweenMax.from(".gift-1", 0.39, {css: { y : "-=700px"}, ease:Linear.easeNone});
	var gift2 = TweenMax.from(".gift-2", 0.3, {css: { y : "-=700px"}, ease:Linear.easeNone});
	var gift3 = TweenMax.from(".gift-3", 0.35, {css: { y : "-=700px"}, ease:Linear.easeNone});
	var gift4 = TweenMax.from(".gift-4", 0.33, {css: { y : "-=700px"}, ease:Linear.easeNone});
	var tag1 = TweenMax.from(".tag-1", 0.22, {css: {opacity : 0, y : "-=300px"}, ease:Linear.easeNone});
	var tag2 = TweenMax.from(".tag-2", 0.23, {css: {opacity : 0, y : "-=300px"}, ease:Linear.easeNone});
	var tag3 = TweenMax.from(".tag-3", 0.24, {css: {opacity : 0, y : "-=300px"}, ease:Linear.easeNone});
	var tag4 = TweenMax.from(".tag-4", 0.25, {css: {opacity : 0, y : "-=300px"}, ease:Linear.easeNone});
	var scene = new ScrollMagic.Scene({triggerElement: "#scene2-trigger", duration: 1000})
			    .setTween([gift1,gift2,gift3,gift4,tag1,tag2,tag3,tag4]).addTo(controller);

	//var cardboard3 = TweenMax.from(".cardboard-3", 4, {css: {opacity : 0, y : "-=1000px"}, ease:Linear.easeNone});
	var earth = TweenMax.from(".obj.earth", 1.5, {css: { y : "+=500px"}, ease:Linear.easeNone});
	var Sun = TweenMax.from(".obj.sun", 1.8, {css: { y : "+=500px", x : "-=1000px"}, ease:Linear.easeNone});
	var moon = TweenMax.from(".obj.moon", 1.2, {css: { y : "-=500px", x : "-=500px"}, ease:Linear.easeNone});
	var satellite = TweenMax.from(".obj.satellite", 2, {css: { y : "-=500px", x : "+=500px"}, ease:Linear.easeNone});
	var paper = TweenMax.from(".obj.paper", 2, {css: { y : "+=100px", x : "+=100px", scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});
	var mug = TweenMax.from(".obj.mug", 2, {css: { y : "+=90px", x : "+=100px", scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});
	var box = TweenMax.from(".obj.box", 2, {css: { y : "+=100px", x : "+=100px", scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});
	var branches = TweenMax.from(".obj.branches", 2, {css: { scaleX: 0.5, scaleY: 0.5}, ease:Linear.easeNone});

	// var scene = new ScrollMagic.Scene({triggerElement: "#scene3-trigger", duration: 2000, offset: 0})
	// 					.setTween(tween)
	// 					.setPin(".scene-3")
	// 					.addTo(controller);

	var scene = new ScrollMagic.Scene({triggerElement: "#scene3-trigger", duration: 1000})
			    .setTween([earth,Sun,moon,satellite,paper,mug,box,branches]).addTo(controller); 

	//var cardboard4 = TweenMax.from(".cardboard-4", 4, {css: {opacity : 0, y : "-=1000px"}, ease:Linear.easeNone});
	var building1 = TweenMax.from(".building-1", 2, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building2 = TweenMax.from(".building-2", 2.4, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building3 = TweenMax.from(".building-3", 2.8, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building4 = TweenMax.from(".building-4", 3.2, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building5 = TweenMax.from(".building-5", 3.6, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building6 = TweenMax.from(".building-6", 4, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});

   //  var scene = new ScrollMagic.Scene({triggerElement: "#scene4-trigger", duration: 2000, offset: 0})
			// .setTween(tween)
			// .setPin(".scene-4")
			// .addTo(controller);  

	var scene = new ScrollMagic.Scene({triggerElement: "#scene4-trigger", duration: 1000})
			    .setTween([ building1, building2, building3, building4, building5, building6]).addTo(controller);  

	
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