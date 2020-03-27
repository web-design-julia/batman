$(document).ready(function() {
	console.log('Загрузить');
	let tabsItem = $('.tabs-item');

	tabsItem.on('click',function (event) {
		// Не перебрасывает при нажатии на ссылку в начало сайта
		event.preventDefault();
		// Берет аттрибут href
		let activeContent =$(this).attr('href');
		// Уберает класс visible
		$('.visible').toggleClass('visible');
		// Прикрепляет класс Visible
		$(activeContent).toggleClass('visible');
		$('.tabs-item1').toggleClass('tabs-item1');
		$(this).toggleClass('tabs-item1');




	})
})