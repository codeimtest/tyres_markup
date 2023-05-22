var swiper1 = new Swiper(".testimonials-carousel", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 1.1,
	watchOverflow: true,
  spaceBetween: 16,
	loop: false,
	watchSlidesProgress: true,
	breakpoints: {
		992: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	}
});
var swiper2 = new Swiper(".recently-carousel", {
	navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn",
	},
	slidesPerView: 1.1,
	watchOverflow: true,
  spaceBetween: 16,
	loop: false,
	watchSlidesProgress: true,
	breakpoints: {
		992: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
	}
});
/*Single product carousel*/
var swiper3 = new Swiper(".product-thumbnails", {
	spaceBetween: 6,
	slidesPerView: 6,
	freeMode: true,
	watchSlidesProgress: true,
});
var swiper4 = new Swiper(".product-image-carousel", {
	spaceBetween: 4,
	thumbs: {
		swiper: swiper3,
	},
});
/*end single product*/
$(".toggle-button").click(function(){
	$(".toggle-button").toggleClass('active')
	$('body').toggleClass('lock')
	$('aside').toggleClass('active')
})
$(document).mouseup(function (e) {
	var container = $(".aside-wrap");
	if (container.has(e.target).length === 0){
			$('aside').removeClass('active');
			$('.toggle-button').removeClass('active')
			$('body').removeClass('lock');
	}
});
$('.filter-toggle').click(function(){
	$('.sidebar-filter').toggleClass('active')
})
$('aside .has-child').click(function(){
	$(this).toggleClass('active')
	$('.sub-menu-toggle').toggleClass('active')
})
$(".custom-select").select2({
	tags: "false",
  allowClear: false,
	minimumResultsForSearch: -1,
	language: {
    noResults: function () {
      return "Результатов не найдено";
    }
  },
	closeOnSelect: true,
});

$(".sidebar-filter-list").each(function() {

	var $minHeight = 290;
	//you need the height of the div you are currently iterating on: use this
	if ( $(this).height() > $minHeight) {
	//find the img in this div and hide it
		$(this).addClass('after-bg')
	}
	
	});

