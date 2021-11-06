import header from '../components/header';
import helpers from '../helpers';

/**
* Модуль "Плавный переход к якорю"
*/
const init = () => {
	helpers.$document.on('click.anchor', '.js-to-anchor', (e) => {
		e.preventDefault();
		e.stopPropagation();

		const id = $(e.currentTarget).attr('href');
		const speed = $(e.currentTarget).data('speed') || 500;
		const offset = helpers.$header.css('position') === 'fixed' || helpers.$header.css('position') === 'absolute' ? -helpers.$header.outerHeight(true) : 0;
		document.querySelectorAll('.js-to-anchor.is-active').forEach((element) => {
			element.classList.remove('is-active');
		});
		e.currentTarget.classList.add('is-active');
		header.closeMenu().then(() => {
			$('.js-burger').removeClass('is-active');
			helpers.scrollTo($(id), speed, offset);
		});
	});
	// helpers.$document.on('click.anchor', '.js-to-anchor-desktop', (e) => {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// });
};

const destroy = () => {
	helpers.$document.off('.anchor');
};

export default {
	init,
	destroy,
};
