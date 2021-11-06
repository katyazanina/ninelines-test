import LocomotiveScroll from 'locomotive-scroll';

function animation() {
	let scroller;

	scroller = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		tablet: {smooth: false},
		smartphone: {smooth: false},
	});

	window.addEventListener('load', () => {
		scroller.update();
	});
	window.addEventListener('resize', () => {
		scroller.update();
	});

	window.scroller = scroller;
}

export {animation};
