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
var swiper5 = new Swiper(".new-products", {
	navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn",
	},
	watchSlidesProgress: true,
	slidesPerView: 1.1,
	watchOverflow: true,
  spaceBetween: 16,
	loop: false,
	watchSlidesProgress: true,
	watchOverflow: false,
	breakpoints: {
		992: {
			slidesPerView: 5,
			spaceBetween: 16,
		},
	}
});
/*end single product*/

/*$(".form-float input,.form-float textarea").on("focus input", function() {
  if ($(this).val() !== "") {
    $(this).siblings("label").addClass("active");
  } else {
    $(this).siblings("label").removeClass("active");
  }
});*/

$(".toggle-button").click(function(){
	$(".toggle-button").toggleClass('active')
	$('body').toggleClass('lock')
	$('aside').toggleClass('active')
})
$('.toggle-button-close').click(function(){
	$(this).parent().parent().parent().parent().parent().removeClass('active')
	$('body').removeClass('lock')
})
$('.close-popup').click(function(e){
	e.preventDefault();
	$(this).parent().parent().parent().parent().removeClass('active');
})
$(document).mouseup(function (e) {
	var container = $(".aside-wrap");
	var container2 = $('.dropdown-items-outer')
	var container3 = $('.popup.active')
	if (container.has(e.target).length === 0){
			$('aside').removeClass('active');
			$('.toggle-button').removeClass('active')
			$('body').removeClass('lock');
	}
	if(container2.has(e.target).length === 0){
		$('.dropdown-items-outer').removeClass('active');
	}
	if(container3.has(e.target).length === 0){
		$('.popup.active').removeClass('active');
	}
});
$('.filter-toggle').click(function(){
	$('.sidebar-filter').toggleClass('active')
})
$('aside .has-child').click(function(){
	$(this).toggleClass('active')
	$('.sub-menu-toggle').toggleClass('active')
})
$('.order-btn').click(function(e){
	e.preventDefault();
	$(this).parent().parent().parent().parent().removeClass('active');
	$('.popup-order').addClass('active')
	$('body').addClass('lock')
})
$('.cart').click(function(){
	$('.popup-cart').addClass('active')
	$('body').addClass('lock')
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
	$('.catalogue-btn').click(function(){
		$('.dropdown-items').toggleClass('active');
	})

	//multirange slider
	let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");
let range = document.querySelector(".slider > .range");
let priceFrom = document.querySelector(".price-from");
let priceTo = document.querySelector(".price-to");

function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(
    parseInt(_this.value),
    parseInt(inputRight.value) - 50
  );
  priceFrom.textContent = `${_this.value * 1000}`;

  let percent = ((_this.value - min) / (max - min)) * 100;

  range.style.left = percent + "%";
}

setLeftValue();

function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 50);
  priceTo.textContent = `${_this.value * 1000}`;

  let percent = ((_this.value - min) / (max - min)) * 100;

  range.style.right = 100 - percent + "%";
}

setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);


inputLeft.addEventListener("touchstart", (e) => {
  inputLeft.classList.add("active");
});
inputLeft.addEventListener("touchend", (e) => {
  inputLeft.classList.remove("active");
});


inputRight.addEventListener("touchstart", (e) => {
  inputRight.classList.add("active");
});
inputRight.addEventListener("touchend", (e) => {
  inputRight.classList.remove("active");
});


$('.sidebar-filter-widget input[type=radio], .sidebar-filter-widget input[type=checkbox], .sidebar-filter-widget select').on('change', function() {
	var selectedValues = '';

	$('.sidebar-filter-widget input[type=radio]:checked, .sidebar-filter-widget input[type=checkbox]:checked,.sidebar-filter-widget select').each(function() {
		selectedValues += '<li>' + $(this).val() + '</li>';
	});

	$('#selectedValues').html('<ul>' + selectedValues + '</ul>');

	$('#selectedValues ul li').on('click', function() {
		var value = $(this).text();

		$(this).remove();
		$('input[value="' + value + '"]').prop('checked', false).prop('selected', false);
	});

});


