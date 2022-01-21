document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('click',function(e){
		if(e.target && e.target.hasAttribute('data-ajax')) {
			e.preventDefault();

			const url = e.target.getAttribute('data-url');
			const modiferClass = e.target.getAttribute('data-modifer-popup-class');

			fetch(url)
				.then(function(response) {
					return response.text();
				})
				.then(function(html) {
					globalPopup
						.options({
							addClassNamePopup: modiferClass ? modiferClass : null,
						})
						.html(html)
						.show();
				});
		}
	});
}, false);