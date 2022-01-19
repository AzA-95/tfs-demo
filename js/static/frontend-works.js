document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('click',function(e){
		if(e.target && e.target.hasAttribute('data-ajax')) {
			e.preventDefault();

			const url = e.target.getAttribute('data-url');

			fetch(url)
				.then(function(response) {
					return response.text();
				})
				.then(function(html) {
					globalPopup.html(html).show(function() {
						globalFuncInitInputMask();
					});
				});
		}
	});
}, false);