/*=======================Sticky Header=============================*/
window.addEventListener('scroll', function () {
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

/*=======================Refresch page when change width or height=============================*/
// $(window).on('resize',function(){location.reload();});

/*=======================Menu for mobile=============================*/
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});

/*=======================Slider for Reviews=============================*/
$('.reviews__slider').slick({
	dots: true,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				centerMode: true,
				variableWidth: true
			}
		},
	]
});

/*=======================Global Map=============================*/
$(function () {
	markers = [
		{ latLng: [-34, 146], name: '1' },
		{ latLng: [36, -84], name: '2' },
		{ latLng: [28, -105], name: '3' },
		{ latLng: [52, -115], name: '4' },
		{ latLng: [67, -130], name: '5' },
		{ latLng: [62, -99], name: '6' },
		{ latLng: [64, -155], name: '7' },
		{ latLng: [3, -72], name: '8' },
		{ latLng: [-12, -42], name: '9' },
		{ latLng: [-16, -53], name: '10' },
		{ latLng: [-42, -69], name: '11' },
		{ latLng: [55, -70], name: '12' },
		{ latLng: [30, 110], name: '13' },
		{ latLng: [65, 127], name: '14' },
		{ latLng: [81, -79], name: '15' },
		{ latLng: [77, -46], name: '16' },
		{ latLng: [70, 79], name: '17' },
		{ latLng: [64, -46], name: '18' },
		{ latLng: [79, -25], name: '19' },
		{ latLng: [62, 5], name: '20' },
		{ latLng: [45, 25], name: '21' },
		{ latLng: [55, 58], name: '22' },
		{ latLng: [50, 105], name: '23' },
		{ latLng: [65, 172], name: '24' },
		{ latLng: [22, 78], name: '25' },
		{ latLng: [13, 30], name: '26' },
		{ latLng: [15, -5], name: '27' },
		{ latLng: [-23, 25], name: '28' },
		{ latLng: [-27, 120], name: '29' },
		{ latLng: [-6, 110], name: '30' }
	],
	cityAreaData = [
		19,
		22,
		21,
		37,
		25,
		25,
		17,
		25,
		17,
		35,
		25,
		25,
		19,
		19,
		19,
		25,
		15,
		15,
		21,
		25,
		34,
		33,
		43,
		25,
		35,
		43,
		25,
		36,
		35,
		20,
	]
	$('#world-map').vectorMap({
		map: 'world_mill_en',
		zoomButtons: false,
		zoomOnScroll:false,
		backgroundColor:'none',
		hoverColor: 'null',
		markers: markers,
		markerStyle: {
			initial: {
				stroke: '#fff',
				"stroke-width": 3,
				fill: '#F53838'
			},
			hover: {
				stroke: '#F53838',
				"stroke-width": 3,
				"fill-opacity": 0.5,
			}
		},
		regionStyle:{
			initial: {
				fill: '#DDE0E4',
			},
			hover: {
				"fill-opacity": 1,
				cursor: 'default'
			},
		},
		series: {
			markers: [{
				attribute: 'r',
				scale: [5, 15],
				values: cityAreaData
			}]
		},
		onRegionTipShow: function (e, el, code) {
         e.preventDefault();
     },
	});
});

function loadData() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 0);
	});
}
/*===================Preloader=========================*/
loadData().then(() => {
	let preloaderEl = document.getElementById('preloader');
	const bodyLock = document.querySelector('body');
	preloaderEl.classList.add('hidden');
	preloaderEl.classList.remove('visible');
	bodyLock.classList.remove('lock');
});
/*=========================Animation====================================*/
loadData().then(() => {
	animOnScroll();
	window.addEventListener('scroll', animOnScroll);
});

/*=========================Animation====================================*/
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}
