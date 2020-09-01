$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
		{
			breakpoint: 916,
			settings: {
				slidesToShow: 2	
				
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 1
				
			}
		},
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead 
    ]
});
});