jQuery(document).ready(function(){
	jQuery("#lol").hover(function(){
		jQuery("#wow").toggle()
	
	});
});
	// Scroll down start
  $(document).ready(function(){
     $('.low-to-high').click(function(){
		    $('html, body') .animate({
						scrollTop:0
					  },2050);
				});         
		}); 
 


jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
		$("#scrolling").addClass("navbar-fixed-top");
		$("#scrolling").css({"background-color":"black"});
	});
});
//typed js cooking
     ityped.init(document.querySelector("#text-shadow"), {
      showCursor: false,
      strings: [ ' COOKING SERVICE IS AVAILABLE',' CHOOSE YOUR CATEGORY'],
        typespeed:0
    });
//typed js baby
     ityped.init(document.querySelector("#text-shadow1"), {
      showCursor: false,
      strings: [ ' BABY SITTING SERVICE IS AVAILABLE',' CHOOSE YOUR CATEGORY'],
        typespeed:0
    });
     //typed js cleaning
     ityped.init(document.querySelector("#text-shadow2"), {
      showCursor: false,
      strings: [ ' CLEANING SERVICE IS AVAILABLE',' CHOOSE YOUR CATEGORY'],
        typespeed:0
    });
      //typed js plumbing
     ityped.init(document.querySelector("#text-shadow3"), {
      showCursor: false,
      strings: [ ' PLUMBING SERVICE IS AVAILABLE',' CHOOSE YOUR CATEGORY'],
        typespeed:0
    });
      //typed js electrical
     ityped.init(document.querySelector("#text-shadow4"), {
      showCursor: false,
      strings: [ ' ELECTRICAL SERVICE IS AVAILABLE',' CHOOSE YOUR CATEGORY'],
        typespeed:0
    });
      //typed js how it works
     ityped.init(document.querySelector("#text-shadow5"), {
      showCursor: false,
      strings: [ ' HOW IT WORKS  ',' WE ARE HERE'],
        typespeed:0
    });
       //typed js electrical
     ityped.init(document.querySelector("#text-shadow6"), {
      showCursor: false,
      strings: [ ' CONTACT IS AVILABLE 24 HOURS',' WE ARE HERE FOR YOU '],
        typespeed:0
    });
     