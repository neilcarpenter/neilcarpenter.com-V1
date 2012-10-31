//@codekit-prepend "home-plugins.js"

//@codekit-prepend "bits.js"

/*
 * - DEVELOPMENT CODE
 */
  
 $(function() {
	
	// this used to be in window.load but trying to make the loading animation smoother
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: ".flex-container",
		slideshow: false,
		randomize: true,
		//slideToStart: 2,
		start: function(){
			// moved this to being a callback to fade in animation, looks better
			//$('.flex-caption.inactive').removeClass('inactive').addClass('active');
		},
		before: function(){
			$('.slides li').removeClass('active-caption');
			//$('.flex-caption.active').removeClass('active').addClass('inactive');
		},
		after: function(){
			$('.flex-active-slide').addClass('active-caption');
			//$('.flex-caption.inactive').removeClass('inactive').addClass('active');
		}
	});
});


$(window).load(function() {
	var $socialModule = $('#social-other .module');

	// CALL THIS ON WINDOW.LOAD SO THAT FONTS ARE ALL APPLIED AND MEASUREMENTS DON'T GET MESSED UP
	var moduleDimensions = function() {
		// this used to be in the resize handler, put it in here and now we can just call this function and it works
		//	**moved back to resize handler
		//$('#social-other .module').attr('style','');
		// viewport width
		var viewportWidth = $(window).width();
		// getting height of recent work & thoughts, applying to about
		var workHeight = $('#latest-work').outerHeight();
		var blogHeight = $('#latest-blog').outerHeight();
		// initially used the combination of two smaller modules, now just use the parent of them
		var latestHeight = $('#latest').outerHeight();
		if (viewportWidth > 1015) {
			// reset inline styles on #latest
			$('#latest').attr('style','');
			setTimeout(function() {
			// set about height as same as adjacent modules' parent
			latestHeight = $('#latest').outerHeight();			
			$('#home-about').css('height', latestHeight);
			}, 350);
		}
		else {
			// reset inline styles on #latest
			$('#latest').attr('style','');
			// getting larger of the two latest and apply height to their parent
			var r=0;
			var r_elem;
			$('#latest .module').each(function () {
				$this = $(this);
				if ( $this.outerHeight() > r ) {
					r_elem=this;
					r=$this.outerHeight();
					}
				});
			$('#latest').height(r+'px');
		}
				
		// getting largest small module, then applying this height to parent div
		var t=0;
		var t_elem;
		$socialModule.each(function () {
			$this = $(this);
			if ( $this.outerHeight() > t ) {
				t_elem=this;
				t=$this.outerHeight();
				}
			});
		$socialModule.height(t+'px');
	}
	// call on load
	$socialModule.attr('style','');
	moduleDimensions();
	// call on resize
	$(window).on("debouncedresize", function() {
		
		// manual width resize detector to get around iOS thinking resize is being fired, see blog.js for more
		widthTesterResized = $(window).width();
		if (widthTester != widthTesterResized) {
			// this seems to have to go here instead of in the dimensions function as
			// FF and Opera seem to be retarded on the matter
			$socialModule.attr('style','');
			// this is to account for transitioning elements which skew measurements
			setTimeout(function() {
				moduleDimensions();
			}, 350);
			minContentHeight();
			responsiveImages();
			//console.log('WHAT UP');
			widthTester = widthTesterResized;
		}
		
		//console.log('normal debounced resize');
	});

	// set min height on content, stops look shit coz too small on certain pages
	var minContentHeight = function() {
		$('#content').css('min-height',(($(window).height()) - 258));	
	};
	// call on load
	minContentHeight();

	// animate/fade/pop stuff in
	// fade content in, then...
	$('#loading').fadeOut(500, function() {
		$(this).remove();
		$('#content').removeClass('loading');
		setTimeout(function() {
			$('.flex-container').removeClass('flex-loading');
			$('.slides li:nth-child(2)').addClass('flex-active-slide');
			setTimeout(function() {
				$('.slides li:nth-child(2)').addClass('active-caption');
				//$('.flex-caption.inactive').removeClass('inactive').addClass('active');
			}, 600);
		}, 200);
	});


	// trying twitter feed with api
	//setTimeout(function(){
	var twitterURL = 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&screen_name=neilcarpenter&count=1000&include_rts=false&exclude_replies=true&callback=?';
	$.getJSON(twitterURL, function(data){
		var tweetText = (data[0].text);

		tweetText = tweetText.replace(/(http\:\/\/[A-Za-z0-9\/\.\?\=\-]*)/g,'<a href="$1" title="View this link" target="_blank">$1</a>');
		tweetText = tweetText.replace(/(https\:\/\/[A-Za-z0-9\/\.\?\=\-]*)/g,'<a href="$1" title="View this link" target="_blank">$1</a>');
		tweetText = tweetText.replace(/@([A-Za-z0-9\/_]*)/g,'<a href="http://twitter.com/$1" title="$1 on Twitter" target="_blank">@$1</a>');
		tweetText = tweetText.replace(/#([A-Za-z0-9\/\.]*)/g,'<a href="http://twitter.com/search?q=$1" title="See results for $1 on Twitter" target="_blank">#$1</a>');
					
		var html = '<span class="tweet">' + tweetText + '</span>';
		
		$('#twitter-fallback').fadeOut(300, function(){
			$(this).remove();
			$('#tweets').append(html);
			$('.tweet').animate({
				opacity: 1,	
			},300, function(){
				$socialModule.attr('style','');
				moduleDimensions();
			});
		});
	});
	//}, 1000);
	
	// adding Flickr script
	//setTimeout(function(){
		var flickrURL = 'http://www.flickr.com/badge_code_v2.gne?count=3&display=latest&size=s&layout=x&source=user&user=58128593%40N08';
var flickrScript = document.createElement( 'script' );
flickrScript.type = 'text/javascript';
flickrScript.src = flickrURL;
document.getElementsByTagName('head')[0].appendChild(flickrScript);
	/*var flickrScript = '<script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=3&display=latest&size=s&layout=x&source=user&user=58128593%40N08"></script>';*/
	$('#flickr-fallback').fadeOut(300, function(){
		$(this).remove();
			$socialModule.attr('style','');
			moduleDimensions();
	});
	//}, 1000);

// courtesy of http://tech.bluesmoon.info/2010/01/handling-documentwrite-in-dynamic.html
(function() {
	BM = window.BM || {};
	
	var _write = document.write;
	var _writeln = document.writeln;
	document.writeln = document.write = function(s) {
		var id='flickr_badge_wrapper';
		BM.onavailable(id, function(el) { el.innerHTML = s; });
		return true;
	};

	BM.onavailable = function(id, fn) {
		var el = document.getElementById(id);
		if(!el) {
			window.setTimeout(function() { BM.onavailable(id, fn); id=fn=null; }, 100);
			return;
		}
		fn(el);
	};

	BM.load = function(s, code) {
		var e = document.createElement('script');
		e.type = 'text/javascript';
		e.src='http://www.flickr.com/badge_code_v2.gne?count=3&display=latest&size=s&layout=x&source=user&user=58128593%40N08';
		if(code) {
			e.onreadystatechange = function() { if(e.readyState == 'complete') code(); };
			e.onload = code;
		}
		document.getElementsByTagName('head')[0].appendChild(e);
	};

})();
	
	// opening flickr images in new window - this is for the badges. Set delay to allow time for script
	// to run an insert them, not ideal, but works most of the time, doesn't matter if it doesn't
	setTimeout(function() {
		$("#flickr_badge_wrapper img").each(function (i) {
			$(this).parent().attr('target', '_blank'); 
		});
	}, 2500);
		

	// trying to get last.fm data
	//setTimeout(function(){
	var lastFMurl = 'http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=nac22&limit=1&api_key=ae218e86a6db1f158bfe38487e977ff0&format=json&callback=?';
	$.getJSON(lastFMurl, function(data){
		var trackURL = (data.lovedtracks.track.url);
		var artistName = (data.lovedtracks.track.artist.name);
		var trackName = (data.lovedtracks.track.name);
		var trackDate = (data.lovedtracks.track.date['#text']);
		// in case there are no images, use default image
		if (typeof (data.lovedtracks.track.image) === "undefined") {
			trackImageURL = 'http://neilcarpenter.com/wp-content/themes/neil-v1/i/lastfm-logo.jpg';
		}
		else {
			trackImageURL = (data.lovedtracks.track.image[2]['#text']);
		}
					
		var html = '<a href="' + trackURL + '" title="' + artistName + ' - ' + trackName + ' on Last.fm" target="_blank">';
		html += '<img src="' + trackImageURL + '" alt="' + artistName + ' - ' + trackName + '"/></a>'; 
		html += '<span class="loved-this">Loved this one:</span><br/>';
		html += '<a href="' + trackURL + '" title="' + artistName + ' - ' + trackName + ' on Last.fm" target="_blank">' + artistName + ' - ' + trackName + '</a><br/>';
		html += '<span class="loved-date">' + trackDate + '</span>';
		
		$('#lastfm-fallback').fadeOut(300, function(){
			$(this).remove();
			$('#loved-track').append(html).hide().fadeIn(300, function(){
				$socialModule.attr('style','');
				moduleDimensions();
			});
		});
	});
	//}, 5000);

	// doing the responsive image thing
	var responsiveImages = function() {
		// get device pixel ratio
		function getDevicePixelRatio() {
			if(window.devicePixelRatio === undefined) return 1; // No pixel ratio available. Assume 1:1.
			return window.devicePixelRatio;
		}		
		// get viewport width		
		var viewportWidth = $(window).width();
		// go through responsive <img>'s		
		$('.RWD-i').each(function() {
			$this = $(this);
			// small and low res
			if ((viewportWidth < 481 && getDevicePixelRatio() === 1)) {
				responsiveSrc = $this.attr('data-smallsrc');
			}
			// medium and low res or small and high res
			else if ((viewportWidth < 481 && getDevicePixelRatio() > 1) || (viewportWidth > 480 && viewportWidth < 769 && getDevicePixelRatio() === 1)) {
				responsiveSrc = $this.attr('data-mediumsrc');
			}
			// large and low res or medium and high res
			else if ((viewportWidth > 768 && getDevicePixelRatio() === 1)) {
				responsiveSrc = $this.attr('data-largesrc');
			}
			$this.attr('src', responsiveSrc);
		});
	};
	// call on load
	responsiveImages();

});