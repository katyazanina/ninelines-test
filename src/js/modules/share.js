const purl = location.origin + location.pathname;
const title = window.data.title;
const text = window.data.desc;
const img = purl + window.data.img;
const Share = {
	vk() {
		let url = 'https://vk.com/share.php?url=';
		url += `${encodeURIComponent(purl)}`;
		url += `&title=${encodeURIComponent(title)}`;
		// url += `&description=${encodeURIComponent(text)}`;//Вроде нет этого параметра
		url += `&image=${encodeURIComponent(img)}`;
		url += '&noparse=true';
		Share.popup(url);
	},
	fb() {
		let url = 'https://facebook.com/sharer/sharer.php?u=';
		Share.popup(url);
	},
	tg() {
		let url = 'https://t.me/share/url?url=';
		url += `&text=${encodeURIComponent(title)}, ${encodeURIComponent(text)}`;
		url += `${encodeURIComponent(purl)}`;
		// url += `&image=${encodeURIComponent(img)}`;
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
