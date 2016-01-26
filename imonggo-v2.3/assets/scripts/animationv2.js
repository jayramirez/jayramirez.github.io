var controller = new ScrollMagic.Controller();
var tween = new TimelineMax ();

function homeAnimation(){
	if($(window).width()<1300){ 
		return false;
	}

	var pinScene = new ScrollMagic.Scene({triggerElement: ".scenes", duration: 13000})
		.setTween(tween).setPin(".scenes").addTo(controller);

	var cardboard1 =  TweenMax.to(".cardboard-1", 3, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var scenebg1 =  TweenMax.to(".scene-1 .scene-bg", 1, {css: {opacity: 0}, ease:Linear.easeNone});
	var table1 =  TweenMax.to(".scene-1 .table",2, {css: {y : "+=100px"}, ease:Linear.ease});
	var laptop1 =  TweenMax.to(".laptop",2.5, {css: {y : "-=200px"}, ease:Linear.ease});

	var exitHomeScene = new ScrollMagic.Scene({triggerElement: ".trigger-1", duration: 1800})
		.setTween([cardboard1,scenebg1,table1,laptop1]).addTo(controller);
	
	pinScene.offset($('.scenes').height()/2 );

	var cardboard2 = TweenMax.from(".cardboard-2", 2, {css: { y : "-=500px"}, ease:Linear.easeNone});
	var table2 = TweenMax.to(".scene-1 .table", 1, {css: { y : "0px"}, ease:Linear.ease});
	var laptop2 = TweenMax.to(".laptop", 4, {css: { y : "0px"}, ease:Linear.ease});
	var gift1 	= TweenMax.from(".gift-1", 2.2, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var gift2 	= TweenMax.from(".gift-2", 3.2, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var gift3 	= TweenMax.from(".gift-3", 2.5, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var gift4 	= TweenMax.from(".gift-4", 2.8, {css: { y : "-=1000px"}, ease:Linear.easeNone});
	var tag1 	= TweenMax.from(".tag-1", 2.22, {css: {y : "-=500px"}, ease:Linear.easeNone});
	var tag2 	= TweenMax.from(".tag-2", 3.23, {css: {y : "-=500px"}, ease:Linear.easeNone});
	var tag3 	= TweenMax.from(".tag-3", 1.24, {css: {y : "-=500px"}, ease:Linear.easeNone});
	var tag4 	= TweenMax.from(".tag-4", 2.25, {css: {y : "-=500px"}, ease:Linear.easeNone});

	var scene2elements = new ScrollMagic.Scene({triggerElement: ".trigger-2", duration: 1800})
		.setTween([laptop2,table2,cardboard2,gift1,gift2,gift3,gift4,tag1,tag2,tag3,tag4]).addTo(controller);

	var cardboard2exit = TweenMax.to(".cardboard-2", 4, {css: { y : "-=500px"}, ease:Linear.easeNone});
	var bg2exit 	= TweenMax.to(".scene-2 .scene-bg", 2, {css: {opacity : 0}, ease:Linear.easeNone});
	var table2exit = TweenMax.to(".scene-1 .table", 3, {css: { y : "+=500px"}, ease:Linear.ease});
	var laptop2exit =  TweenMax.to(".laptop", 3, {css: {y : "-=200px"}, ease:Linear.ease});
	var gift1exit 	= TweenMax.to(".gift-1", 2.2, {css: { y : "-=600px",x : "-=800px", rotation: "95deg", scale: 2}, ease:Linear.easeNone});
	var gift2exit 	= TweenMax.to(".gift-2", 3.2, {css: { y : "-=1000px",x : "+=500px", rotation: "-195deg", scale: 0.5}, ease:Linear.easeNone});
	var gift3exit 	= TweenMax.to(".gift-3", 2.5, {css: { y : "-=1000px",x : "-=200px", rotation: "-95deg", scale: 0.1}, ease:Linear.easeNone});
	var gift4exit 	= TweenMax.to(".gift-4", 2.8, {css: { y : "-=900px",x : "+=50px", rotation: "125deg", scale: 0.1}, ease:Linear.easeNone});
	var tag1exit 	= TweenMax.to(".tag-1", 2.22, {css: {y : "+=1000px", scale: 0.01}, ease:Linear.easeNone});
	var tag2exit 	= TweenMax.to(".tag-2", 3.23, {css: {y : "+=1000px", scale: 0.01}, ease:Linear.easeNone});
	var tag3exit 	= TweenMax.to(".tag-3", 1.24, {css: {y : "+=1000px", scale: 0.01}, ease:Linear.easeNone});
	var tag4exit 	= TweenMax.to(".tag-4", 2.25, {css: {y : "+=1000px", scale: 0.01}, ease:Linear.easeNone});

	var scene2elementsExit = new ScrollMagic.Scene({triggerElement: ".trigger-2-exit", duration: 1800})
		.setTween([bg2exit,laptop2exit,table2exit,cardboard2exit,gift1exit,gift2exit,gift3exit,gift4exit,tag1exit,tag2exit,tag3exit,tag4exit]).addTo(controller);

	var cardboard3 	= TweenMax.from(".cardboard-3", 2, {css: { y : "-=500px"}, ease:Linear.easeNone});
	var laptop3 =  TweenMax.to(".laptop", 3, {css: {y : "0px"}, ease:Linear.ease});
	var earth 		= TweenMax.from(".obj.earth", 1.5, {css: { y : "+=500px"}, ease:Linear.ease});
	var Sun 		= TweenMax.from(".obj.sun", 1.8, {css: { y : "+=500px", x : "-=1000px"}, ease:Linear.ease});
	var moon 		= TweenMax.from(".obj.moon", 1.2, {css: { y : "-=500px", x : "-=500px", rotation: "245deg"}, ease:Linear.ease});
	var satellite 	= TweenMax.from(".obj.satellite", 2, {css: { y : "-=200px", x : "+=1500px"}, ease:Linear.ease});
	var paper 		= TweenMax.from(".obj.paper", 2, {css: { y : "+=500px", x : "+=100px", scale: 0.5}, ease:Linear.easeNone});
	var mug 		= TweenMax.from(".obj.mug", 2, {css: { y : "+=300px", x : "+=100px", scale: 0.5}, ease:Linear.easeNone});
	var box 		= TweenMax.from(".obj.box", 2, {css: { y : "+=500px", x : "-=100px", scale: 0.5}, ease:Linear.easeNone});
	var branches 	= TweenMax.from(".obj.branches", 2, {css: { y : "+=1000px", scale: 0.5}, ease:Linear.easeNone});

	
	var scene3elements = new ScrollMagic.Scene({triggerElement: ".trigger-3", duration: 1800})
		.setTween([laptop3, cardboard3,earth,Sun,moon,satellite,paper,mug,box,branches]).addTo(controller); 


	var bg3Exit 		= TweenMax.to(".scene-3 .scene-bg", 3, {css: {opacity : 0}, ease:Linear.easeNone, delay: 4});
	var cardboard3Exit 	= TweenMax.to(".cardboard-3", 2, {css: {opacity : 0, y : "-=1000px"}, ease:Linear.easeNone});
	var laptop3Exit 	=  TweenMax.to(".laptop", 3, {css: {y : "-=200px"}, ease:Linear.ease});
	var earthExit 		= TweenMax.to(".obj.earth", 1.5, {css: { y : "+=500px"}, ease:Linear.ease});
	var SunExit 		= TweenMax.to(".obj.sun", 1.8, {css: { y : "-=1000px", x:"+=300px"}, ease:Linear.ease});
	var moonExit 		= TweenMax.to(".obj.moon", 1.2, {css: { y : "-=400px", x:"-=300px", rotation: "245deg"}, ease:Linear.ease});
	var satelliteExit 	= TweenMax.to(".obj.satellite", 2, {css: { y : "-=1000px"}, ease:Linear.ease});
	var paperExit 		= TweenMax.to(".obj.paper", 2, {css: { y : "-=1000px", x:"-=300px"}, ease:Linear.easeNone});
	var mugExit 		= TweenMax.to(".obj.mug", 2, {css: { y : "-=1000px", x:"-=250px"}, ease:Linear.easeNone});
	var boxExit 		= TweenMax.to(".obj.box", 2, {css: { y : "-=1000px", x: "+=300px"}, ease:Linear.easeNone});
	var branchesExit 	= TweenMax.to(".obj.branches", 2, {css: { y : "+=1000px", scale: 0.5}, ease:Linear.easeNone});

	
	var scene3elementsExit = new ScrollMagic.Scene({triggerElement: ".trigger-3-exit", duration: 1800})
		.setTween([bg3Exit,laptop3Exit, cardboard3Exit,earthExit,SunExit,moonExit,satelliteExit,paperExit,mugExit,boxExit,branchesExit]).addTo(controller); 

	var cardboard4 = TweenMax.from(".cardboard-4", 2, {css: {opacity : 0, y : "-=500px"}, ease:Linear.easeNone});
	var laptop4 =  TweenMax.to(".laptop", 3, {css: {y : "0px"}, ease:Linear.ease});
	var building1 = TweenMax.from(".building-1", 2, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building2 = TweenMax.from(".building-2", 2.4, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building3 = TweenMax.from(".building-3", 2.8, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building4 = TweenMax.from(".building-4", 3.2, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building5 = TweenMax.from(".building-5", 3.6, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});
	var building6 = TweenMax.from(".building-6", 4, {css: {opacity : 0, y : "+=500px"}, ease:Linear.easeNone});

	var scene4elements = new ScrollMagic.Scene({triggerElement: ".trigger-4", duration: 1800})
		.setTween([ laptop4, cardboard4, building1, building2, building3, building4, building5, building6]).addTo(controller); 

	var timer = false;
	$(window).resize(function(){
		if(timer){clearTimeout(timer)}
		timer = setTimeout(function(){
			pinScene.offset($('.scenes').height()/2 );

			pinScene.refresh();
			exitHomeScene.refresh();
			scene2elements.refresh();
			scene2elementsExit.refresh();
			scene3elements.refresh();
			scene3elementsExit.refresh();
			scene4elements.refresh();

			$('html,body').animate({scrollTop: 0},1)
		},300)
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