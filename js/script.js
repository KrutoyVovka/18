/*
$(function () {
	let header = $('.header');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			header.addClass('header_fixed');
		} else {
			header.removeClass('header_fixed');
		}
	});
});

$(function () {
	let header = $('.header');
	let hederHeight = header.height(); // вычисляем высоту шапки

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			header.addClass('header_fixed');
			$('body').css({
				'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
			});
		} else {
			header.removeClass('header_fixed');
			$('body').css({
				'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
			})
		}
	});
});
*/

let m = document.querySelector("main"),
	h = document.querySelector("header"),
	hHeight;
/*
вычислим высоту хедера и добавим это значение в свойстве padding-top в элемент main
*/
/*
function setTopPadding() {
	hHeight = h.offsetHeight;
	m.style.paddingTop = hHeight + "px";
}
*/
/*
вытягиваем количество пикселей, на которое был прокручен документ;
если число больше y px, добавляем класс к хедеру.
 */
function onScroll() {
	window.addEventListener("scroll", callbackFunc);
	function callbackFunc() {
		let y = window.pageYOffset;
		if (y > 1) {
			h.classList.add("header_fixed");
		} else {
			h.classList.remove("header_fixed");
		}
	}
}
/*
функцию мы вызываем в двух случаях:
после загрузки страницы;
при изменении размера окна браузера.
 */
window.onload = function () {
	// setTopPadding();
	onScroll();
};
window.onresize = function () {
	// setTopPadding();
};

// Инициализируем Swiper
let myImageSlider = new Swiper('.slider-about', {

	// Стрелки
	navigation: {
		nextEl: '.swiper-button-nextt',
		// nextEl: '',
		prevEl: '.swiper-button-prevv'
		// prevEl: ''
	},
	// Количество слайдов для показа
	slidesPerView: 2,

	// Отступ между слайдами
	spaceBetween: 35,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Стартовый слайд.
	initialSlide: 0,

	// Скорость
	speed: 800,

	// Курсор для перетаскивания
	grabCursor: true,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 2, // как slidesPerView:

	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 0,
		},
		480: {
			slidesPerView: 1.5,
			spaceBetween: 15,
		},
		769: {
			slidesPerView: 2,
		}
	},

}
);
