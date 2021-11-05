const purl = location.origin + location.pathname;
const Share = {
	vk() {
		let url = 'https://vk.com/share.php?url=';
		url += `url=${encodeURIComponent(purl)}`;
		// url += `&title=${encodeURIComponent(ptitle)}`;
		// url += `&description=${encodeURIComponent(text)}`;
		// url += `&image=${encodeURIComponent(pimg)}`;
		url += '&noparse=true';
		Share.popup(url);
	},
	fb() {
		let url = 'https://facebook.com/sharer/sharer.php?u=';
		// url += `&p[title]=${encodeURIComponent(ptitle)}`;
		// url += `&p[summary]=${encodeURIComponent(text)}`;
		url += `&p[url]=${encodeURIComponent(purl)}`;
		// url += `&p[images][0]=${encodeURIComponent(pimg)}`;
		Share.popup(url);
	},
	tg() {
		let url = 'https://t.me/share/url?url=';
		// url += `&p[title]=${encodeURIComponent(ptitle)}`;
		// url += `&p[summary]=${encodeURIComponent(text)}`;
		url += `&p[url]=${encodeURIComponent(purl)}`;
		// url += `&p[images][0]=${encodeURIComponent(pimg)}`;
		Share.popup(url);
	},
	popup(url) {
		window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
	},
	init() {
		document.querySelectorAll('.hero__sharelink').forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				Share[link.dataset.share]();
			});
		});
	},
};

export {Share};
