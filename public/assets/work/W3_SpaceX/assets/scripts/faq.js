$(document).ready(function() {

    $(".faqSlide").click(function() {
        $(".faqInfo", this).slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });

});

// $(document).ready(function(){

// 	$(".btn-slide").click(function(){
// 	  $("#panel").slideToggle("slow");
// 	  $(this).toggleClass("active");
// 	});

// });