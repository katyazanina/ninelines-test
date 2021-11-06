function parallaxFooter() {
	const footer = document.querySelector('.footer');
	const main = document.querySelector('main');
	window.addEventListener('load', () => {

		if (window.scroller.options.isMobile || !window.scroller.options.isTablet) {
			footer.style.position = 'fixed';
			footer.style.bottom = '0';
			main.style.marginBottom = `${document.querySelector('.footer').offsetHeight}px`;
		} else {
			footer.style.position = 'relative';
			footer.style.bottom = 'auto';
			main.style.marginBottom = '0';
		}
	});
}

export {parallaxFooter};
