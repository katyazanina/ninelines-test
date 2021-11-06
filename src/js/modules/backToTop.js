import helpers from '../helpers';

/**
* Модуль "Возврат наверх"
*/
const init = () => {
	const className = '.js-back-to-top';
	const shownClass = 'is-shown';

	helpers.$document.on('click.backTop', `${className}`, (e) => {
		e.preventDefault();
		helpers.scrollTo($('body'));
	});

	if (window.scroller.options.isMobile || window.scroller.options.isTablet) {
		helpers.$window.on('scroll.backTop', () => {
			const scrollTop = window.pageYOffset;

			if (scrollTop > window.innerHeight) {
				$(className).addClass(shownClass);
			} else {
				$(className).removeClass(shownClass);
			}
		});
	} else {
		window.scroller.on('scroll', (args) => {
			const scrollTop = args.scroll.y;
			if (scrollTop > window.innerHeight) {
				$(className).addClass(shownClass);
			} else {
				$(className).removeClass(shownClass);
			}
		});
	}
};

const destroy = () => {
	helpers.$window.off('.backTop');
	helpers.$document.off('.backTop');
};

export default {
	init,
	destroy,
};
