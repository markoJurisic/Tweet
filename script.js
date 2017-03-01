$(document).ready(function () {

	var $src = $('#input'),
		$dst = $('#output'),
		$tweetButton = $('#tweetButton');


	$src.on('input', function () {
		$dst.html($src.html() ? '&ldquo;' + $src.html() + '&rdquo;' : '');
		$dst.prop({
			scrollTop: $dst.prop("scrollHeight")
		});
	});


	$tweetButton.on('click', function () {
		var message = $src.html(),
			tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(message);

		window.open(tweetUrl);
	});

});