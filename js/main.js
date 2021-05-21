// Меню бургер
$(document).ready(function() {
	$('.nav__icon').click(function(event) {
		$('.nav__icon,.nav__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.nav__body').click(function(){
    $('.nav__icon, .nav__body').removeClass('active');
    $('body').removeClass('lock');
});




//Спойлеры

$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});



//медленный скролл
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


//banner__slider
$(document).ready(function(){
	$('.slider__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed:350,
    infinite: false,
    autoplaySpeed: 5000,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
	
	});
});




//Дата в форме
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;