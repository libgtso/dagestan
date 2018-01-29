$(document).ready(function() {
	showHide();
	moreNews();
	checkMoreNewsButton();
});

function showHide() {
    $(document).on('click', '.sh-btn', function(e){
        e.preventDefault();

        var block = $(this).closest('.sh-block');
        block.toggleClass('sh-hidden');
    });
}

function moreNews() {
	$(document).on('click', '.show-more-news', function(e) {
		e.preventDefault();

		var container = $('.new-blocks');

		$.ajax({
			url: '../src/blocks/newsblock/example.html',
			cache: false,
			type: 'POST',
			data: {offset:offset},
			success: function(html){
				$(container).append(html);
			}
		});
		checkMoreNewsButton();		
	});
}

function checkMoreNewsButton() {
	var news = $(".news-item");
	var offset = news.length;

	if(news.length <= offset){
		news.length = offset;
		$('.show-more-news').hide();
	}
}