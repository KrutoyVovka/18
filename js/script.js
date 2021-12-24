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