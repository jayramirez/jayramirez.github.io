$(function(){
  $('.nav-toggle').click(function(){
    $('.main-nav').addClass('active')
  });
  $('.nav-close').click(function(){
    $('.main-nav').removeClass('active')
  });

  var productCarousel = $('.product-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 600,
    autoplay: true
  })
  $('.page-product .carousel-ctrl').click(function(){
    if($(this).hasClass('next')){
      productCarousel.trigger('next.owl.carousel');
    }
    if($(this).hasClass('prev')){
      productCarousel.trigger('prev.owl.carousel');
    }
  });

  $('.category-carousel').roundabout({
    minOpacity: 0.05,
    minScale: 0.3,
    clickToFocus: false,
    btnNext: ".page-category .next",
    btnPrev: ".page-category .prev",
  })

  $('.category-carousel .item').click(function(){
    if( $(this).hasClass('roundabout-in-focus') ){
      $('a[data-filter='+ $(this).data('category') +']').trigger('click');
      pageScroll('#product-list');
    }
  });

  $('.main-nav a').click(function(){
    $('.main-nav').removeClass('active')
  })

  /*===== page scrolling ======*/
  var currentPage = 'home';
  var pageWaypoint = $('section.page')
  pageWaypoint.waypoint({
    handler: function(direction) {
      if(direction == 'down' ){
        currentPage = this.element.id;
      }
    }
  })

  pageWaypoint.waypoint(function(direction) {
    if (direction === 'up') {
      currentPage = this.element.id;
    }
  }, {
    offset: function() {
     return Waypoint.viewportHeight() /2 - this.element.clientHeight;
    }
  });

  $('.mouse-nav-toggle').click(function(){
    var next = $("#"+currentPage).next('.page');
    console.log(next)
    if(next.length < 1){ return false}
    pageScroll(next);
  })

  $(window).resize(function(){
    pageScroll('#'+currentPage);
  })

  /*====== end page scrolling =======*/

  $('.sound').click(function(){
    var vid = document.getElementById('video');
    if(vid.muted){
      vid.muted = false;
      $('.sound .on, .sound .off').toggleClass('active')
    }
    else{
      vid.muted = true;
      $('.sound .on, .sound .off').toggleClass('active')
    }
  })

  $('.page-product-listing .list').filterizr({
    callbacks: { 
      onFilteringStart: function() {
        pageScroll('#product-list');
      },
      onFilteringEnd: function() {
        
      },
      onShufflingStart: function() { },
      onShufflingEnd: function() { },
      onSortingStart: function() { },
      onSortingEnd: function() {
        
      }
   },
  });
})

function pageScroll(page){
  $('html, body').stop().animate({
    scrollTop: $(page).offset().top
  })
}