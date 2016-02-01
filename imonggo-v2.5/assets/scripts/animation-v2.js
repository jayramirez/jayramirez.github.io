function HomeAnimation(){
	var thisClass = this;

	var controller = null;
	var tween = null;

	var pinStage = null;
	var tween1 = null;
	var tween2 = null;
	var tween2Exit = null;
	var tween3 = null;
	var tween3Exit = null;
	var tween4 = null;
	var scene1 = null;
	var scene2elements = null;
	var scene2elementsExit = null;
	var scene3elements = null;
	var scene3elementsExit = null;
	var scene4elements = null;

	this.init = function(){

		if($(window).width()<1200){ 
			$('.home-page').addClass('disabled');
			var timer = false;
			$(window).resize(function(){
				if(timer){clearTimeout(timer)}
				timer = setTimeout(function(){
					if( $(window).width()<1200 ){
						return false;
					}
					$('.home-page').addClass('loading');
					$('.home-page').removeClass('loaded');
					setTimeout(function(){
						window.location.reload();
					},500);
				},1000);
			});
			return false;
		}

		$('body').addClass('animate');
		thisClass.set();
		thisClass.pinStage();
		thisClass.createTween();
		thisClass.createScene();
		thisClass.responsive();
		$('html,body').animate({scrollTop: 0},1);
	}

	this.set = function(){
		controller = new ScrollMagic.Controller();
		tween = new TimelineMax ();
	}

	this.pinStage = function(){
		pinStage = new ScrollMagic.Scene({triggerElement: ".scenes", duration: 11000})
			.setTween(tween).setPin(".scenes").addTo(controller);
	
		pinStage.offset($('.scenes').height()/2 );
	}

	this.createTween = function(){
		tween1 = [];
		tween2 = [];
		tween2Exit = [];
		tween3 = [];
		tween3Exit = [];
		tween4 = [];

		$('.scene-2 .table').remove();
		tween1.push( TweenMax.to(".cardboard-1", 3, {css: { y : "-=1000px"}, ease:Linear.easeNone}) );
		tween1.push( TweenMax.to(".scene-1 .scene-bg", 2, {css: {opacity: 0}, ease:Linear.easeNone}) );
		//tween1.push( TweenMax.to(".scene-1 .table",3.2, {css: {y : "-=1000px"}, ease:Linear.ease}) );
		//tween1.push( TweenMax.to(".laptop",2.5, {css: {y : "-=400px"}, ease:Linear.ease}) );
		
		tween2.push( TweenMax.from(".cardboard-2", 2, {css: { y : "-=500px"}, ease:Linear.easeNone}) );
		//tween2.push( TweenMax.from(".scene-2 .table", 1, {css: { y : "+=500px"}, ease:Linear.ease}) );
		//tween2.push( TweenMax.to(".laptop", 4, {css: { y : "0px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".gift-1", 2.2, {css: { y : "-=1000px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".gift-2", 3.2, {css: { y : "-=1000px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".gift-3", 2.5, {css: { y : "-=1000px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".gift-4", 2.8, {css: { y : "-=1000px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".tag-1", 2.22, {css: {y : "-=500px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".tag-2", 3.23, {css: {y : "-=500px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".tag-3", 1.24, {css: {y : "-=500px"}, ease:Linear.easeNone}) );
		tween2.push( TweenMax.from(".tag-4", 2.25, {css: {y : "-=500px"}, ease:Linear.easeNone}) );

		tween2Exit.push( TweenMax.to(".cardboard-2", 4, {css: { y : "-=500px"}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".scene-2 .scene-bg", 3, {css: { opacity: 0}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".scene-2 .table", 3, {css: { y : "+=500px"}, ease:Linear.ease}) );
		//tween2Exit.push(  TweenMax.to(".laptop", 3, {css: {y : "-=200px"}, ease:Linear.ease}) );
		tween2Exit.push( TweenMax.to(".scene-1 .table",3.2, {css: {y : "+=500px"}, ease:Linear.ease}) );
		tween2Exit.push( TweenMax.to(".gift-1", 2.2, {css: { y : "-=600px",x : "-=800px", rotation: "95deg", scale: 2}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".gift-2", 3.2, {css: { y : "-=1000px",x : "+=500px", rotation: "-195deg", scale: 0.5}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".gift-3", 2.5, {css: { y : "-=1000px",x : "-=200px", rotation: "-95deg", scale: 0.1}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".gift-4", 2.8, {css: { y : "-=900px",x : "+=50px", rotation: "125deg", scale: 0.1}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".tag-1", 2.22, {css: {y : "-=500px"}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".tag-2", 3.23, {css: {y : "-=500px"}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".tag-3", 1.24, {css: {y : "-=500px"}, ease:Linear.easeNone}) );
		tween2Exit.push( TweenMax.to(".tag-4", 2.25, {css: {y : "-=500px"}, ease:Linear.easeNone}) );
		
		tween3.push( TweenMax.from(".cardboard-3", 2, {css: { y : "-=500px"}, ease:Linear.easeNone}) );
		//tween3.push( TweenMax.to(".laptop", 3, {css: {y : "0px"}, ease:Linear.ease}) );
		tween3.push( TweenMax.from(".obj.earth", 1.5, {css: { y : "+=500px"}, ease:Linear.ease}) );
		tween3.push( TweenMax.from(".obj.sun", 1.8, {css: { y : "+=500px", x : "-=1000px"}, ease:Linear.ease}) );
		tween3.push( TweenMax.from(".obj.moon", 1.2, {css: { y : "-=500px", x : "-=500px", rotation: "245deg"}, ease:Linear.ease}) );
		tween3.push( TweenMax.from(".obj.satellite", 2, {css: { y : "-=200px", x : "+=1500px"}, ease:Linear.ease}) );
		tween3.push( TweenMax.from(".obj.paper", 2, {css: { y : "+=500px", x : "+=100px", scale: 0.5}, ease:Linear.easeNone}) );
		tween3.push( TweenMax.from(".obj.mug", 2, {css: { y : "+=300px", x : "+=100px", scale: 0.5}, ease:Linear.easeNone}) );
		tween3.push( TweenMax.from(".obj.box", 2, {css: { y : "+=500px", x : "-=100px", scale: 0.5}, ease:Linear.easeNone}) );
		tween3.push( TweenMax.from(".obj.branches", 2, {css: { y : "+=1000px", scale: 0.5}, ease:Linear.easeNone}) );
		
		tween3Exit.push( TweenMax.to(".scene-3 .scene-bg", 3, {css: {opacity : 0}, ease:Linear.easeNone, delay: 4}) );
		tween3Exit.push( TweenMax.to(".cardboard-3", 4, {css: {opacity : 0, y : "-=1000px"}, ease:Linear.easeNone}) );
		//tween3Exit.push( TweenMax.to(".laptop", 5, {css: {y : "-=200px"}, ease:Linear.ease}) );
		tween3Exit.push( TweenMax.to(".obj.earth", 3.2, {css: { y : "+=500px"}, ease:Linear.ease}) );
		tween3Exit.push( TweenMax.to(".obj.moon", 5, {css: { y : "-=200px", x:"-=200px", opacity: 0, rotation: "145deg"},  ease:Linear.ease}) );
		tween3Exit.push( TweenMax.to(".obj.satellite", 3, {css: { y : "-=1000px"}, ease:Linear.ease}) );
		tween3Exit.push( TweenMax.to(".obj.paper", 3.5, {css: { y : "+=500px", x:"-=300px"}, ease:Linear.easeNone}) );
		tween3Exit.push( TweenMax.to(".obj.mug", 3.1, {css: { y : "+=500px", x:"-=250px"}, ease:Linear.easeNone}) );
		tween3Exit.push( TweenMax.to(".obj.box", 2.8, {css: { y : "+=500px", x: "+=300px"}, ease:Linear.easeNone}) );
		tween3Exit.push( TweenMax.to(".obj.branches", 3.1, {css: { y : "+=1000px", scale: 0.5}, ease:Linear.easeNone}) );
		tween3Exit.push( TweenMax.from(".scene-3 .obj.window", 5, {css: { opacity: 0}, ease:Linear.easeNone}) );
		tween3Exit.push( TweenMax.from(".scene-3 .obj.table-02", 5, {css: { y: "+=500px"}, ease:Linear.easeNone}) );
		tween3Exit.push( TweenMax.to(".obj.sun", 5, {css: { y : "-=100px", x:"+=100px", opacity: 0.8, scale: 0.8},ease:Linear.ease}) );

		tween4.push( TweenMax.to(".obj.sun", 3, {css: { y : "-=300px", x:"+=300px", opacity: 0},ease:Linear.ease}) );
		//tween4.push( TweenMax.to(".laptop", 3, {css: {y : "0px"}, ease:Linear.ease}) );
		tween4.push( TweenMax.from(".cardboard-4", 2, {css: { y : "-=500px"}, ease:Linear.easeNone}) );
		tween4.push( TweenMax.from(".building-1", 2, {css: { y : "+=500px", scale: 0.8}, ease:Linear.easeNone}) );
		tween4.push( TweenMax.from(".building-2", 2.4, {css: { y : "+=500px", scale: 0.8}, ease:Linear.easeNone}) );
		tween4.push( TweenMax.from(".building-3", 2.8, {css: { y : "+=500px", scale: 0.8}, ease:Linear.easeNone}) );
		tween4.push( TweenMax.from(".building-4", 3.2, {css: { y : "+=500px", scale: 0.8}, ease:Linear.easeNone}) );
		tween4.push( TweenMax.from(".building-5", 3.6, {css: { y : "+=500px", scale: 0.8}, ease:Linear.easeNone}) );
		tween4.push( TweenMax.from(".building-6", 4, {css: { y : "+=500px", scale: 0.8}, ease:Linear.easeNone}) );
	}
	
	this.createScene = function(){
		scene1 = new ScrollMagic.Scene({triggerElement: ".trigger-1", duration: 1800})
		.setTween(tween1).addTo(controller);

		scene2elements = new ScrollMagic.Scene({triggerElement: ".trigger-2", duration: 1800})
			.setTween(tween2).addTo(controller);

		scene2elementsExit = new ScrollMagic.Scene({triggerElement: ".trigger-2-exit", duration: 1800})
			.setTween(tween2Exit).addTo(controller);

		scene3elements = new ScrollMagic.Scene({triggerElement: ".trigger-3", duration: 1800})
			.setTween(tween3).addTo(controller); 

		scene3elementsExit = new ScrollMagic.Scene({triggerElement: ".trigger-3-exit", duration: 1800})
			.setTween(tween3Exit).addTo(controller); 	

		scene4elements = new ScrollMagic.Scene({triggerElement: ".trigger-4", duration: 1800})
			.setTween(tween4).addTo(controller); 

	}

	this.responsive = function(){
		var timer = false;
		$(window).resize(function(){
			if(timer){clearTimeout(timer)}
			timer = setTimeout(function(){
			
				pinStage.removePin(true);

				if($(window).width()<1200){ 

					if( $('.home-page').hasClass('disabled') ){ return false; }
					
					controller.destroy(true);
					controller = null;

					scene1 = null;
					scene2elements = null;
					scene2elementsExit = null;
					scene3elements = null;
					scene3elementsExit = null;
					scene4elements = null;

					tween1 = null;
					tween2 = null;
					tween2Exit = null;
					tween3 = null;
					tween3Exit = null;
					tween4 = null;

					$('.obj, .scene').attr('style','');
					$('body').addClass('disabled');
					$('body').removeClass('animate');
					$('html,body').animate({scrollTop: 0},1);
					return false;
				}

				if( $('body').hasClass('disabled') ){
					$('body').removeClass('loaded');
					$('body').addClass('loading');
					setTimeout(function(){
						window.location.reload();
					},500);
				}
				
				setTimeout(function(){
					thisClass.pinStage();
					scene1.refresh();
					scene2elements.refresh();
					scene2elementsExit.refresh();
					scene3elements.refresh();
					scene3elementsExit.refresh();
					scene4elements.refresh();
				},1100)

				$('html,body').animate({scrollTop: 0},1);
			},500);
		});
	}
}

window.onload = function(){
	if(animate){
		animation = new HomeAnimation();
		animation.init();
	}
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