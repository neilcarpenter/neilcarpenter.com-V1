//@codekit-prepend "about-contact-workhome-plugins.js"

//@codekit-prepend "bits.js"

/*
 * - DEVELOPMENT CODE
 */

$(function() {
	
	// do the animation initiation
	$('.start-animation').click(function(e) {
		$this = $(this);
		e.preventDefault();
		$this.addClass('fade');
		// wait til content faded in and then start animating tiles
		setTimeout(function() {
			$this.remove();
			$('.photos').addClass('animate');
		}, 400);
		// wait til animation is done then switch photo in
		setTimeout(function() {
			$('.photos').addClass('animate-done');
		}, 4000);
	});
	
	// contact form stuff
	$("input, textarea").focus(function() {
		$(this).parent().parent().addClass("input-focus");
	});	
	$("input, textarea").blur(function() {
		$(this).parent().parent().removeClass("input-focus");
	});	
	
});

$(window).load(function() {
	// CALL THIS ON WINDOW.LOAD SO THAT FONTS ARE ALL APPLIED AND MEASUREMENTS DON'T GET MESSED UP
	
	if ($('#content').hasClass('about')) {
		// ABOUT
		var moduleDimensions = function() {
			// viewport width
			var viewportWidth = $(window).width();
			// get height
			var topContentHeight = $('.blurb-photos').outerHeight();
			var topImgHeight = $('.photos-holder').outerHeight();
			var topImgMargin = (((topContentHeight - topImgHeight) - 30) * 0.5);
			if (viewportWidth > 768) {
				// set about height of top image container, and top image margins
				$('.blurb-photos').css('height', topContentHeight);
				$('.photos-holder').css('margin-top', topImgMargin).css('margin-bottom', topImgMargin);
			}
			else {
			}
		}
		// call on load
		moduleDimensions();
	}
	else if ($('#content').hasClass('work-home')) {
		// WORK HOME
		var moduleDimensions = function() {
			var t=0;
			var t_elem;
			$('.project p').each(function () {
				$this = $(this);
				if ( $this.outerHeight() > t ) {
					t_elem=this;
					t=$this.outerHeight();
					}
				});
			$('.project p').height(t+'px');
		}
		// call on load
		moduleDimensions();
	}
	else {
		// CONTACT
	}
	// call on resize
	$(window).on("debouncedresize", function() {
		
		// manual width resize detector, see blog.js
		widthTesterResized = $(window).width();
		if (widthTester != widthTesterResized) {
			// this is to account for transitioning elements which skew measurements
			$('.blurb-photos').attr('style','');
			$('.photos-holder').attr('style','');
			$('.project p').attr('style','');
			setTimeout(function() {
				moduleDimensions();
			}, 350);
			minContentHeight();
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
		$('#content').removeClass('loading');
	});

});