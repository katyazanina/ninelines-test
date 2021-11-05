function parallaxFooter() {
	window.addEventListener('load', () => {
		document.querySelector('main').style.marginBottom = `${document.querySelector('.footer').offsetHeight}px`;
	});
}

export {parallaxFooter};
