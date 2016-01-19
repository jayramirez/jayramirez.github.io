var animationPeak = 979;

function setSectionHeight() {
	return;
	$("#container .scene").each(function(){
		if($(document).width() > animationPeak && $("body").hasClass("home-page")) {
			var setHeight = window.innerHeight * 8;
			$(this).css("height",setHeight+"px");
			
			var setHeight = window.innerHeight * 1;
			$(".scene-1").css("height",setHeight+"px");
		}
		else {
			var setHeight = screen.height;
			$(this).css("height",setHeight+"px");
		}
	});
	if($(document).width() > animationPeak && $("body").hasClass("home-page")) {
		$("#container .scene .scene-bg, #container .scene .obj").each(function(){
			var setHeight = window.innerHeight;
			$(this).css("height",setHeight+"px");
		});
	}
	else {
		$("#container .scene .scene-bg, #container .scene .obj").each(function(){
			var setHeight = screen.height;
			$(this).css("height",setHeight+"px");
		});
	}
}

function animateObject(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt) {
	if(fromTop == 1) {
		var getMin = $(window).scrollTop() - startPixelAnimate;
		var getMax = endPixelAnimate - startPixelAnimate;
		var getPercent = 100 - ((getMin / getMax) * 100);
		var getTopResult = ((-$(targetObj).height()) * getPercent) / 100;
		$(targetObj).css("position","fixed");
		$(targetObj).css("bottom","auto");
		$(targetObj).css("top",(getTopResult)+"px");
	}
	if(fromBottom == 1) {
		var getMin = $(window).scrollTop() - startPixelAnimate;
		var getMax = endPixelAnimate - startPixelAnimate;
		var getPercent = 100 - ((getMin / getMax) * 100);
		var getTopResult = (($(targetObj).height()) * getPercent) / 100;
		$(targetObj).css("position","fixed");
		$(targetObj).css("bottom","auto");
		$(targetObj).css("top",(getTopResult)+"px");
	}
	else if(fromTop == 0) {
		var getMin = $(window).scrollTop() - startPixelAnimate;
		var getMax = endPixelAnimate - startPixelAnimate;
		var getPercent = 100 - ((getMin / getMax) * 100);
		var getTopResult = -((($(targetObj).height() / 2) * getPercent) / 100);
		$(targetObj).css("position","fixed");
		$(targetObj).css("bottom","auto");
		$(targetObj).css("top",getTopResult+"px");
	}
}

function startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt) {
	var sceneArray = new Array();
	$(".scene").each(function(a){
		var getOffsetTop = $(this).offset().top;
		var getSceneHeight = $(this).height();
		if(($(window).scrollTop() + window.innerHeight) >= getOffsetTop && $(window).scrollTop() <= getOffsetTop + getSceneHeight && ($(window).scrollTop() + window.innerHeight) <= $(".scene-4").offset().top + $(".scene-4").height()) {
			sceneArray.push(a + 1);
		}
	});
	
	if(sceneArray.length == 1) {
		$(".scene-"+sceneArray[0]).find(".scene-bg, .fixed").css("position","fixed");
		$(".scene-"+sceneArray[0]).find(".scene-bg, .fixed").css("top","0px");
		$(".scene-"+sceneArray[0]).find(".scene-bg, .fixed").css("bottom","auto");
	}
	else if(sceneArray.length == 2) {
		$(".scene-"+sceneArray[0]).find(".scene-bg, .fixed").css("position","absolute");
		$(".scene-"+sceneArray[0]).find(".scene-bg, .fixed").css("bottom","0px");
		$(".scene-"+sceneArray[0]).find(".scene-bg, .fixed").css("top","auto");
		$(".scene-"+sceneArray[1]).find(".scene-bg, .fixed").css("position","absolute");
		$(".scene-"+sceneArray[1]).find(".scene-bg, .fixed").css("top","0px");
		$(".scene-"+sceneArray[1]).find(".scene-bg, .fixed").css("bottom","auto");
	}
	
	if($(window).scrollTop() >= startPixelAnimate && $(window).scrollTop() <= endPixelAnimate) {
		animateObject(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
	}
	else {
		if(fromTop == 1) {
			if($(window).scrollTop() <= startPixelAnimate) {
				var setTop = $(targetObj).css("position","fixed");
				$(targetObj).css("bottom","auto");
				$(targetObj).css("top",-$(targetObj).height()+"px");
			}
			else if($(window).scrollTop() >= endPixelAnimate) {
				if(sceneArray.length == 1) {
					$(targetObj).css("position","fixed");
					$(targetObj).css("bottom","auto");
					$(targetObj).css("top","0px");
				}
			}
		}
		else if(fromBottom == 1) {
			if($(window).scrollTop() <= startPixelAnimate) {
				$(targetObj).css("position","fixed");
				$(targetObj).css("bottom","auto");
				$(targetObj).css("top",$(window).height()+"px");
			}
			else if($(window).scrollTop() >= endPixelAnimate) {
				$(targetObj).css("position","fixed");
				$(targetObj).css("bottom","auto");
				$(targetObj).css("top","0px");
			}
		}
		else {
			if($(window).scrollTop() <= startPixelAnimate) {
				$(targetObj).css("top",$(prevScene).find(".scene-bg").offset().top+"px");
			}
			else if($(window).scrollTop() >= endPixelAnimate) {
				$(targetObj).css("position","fixed");
				$(targetObj).css("bottom","auto");
				$(targetObj).css("top","0px");
			}
		}
	}
}

function initAnimationScene() {
	return;
	if(($(window).scrollTop()) >= $(".scene-1").offset().top && ($(window).scrollTop() + window.innerHeight) <= ($(".scene-2").offset().top + $(".scene-2").height()) && $(document).width() > animationPeak && $("body").hasClass("home-page")) {
		$(".obj").css("position","absolute");
		$(".obj").css("top","auto");
		$(".obj").css("bottom","0px");
		
		var targetObj = ".laptop";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top - (window.innerHeight / 2);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2);
		var moveFromPos = $(prevScene).find(".scene-bg").offset().top;
		var moveToPos = $(targetScene).offset().top + (window.innerHeight * 2);
		var fromTop = 0;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".gift-3";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .20);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.5) + (window.innerHeight * .30);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".gift-1";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .30);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.5) + (window.innerHeight * .80);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".gift-2";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .20);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.5) + (window.innerHeight * .10);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".gift-4";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .80);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.5) + (window.innerHeight * .55);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".tag-1";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .25);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3.5) + (window.innerHeight * .50);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".tag-2";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .25);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 4) + (window.innerHeight * .50);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".tag-3";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .25);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 4.2) + (window.innerHeight * .50);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".tag-4";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .25);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 4) + (window.innerHeight * .20);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".cardboard-2";
		var prevScene = ".scene.scene-1";
		var targetScene = ".scene.scene-2";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.8);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 4.5) + (window.innerHeight * .60);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
	}
	else if(($(window).scrollTop()) >= $(".scene-2").offset().top && ($(window).scrollTop() + window.innerHeight) <= ($(".scene-3").offset().top + $(".scene-3").height())  && $(document).width() > animationPeak && $("body").hasClass("home-page")) {
		$(".obj").css("position","absolute");
		$(".obj").css("top","auto");
		$(".obj").css("bottom","0px");
		
		var targetObj = ".laptop";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top - (window.innerHeight / 2);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2);
		var moveFromPos = $(prevScene).find(".scene-bg").offset().top;
		var moveToPos = $(targetScene).offset().top + (window.innerHeight * 2);
		var fromTop = 0;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".earth";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .25);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".branches";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .25);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".satellite";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .20);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.2);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".moon";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .65);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.5);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".sun";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .40);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3.2);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".paper";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .45);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3.3);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".mug";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .47);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3.5);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".box";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .38);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3.8);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".cardboard-3";
		var prevScene = ".scene.scene-2";
		var targetScene = ".scene.scene-3";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.8);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 4.5) + (window.innerHeight * .60);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
	}
	else if(($(window).scrollTop()) >= $(".scene-3").offset().top && ($(window).scrollTop() + window.innerHeight) <= ($(".scene-4").offset().top + $(".scene-4").height())  && $(document).width() > animationPeak && $("body").hasClass("home-page")) {
		$(".obj").css("position","absolute");
		$(".obj").css("top","auto");
		$(".obj").css("bottom","0px");
	
		var targetObj = ".laptop";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top - (window.innerHeight / 2);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2);
		var moveFromPos = $(prevScene).find(".scene-bg").offset().top;
		var moveToPos = $(targetScene).offset().top + (window.innerHeight * 2);
		var fromTop = 0;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".building-1";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .25);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".building-2";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .3);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.5);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".building-3";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .3);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".building-4";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * .32);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3.2);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".building-5";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 1.35);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 3.6);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".building-6";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 1.85);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 4.5);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 0;
		var fromBottom = 1;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
		
		var targetObj = ".cardboard-4";
		var prevScene = ".scene.scene-3";
		var targetScene = ".scene.scene-4";
		var startPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 2.8);
		var endPixelAnimate = $(targetScene).offset().top + (window.innerHeight * 4.5) + (window.innerHeight * .60);
		var moveFromPos = 0;
		var moveToPos = $(targetScene).find(".scene-bg").offset().top;
		var fromTop = 1;
		var fromBottom = 0;
		var fromRight = 0;
		var fromLeft = 0;
		var animateOn = 0;
		var fadeIt = 0;
		startAnimateOnPrevPosition(targetObj, targetScene, prevScene, startPixelAnimate, endPixelAnimate, moveFromPos, moveToPos, fromTop, fromBottom, fromRight, fromLeft, animateOn, fadeIt);
	}
	else {
		$(".scene").find(".scene-bg, .fixed, .obj").css("position","absolute");
		$(".scene").find(".scene-bg, .fixed, .obj").css("bottom","0px");
		$(".scene").find(".scene-bg, .fixed, .obj").css("top","auto");
		$(".laptop").css("position","absolute");
		$(".laptop").css("bottom","0px");
		$(".laptop").css("top",$(".scene-4").find(".scene-bg").offset().top+"px");
	}
}

function testimonialFunc() {
	$(".testim-wrap .testim-inner .show-box a").click(function(){
		$(".testim-wrap .testim-box").removeClass("active");
		$(this).parent().parent().parent().parent().addClass("active");
		return false;
	});
}

$(document).ready(function() {
	setSectionHeight();
	initAnimationScene();
	testimonialFunc();
	
	$(".explore-arrow").click(function(){
		$("html, body").animate({ scrollTop: window.innerHeight }, 1500);
		// var getSndSceneScroll = $(".scene-2").offset().top + (window.innerHeight * 4.5) + (window.innerHeight * .60);
		// $("html, body").animate({ scrollTop: getSndSceneScroll }, 1500);
		// return false;
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

$(window).load(function() {
	setSectionHeight();
	initAnimationScene();
});

$(window).resize(function() {
	setSectionHeight();
	initAnimationScene();
});

$(window).scroll(function() {
	initAnimationScene();
});