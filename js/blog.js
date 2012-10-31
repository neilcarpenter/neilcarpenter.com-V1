//@codekit-prepend "blog-plugins.js"

//@codekit-prepend "bits.js"

/*
 * - DEVELOPMENT CODE
 */

$(function() {
	
	// adding spans to section buttons
	$('.buttons a:nth-child(1)').append('<span>?</span>');
	$('.buttons a:nth-child(2)').append('<span>"</span>');
	$('.buttons a:nth-child(3)').append('<span>&</span>');


	// defining container/snaps
	var $container = $('#snaps');
	var $snap = $('.snap');

	// creating/resizing snaps
	var snapsInit = function () {
		// setting .snap/#snaps size
		var viewportWidth = $(window).width();
		var contentWidth = $('#content').width();
		var snapsWidth;
		var snapWidth;
		var masonryCols;
		
		if (viewportWidth > 1023) {
			snapsWidth = (contentWidth * 0.745098039);
			snapWidth = ((snapsWidth - 30) / 3);
			masonryCols = 3; 
		}
		else if (viewportWidth > 768 && viewportWidth < 1024) {
			snapsWidth = (contentWidth * 0.745098039);
			snapWidth = ((snapsWidth - 30) / 2);
			masonryCols = 2; 
		}
		else if (viewportWidth > 400 && viewportWidth < 769) {
			snapsWidth = contentWidth;
			snapWidth = ((snapsWidth - 30) / 2);
			masonryCols = 2; 
		}
		else if (viewportWidth < 400) {
			snapsWidth = contentWidth;
			snapWidth = (snapsWidth - 28);
			masonryCols = 1; 
		}
		
		$container.css('width', snapsWidth);
		$snap.css('width', snapWidth);
			
		// calling masonry
		setTimeout(function () {
			$container.imagesLoaded(function () {
			  $container.masonry({
				itemSelector : '.snap',
				columnWidth: function( containerWidth ) {
					return containerWidth / masonryCols;
				}
			   });
				// fix the height of container
				setTimeout(function () {
					fixContainerHeight();	
				}, 500);
			});
		}, 500); // the delay is to account for spastic transitioned resizing
	
	};
	
	// call
	snapsInit();
	
	// on resize
	$(window).on("debouncedresize", function () {
		
		// call scroll function to reset header if necessary
		scrollDisplayMenu();
		
		// window width var is set on doc ready, then on debounced resize, we test to see if
		// the width has actually changed. If it has, run functions and update width 
		// We only care about the width, and it was lying before
		// in iOS devices, causing the debouncedresize event to continuously fire
		
		widthTesterResized = $(window).width();
		if (widthTester != widthTesterResized) {
			snapsInit();
			setSiteHeight();
			//console.log('WHAT UP');
			widthTester = widthTesterResized;
		}
		
		// get rid of this at some point OBVS
		//console.log('normal debounced resize');
	});
	
	// adding buttons, hiding content
	var closesnapspan = '<span class="close-span">Close</span><span class="expand-span">Expand</span>';
	$('.snap-image').prepend(closesnapspan);
	var closesnapBtn = '<a href="#" class="close-snap">Close</a>';
	$('.snap-content').append(closesnapBtn).hide();
	
	// click event on the snap
	$('.snap-image').click(function(){
		$trigger = $(this).parent();
		// add class to container
		if ($trigger.hasClass('active-snap')) {
			$trigger.removeClass('active-snap');
			$trigger.find('.snap-content').fadeOut(500, function(){
				//this is for the new background thing
				$trigger.removeClass('snap-no-background');
				$container.masonry('reload').removeClass('one-is-active');
				setTimeout(function(){
					fixContainerHeight();	
					$container.removeClass('snaps-no-background');
				}, 500);
			});
		}
		else if ($('.snap').hasClass('active-snap')) {
			var $activesnap = $('.active-snap');
			$activesnap.find('.snap-content').fadeOut(500, function(){
				//this is for the new background thing
				$activesnap.removeClass('snap-no-background');
				$container.masonry('reload').removeClass('one-is-active');
				setTimeout(function(){
					fixContainerHeight();	
					$container.removeClass('snaps-no-background');
				}, 500);
			});
			$('.active-snap').removeClass('active-snap');
		}
		else {
			$container.addClass('one-is-active');
			$trigger.addClass('active-snap');
			//this is for the new background thing
			$container.addClass('snaps-no-background');
			$trigger.addClass('snap-no-background');
			$trigger.find('.snap-content').fadeIn(500, function(){
				$container.masonry('reload');
				setTimeout(function(){
					fixContainerHeight();	
				}, 500);
			});
		}
	});
	// click event on close snap button
	$('.close-snap').click(function(){
		$trigger = $(this).parent().parent();
		$trigger.removeClass('active-snap');
		$trigger.find('.snap-content').fadeOut(500, function(){
			//this is for the new background thing
			$trigger.removeClass('snap-no-background');
			$container.masonry('reload').removeClass('one-is-active');
			setTimeout(function(){
				fixContainerHeight();	
				$container.removeClass('snaps-no-background');
			}, 500);
		});
		return false;
	});
	
	// sorting out the height of container through masonry - 
	// dimensions get messed up due to *{box-sizing}, need to add 20px every time
	fixContainerHeight = function(){
		var currentContainerHeight = parseInt($container.css('height'));
		$container.css('height',(currentContainerHeight + 44));
	};
	
// ******** 
  
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
	
	// SITES
	$('.site-content').hide();
	
	setSiteHeight = function() {
		$siteHeight = $('.site-heading').find('img').height();
		$siteHeightHidden = ($siteHeight * 0.4);
		$('.site-heading').each(function(){
			$this = $(this);
			if ($this.parent().hasClass('active-site')) {
				$this.css('height', $siteHeight);
			}
			else {
				$this.css('height', $siteHeightHidden);
			}
		});
	};
    $(document).imagesLoaded( function(){
		setSiteHeight();
	});	
	
	// main site button clicks
	$('.site-heading').find('.double-hover').click(function(e) {
		e.preventDefault();		
		// GETTERS
		$site = $(this).parent().parent();
		$siteHeading = $site.find('.site-heading');
		$siteContent = $site.find('.site-content');
		
		// Assign the HTML, Body as a variable...
		var $viewport = $('html, body');
		
		// decide top buffer after scrolling animation depending on whether
		// fixed menu will be displaying or not
		var viewportWidth = $(window).width();
		if (viewportWidth > 1023) {
			siteOffsetBuffer = 100;
		}
		else {
			siteOffsetBuffer = 30;
		}
		
		// deciding what to do
		if ($site.hasClass('active-site')) {
			$site.removeClass('active-site');
			$siteHeading.css('height', $siteHeightHidden);
			$siteContent.slideUp(300, 'easeInOutQuad', function() {
				// wait 200ms as CSS transitions are .5s, need to get accurate offset measurement
				setTimeout(function() {
					$siteOffset = $siteHeading.offset();
					$viewport.animate({
						scrollTop: ($siteOffset.top - siteOffsetBuffer)
					}, 500, 'easeInOutQuint');
				}, 200);
			});
		}
		else {
			$activeSite = $('.active-site');
			$activeSite.find('.site-heading').css('height', $siteHeightHidden);
			$activeSite.find('.site-content').slideUp(300, 'easeInOutQuad');
			$activeSite.removeClass('active-site');
			
			$site.addClass('active-site');
			$siteHeading.css('height', $siteHeight);
			$siteContent.slideDown(300, 'easeInOutQuad', function() {
				// wait 200ms as CSS transitions are .5s, need to get accurate offset measurement
				setTimeout(function() {
					$siteOffset = $siteHeading.offset();
					$viewport.animate({
						scrollTop: ($siteOffset.top - siteOffsetBuffer)
					}, 500, 'easeInOutQuint');
				}, 200);
			});
		}
		
		// http://stackoverflow.com/questions/8858994/let-user-scrolling-stop-jquery-animation-of-scrolltop
		// Stop the animation if the user scrolls. Defaults on .stop() should be fine
		$viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
			if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
         	$viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as 
			// a user action, stops the animation, then unbinds the event straight after (optional)
			}
		});
		 		
	});
	
	// close site button click
	$('.close-site').click(function(e) {
		e.preventDefault();
		$site = $(this).parent().parent();
		$siteHeading = $site.find('.site-heading');
	
		// Assign the HTML, Body as a variable...
		var $viewport = $('html, body');
	
		// decide top buffer after scrolling animation depending on whether
		// fixed menu will be displaying or not
		var viewportWidth = $(window).width();
		if (viewportWidth > 1023) {
			siteOffsetBuffer = 100;
		}
		else {
			siteOffsetBuffer = 30;
		}
	
		$site.removeClass('active-site');
		$siteHeading.css('height', $siteHeightHidden);
		$site.find('.site-content').slideUp(300, 'easeInOutQuad', function() {
			// wait 200ms as CSS transitions are .5s, need to get accurate offset measurement
			setTimeout(function() {
				$siteOffset = $siteHeading.offset();
				$viewport.animate({
					scrollTop: ($siteOffset.top - siteOffsetBuffer)
				}, 500, 'easeInOutQuint');
			}, 200);
		});
	
		// http://stackoverflow.com/questions/8858994/let-user-scrolling-stop-jquery-animation-of-scrolltop
		// Stop the animation if the user scrolls. Defaults on .stop() should be fine
		$viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
			if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
         	$viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as 
			// a user action, stops the animation, then unbinds the event straight after (optional)
			}
		});
		
	});
	
	// INITIATING THOUGHT STUFF
	$('#thought-content article').find('p:first').addClass('opening');
	$("pre").addClass("prettyprint");
	prettyPrint();
	// creating thought nav in header
	var thoughtNavHTML = $('.thought-nav-holder').html();
	var currentThoughtTitle = '<h1 class="current-thought"><span>' +($('article').find('h1').text())+ '</span></h1>';
	$('header').append(thoughtNavHTML);
	$('header').find('.thought-nav a:first').after(currentThoughtTitle);
	// doing thought nav width
	var fixedHeaderWidth = function() {
		var viewportWidth = $('#container').width();
		// var projectNavWidth = (viewportWidth * 0.4609375);
		var thoughtNavWidth = (viewportWidth - 442);
		$('header').find('.thought-nav').css('width', thoughtNavWidth);
	};
	// call on dom ready
	fixedHeaderWidth();	
	// call on scroll
	$(window).on("debouncedresize", function() {
		setTimeout(function() {
			fixedHeaderWidth();
		}, 1000);
	});		
	
	// contact/comments form stuff
	$("input, textarea").focus(function() {
		$(this).parent().addClass("input-focus");
	});	
	$("input, textarea").blur(function() {
		$(this).parent().removeClass("input-focus");
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

	// getting largest blog landing paragraph height, then applying to all of them
	var blogLandingDimensions = function() {
		var t=0;
		var t_elem;
		$('.blog-landing .module p').each(function () {
			$this = $(this);
			$this.attr('style','');
			if ( $this.outerHeight() > t ) {
				t_elem=this;
				t=$this.outerHeight();
				}
			});
		$('.blog-landing .module p').height(t+'px');
	};
	// call on load
	blogLandingDimensions();
	// call on resize
	$(window).on("debouncedresize", function() {
		// this is to account for transitioning elements which skew measurements
		setTimeout(function() {
			blogLandingDimensions();
		}, 350);
		minContentHeight();
		// call responsive images
		responsiveImages();
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