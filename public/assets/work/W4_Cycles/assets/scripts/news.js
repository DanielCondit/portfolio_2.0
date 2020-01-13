$('html').ready(function() {

	$.ajax({
		url: 'https://newsapi.org/v2/top-headlines?' +
			'sources=techcrunch&' +
			// 'country=us&' +
			'apiKey=12e00dd9fae74c59a4616f469d9b4b96',
		method: "GET",
		dataType: 'json',
		error: function() {
			console.log("News API Broken");
		},
		success: function(data) {
			processData(data);
		}
	});

	function processData(data) {
		//var articleItems = [];

		for (var i = 0; i < data.articles.length; i++) {
			var author = data.articles[i].author;
			var title = data.articles[i].title;
			var image = data.articles[i].urlToImage;
			var description = data.articles[i].description;
			var artUrl = data.articles[i].url;

			var $titleTicker = $("<li>" + "<a href=" + artUrl + '> <p class="titleStyle">' + title + '</p> <p class="authorStyle">Author: ' + author + "</a> <br> <img src=" + image + 'alt="News"/>' + "<p>" + description + "</p></li>");

			$(".ticker").append($titleTicker);

			console.log(artUrl);

			$('.ticker').cycle({
				fx: 'scrollHorz',
				speed: 5000,
				timeout: 10000
			});
		}
	}

});
