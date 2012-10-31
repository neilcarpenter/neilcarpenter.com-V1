//@codekit-prepend "work-plugins.js"

//@codekit-prepend "bits.js"

/*
 * - DEVELOPMENT CODE
 */
 
$(function() {

	// making the not so skinny sliderz
	$('#not-so-skinny h3').each(function() {
        var title = $(this).text();
		var a = $('<a/>').attr('href', '#').attr('title', ('Show/hide ' + title));
        // WHEN ALL HAD SAME ICONS
		$(this).wrap(a)/*.append('<span>x</span>')*/;
	});
	
	
	// hide content etc on load/resize - ADVANCED VERSION - sliders display automatically on smaller screens
	// this not ideal as can't close sliders on phone - when clicked a resize is triggered which calls function again...
	// alternative is to just call once on dom ready, prob the best option...
	function sliderInit() {
		var viewportWidth = $(window).width();
		if (viewportWidth > 500) {
			$('.slider').hide();
			$('.slider p').css('opacity', 0);
			$('.slider-holder > a').removeClass('open');
			// but show the first
			$('.scope .slider').show();
			$('.scope .slider p').css('opacity', 1);
			$('.scope > a').addClass('open');
		}
		else {
			$('.slider').show();
			$('.slider p').css('opacity', 1);
			$('.slider-holder > a').addClass('open');
		}
	}
	// call on load
	sliderInit();
	/*
	// call on resize
	$(window).bind('resize', function(){
		sliderInit();
	});
	*/
	/*
	// hide content etc on load - SIMPLE VERSION - just hides stuff
	$('.slider').hide();
	$('.slider p').css('opacity', 0);
	*/
	
	// ADD SPANS FOR ICONS IN SLIDER HEADERS
	$('.scope h3').append('<span>1</span>');
	$('.responsibilities h3').append('<span>2</span>');
	$('.technical h3').append('<span>3</span>');
	$('.outcome h3').append('<span>4</span>');
	// slider GO
	$('.slider-holder > a').click(function() {
		var $this = $(this);
		var $parent = $this.parent();
		var $slider = $parent.find('.slider');
		var $sliderP = $slider.find('p');
		var $span = $this.find('span');
		
		if ($this.hasClass('open')) {
			$slider.slideUp(350, 'easeInQuad');
			$sliderP.animate({
    			opacity: 0,
  			}, 350, 'easeInQuad');
			/* THIS IS FOR CHANGING CONTENT OF SPAN (ICON)
			$span.fadeOut(175,function(){ 
					$(this).text('x').fadeIn(175); 
			});	
			*/
			$this.removeClass('open');
		}
		else {
			$slider.slideDown(350, 'easeInQuad');
			$sliderP.animate({
    			opacity: 1,
  			}, 350, 'easeInQuad');
			/* THIS IS FOR CHANGING CONTENT OF SPAN (ICON)
			$span.fadeOut(175,function(){ 
					$(this).text('o').fadeIn(175); 
			});
			*/	
			$this.addClass('open');
		}
		return false;
	});
	
	// fire first #main-image link when slideshow button clicked
	//$("#slideshow").click(function(){
    //	$("#gallery li:first a").click(); 
    //	return false;
	//});
	// just add this class to slideshow items, could do this in html but naaah
	$('#main-images a').addClass('slideshow');
	
	// SMARTPHONE DEMO
	$('.smartphone-demo').click(function(e) {
		e.preventDefault();
		
		var $this = $(this);
		var url = $this.attr('href');
		var screenUrl = url.replace(/^http:\/\//, '');
		var siteTitle = $this.attr('title');
		
		// add class to HTML, sets overflow to hidden and applies webkit filters
		$('html').addClass('demo-on');
		// call main nav function as firefox jumps to top of page after adding class to <html>
		scrollDisplayMenu();
		// append loader and overlay
		$('<div id="demo-bg" class="loading"><div id="loading" class="demo"><span class="outer"><span class="inner"></span></span>&nbsp;Loading</div><a href="#" id="close-demo">Close</a></div>').hide().prependTo('body').fadeIn(500,'easeInQuint');

		// load the big image and then call the iframe/animations
		$('<img />')
			.attr('src', 'http://neilcarpenter.com/wp-content/themes/neil-v1/i/iphone-no-hand.png')
			.load(function(){
				// this delay is to allow the BG to fade in smoothly
				setTimeout(function() {
					// smartphone html sans iframe
					var html = '<div id="smartphone"><img src="http://neilcarpenter.com/wp-content/themes/neil-v1/i/iphone-no-hand.png" alt="iPhone" class="iphone-img" />';
					html += '<span class="screen-title">' + siteTitle + '</span>'
					html += '<span class="screen-url-bg"></span>'
					html += '<span class="screen-loading"></span>'
					html += '<span class="screen-url">' + screenUrl + '</span>'
					html += '<span class="screen-bg"></span></div>';
					// iframe html
					var iframe = '<iframe src="' + url + '" width="332" height="376"></iframe>';
					// move the close button to the right, append the smartphone html
					$('#demo-bg').removeClass('loading').append(html);
					// append iframe, hide with CSS
					$('#smartphone').append(iframe);
					// remove loader
					$('#loading').fadeOut(500, function(){
						$(this).remove();
					});
					// animate phone in, then do animations
					$('#smartphone').animate({
						top: '-=110%'
					}, 800, 'easeInOutBack', function () {
						// appending above now, this was messing animation up
						//$('#smartphone').append(iframe);
						$('#smartphone').addClass('ready');
						setTimeout(function() {
							$('#smartphone').addClass('load-complete');
						}, 2100);
					});
				}, 1000);
			});
	
		$('#close-demo').click(function(e) {
			e.preventDefault();
			$('#demo-bg').addClass('demo-closing');
			// delay for iframe to scale to zero
			setTimeout(function() {
				// remove iframe then animate to be smoother - NO
				// don't remove, was messing animation up, making it jump
				// instead, hide it then animate
				//$('#smartphone iframe').remove();
				$('#smartphone').addClass('hide-iframe');
				$('#smartphone').animate({
					top: '+=110%'
					// opacity: 0
				}, 800, 'easeInOutBack')
				// delay to allow smooth fade out
				setTimeout(function() {
					$('#demo-bg').fadeOut(500, 'easeInQuint', function(){
						$(this).remove();
					});
					$('html').removeClass('demo-on');
				}, 500);
			}, 300);
		});
	});

	// TABLET DEMO - lame to have to repeat all this stuff, couldn't get the animation to work properly
	$('.tablet-demo').click(function(e) {
		e.preventDefault();
		
		var $this = $(this);
		var url = $this.attr('href');
		var screenUrl = url.replace(/^http:\/\//, '');
		var siteTitle = $this.attr('title');
		
		// add class to HTML, sets overflow to hidden and applies webkit filters
		$('html').addClass('demo-on');
		// call main nav function as firefox jumps to top of page after adding class to <html>
		scrollDisplayMenu();
		// append loader and overlay
		$('<div id="demo-bg" class="loading"><div id="loading" class="demo"><span class="outer"><span class="inner"></span></span>&nbsp;Loading</div><a href="#" id="close-demo">Close</a></div>').hide().prependTo('body').fadeIn(500,'easeInQuint');

		// load the big image and then call the iframe/animations
		$('<img />')
			.attr('src', 'http://neilcarpenter.com/wp-content/themes/neil-v1/i/ipad-no-hand.png')
			.load(function(){
				// this delay is to allow the BG to fade in smoothly
				setTimeout(function() {
					// smartphone html sans iframe
					var html = '<div id="tablet"><img src="http://neilcarpenter.com/wp-content/themes/neil-v1/i/ipad-no-hand.png" alt="iPad" class="ipad-img" />';
					html += '<span class="screen-title">' + siteTitle + '</span>'
					html += '<span class="screen-url-bg"></span>'
					html += '<span class="screen-loading"></span>'
					html += '<span class="screen-url">' + screenUrl + '</span>'
					html += '<span class="screen-bg"></span></div>';
					// iframe html
					var iframe = '<iframe src="' + url + '" width="752" height="925"></iframe>';
					// move the close button to the right, append the smartphone html
					$('#demo-bg').removeClass('loading').append(html);
					// append iframe, hide with CSS
					$('#tablet').append(iframe);
					// remove loader
					$('#loading').fadeOut(500, function(){
						$(this).remove();
					});
					// animate phone in, then do animations
					$('#tablet').animate({
						top: '-=125%'
					}, 800, 'easeInOutBack', function () {
						// appending above now, this was messing animation up
						//$('#tablet').append(iframe);
						$('#tablet').addClass('ready');
						setTimeout(function() {
							$('#tablet').addClass('load-complete');
						}, 2100);
					});
				}, 1000);
			});
	
		$('#close-demo').click(function(e) {
			e.preventDefault();
			$('#demo-bg').addClass('demo-closing');
			// delay for iframe to scale to zero
			setTimeout(function() {
				// remove iframe then animate to be smoother - NO
				// don't remove, was messing animation up, making it jump
				// instead, hide it then animate
				//$('#tablet iframe').remove();
				$('#tablet').addClass('hide-iframe');
				$('#tablet').animate({
					top: '+=125%'
					// opacity: 0
				}, 800, 'easeInOutBack')
				// delay to allow smooth fade out
				setTimeout(function() {
					$('#demo-bg').fadeOut(500, 'easeInQuint', function(){
						$(this).remove();
					});
					$('html').removeClass('demo-on');
				}, 500);
			}, 300);
		});
	});
		
	// CREATING PROJECT NAV IN HEADER
	var projectNavHTML = $('.project-nav-holder').html();
	var currentProjectTitle = '<h1 class="current-project">' +($('#skinny').find('h1').text())+ '</h1>';
	$('header').append(projectNavHTML);
	$('header').find('.project-nav a:first').after(currentProjectTitle);


	// DOING PROJECT NAV WIDTH
	var fixedHeaderWidth = function() {
		var viewportWidth = $('#container').width();
		// var projectNavWidth = (viewportWidth * 0.4609375);
		var projectNavWidth = (viewportWidth - 442);
		$('header').find('.project-nav').css('width', projectNavWidth);
	};
	// call on dom ready
	fixedHeaderWidth();	
	// call on resize
	$(window).on("debouncedresize", function() {
	
		// call scroll function to reset header if necessary
		scrollDisplayMenu();
		
		setTimeout(function() {
			fixedHeaderWidth();
		}, 1000);
	});		

	// fading in the sharing buttons... using http://css-tricks.com/thinking-async/
	$('.sharers').click(function() {
		// css to make cursor normal
		$(this).css('cursor','default');
		// fade holding image out
		$('.sharers-image').fadeOut(300);
		// run the async loading scripts
		(function(doc, script) {
			var js,
				fjs = doc.getElementsByTagName(script)[0],
				add = function(url, id) {
					if (doc.getElementById(id)) {return;}
					js = doc.createElement(script);
					js.src = url;
					id && (js.id = id);
					fjs.parentNode.insertBefore(js, fjs);
				};	
			// Google Analytics
			//add(('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js', 'ga');
			// Google+ button
			add('https://apis.google.com/js/plusone.js');
			// Facebook SDK
			add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=307678452602794', 'facebook-jssdk');
			// Twitter SDK
			add('//platform.twitter.com/widgets.js', 'twitter-wjs');
		}(document, 'script'));
		// pause, and then fade the buttons in
		setTimeout(function() {
			$('.sharers-buttons').animate({opacity: 1},300);
		}, 600);
	});
			
  });



$(window).load(function() {
	// CALL THIS ON WINDOW.LOAD SO THAT FONTS ARE ALL APPLIED AND MEASUREMENTS DON'T GET MESSED UP
	
	var moduleDimensions = function() {
		// viewport width
		var viewportWidth = $(window).width();
		// get height
		var topContentHeight = $('#top-content').outerHeight();
		var topImgHeight = $('#top-content img').outerHeight();
		var topImgMargin = (((topContentHeight - topImgHeight) - 30) * 0.5);
		if (viewportWidth > 768) {
			// set about height of top image container, and top image margins
			$('#top-content').css('height', topContentHeight);
			$('#top-image img').css('margin-top', topImgMargin).css('margin-bottom', topImgMargin);
		}
		else {
		}
	}
	// call on load
	moduleDimensions();
	// call on resize
	$(window).on("debouncedresize", function() {
		
		// manual width resize detector, see blog.js
		widthTesterResized = $(window).width();
		if (widthTester != widthTesterResized) {
			// this is to account for transitioning elements which skew measurements
			$('#top-content').attr('style','');
			$('#top-image img').attr('style','');
			setTimeout(function() {
				moduleDimensions();
			}, 350);
			// also call the min content height
			minContentHeight();
			// call responsive images
			responsiveImages();
			//console.log('WHAT UP');
			widthTester = widthTesterResized;
		}
		
		// get rid of this at some point OBVS
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
		// this causes the pattern bar transition
		$('.pattern').removeClass('pattern-closed');
		// allow timeout for pattern animation to complete
		
		if (($(window).width()) > 768) {
			setTimeout(function() {		
				$('#content').removeClass('loading');
			}, 550);
		}
		else {
			$('#content').removeClass('loading');
		}
	});


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

// Call PHOTOSWIPE
(function(window, PhotoSwipe){
	document.addEventListener('DOMContentLoaded', function(){
		var
			options = {},
			instance = PhotoSwipe.attach( window.document.querySelectorAll('.slideshow'), options );
	}, false);
}(window, window.Code.PhotoSwipe));