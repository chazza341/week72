<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
	$('#tapt').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

});