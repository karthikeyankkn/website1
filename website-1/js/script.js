$(document).ready(function(){
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 700) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });
  // testimonial script starts here
  $(function(){
  
	  var testimonials = $(".testimonial-group > li");
	  var testimonial = $("#testimonial");
	  var i = 0;
	  
	  function advTestimonial(){
	    testimonial.html(testimonials[i++].innerHTML);
	    if(i === testimonials.length){i = 0;}
	    setTimeout(advTestimonial, 3000);
	  }
	 
	  advTestimonial();
	  
	});
  // testimonial script end here

  // Side nave open code starts here
  $(".bar-btn").click(function(){
  	 $(".side-nav").toggleClass("right");
  });
  // Side nave open code end here
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});