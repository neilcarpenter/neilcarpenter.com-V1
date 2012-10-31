//@codekit-prepend "labs-plugins.js"

//@codekit-prepend "bits.js"

/*
 * - DEVELOPMENT CODE
 */
 
$(function() {
	// CREATING PROJECT NAV IN HEADER
	var projectNavHTML = $('.project-nav-holder').html();
	var currentProjectTitle = '<h1 class="current-project">' +($('.labs-image').find('h1').text())+ '</h1>';
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
	});

	// equal module heights
	var moduleDimensions = function() {
		var $description = $('.description'),
			$descriptionHeight = $description.outerHeight(),
			$linksSharersNav = $('.links-sharers-labs-nav'),
			$linksSharersNavHeight = $linksSharersNav.outerHeight(),
			$viewportWidth = $(window).width(),
			$sharers = $('.sharers'),
			margin;

		// reset
		$description.attr('style', '');
		$sharers.attr('style', '');
		setTimeout(function() {
			if ($descriptionHeight < $linksSharersNavHeight && $viewportWidth > 905) {
				$description.css('height', ($linksSharersNavHeight + 'px'));
			}
		}, 350);

	};
	// // call on load
	moduleDimensions();
	// call on resize
	$(window).on("debouncedresize", function() {
		// this is to account for transitioning elements which skew measurements
		// setTimeout(function() {
			moduleDimensions();
		// }, 350);
		minContentHeight();
		// call responsive images
		// responsiveImages();
	});
	
	// doing the responsive image thing
	// var responsiveImages = function() {
	// 	// get device pixel ratio
	// 	function getDevicePixelRatio() {
	// 		if(window.devicePixelRatio === undefined) return 1; // No pixel ratio available. Assume 1:1.
	// 		return window.devicePixelRatio;
	// 	}		
	// 	// get viewport width		
	// 	var viewportWidth = $(window).width();
	// 	// go through responsive <img>'s		
	// 	$('.RWD-i').each(function() {
	// 		$this = $(this);
	// 		// small and low res
	// 		if ((viewportWidth < 481 && getDevicePixelRatio() === 1)) {
	// 			responsiveSrc = $this.attr('data-smallsrc');
	// 		}
	// 		// medium and low res or small and high res
	// 		else if ((viewportWidth < 481 && getDevicePixelRatio() > 1) || (viewportWidth > 480 && viewportWidth < 769 && getDevicePixelRatio() === 1)) {
	// 			responsiveSrc = $this.attr('data-mediumsrc');
	// 		}
	// 		// large and low res or medium and high res
	// 		else if ((viewportWidth > 768 && getDevicePixelRatio() === 1)) {
	// 			responsiveSrc = $this.attr('data-largesrc');
	// 		}
	// 		$this.attr('src', responsiveSrc);
	// 	});
	// };
	// // call on load
	// responsiveImages();

});