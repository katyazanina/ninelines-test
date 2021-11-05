function toRunPreloader() {
	const preloader = document.querySelector('.preloader');
	const icon = preloader.querySelector('.preloader__icon');

	let startTime = new Date().getTime();

	let loadtime = 1000;
	let counter = 0;
	let progress = 0;

	function hidePreloader(time) {
		setTimeout(() => {
			preloader.classList.add('js-hide');
		}, time);
	}
	function moveIcon(speed, destination) {
		icon.style.bottom = `${destination}%`;
		icon.style.left = `${destination}%`;
		icon.style.transition = `all ${speed}ms ease`;
	}

	document.querySelectorAll('img').forEach((img, index, array) => {
		const imagesLength = array.length - 1;

		if (img.complete) {
			++counter;
			if (counter >= imagesLength) {
				progress = 100;

				moveIcon(loadtime, progress);
				hidePreloader(loadtime);
			}
		} else {
			img.addEventListener('load', () => {
				++counter;
				progress = counter / imagesLength * 100;
				loadtime = new Date().getTime() - startTime;

				if (loadtime < 500) {
					loadtime = 500;
				}

				moveIcon(loadtime, progress);

				if (counter >= imagesLength) {
					hidePreloader(loadtime);
				}
			});
		}
	});
}

export {toRunPreloader};
