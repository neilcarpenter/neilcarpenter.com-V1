/*
 * EASING
 * http://jqueryui.com/demos/effect/easing.html
 */
$.extend($.easing,
{
    /*def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert($.easing.default);
        return $.easing[$.easing.def](x, t, b, c, d);
    },*/
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    /*easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },*/
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    /*easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },*/
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    /*easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },*/
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    /*easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },*/
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    /*easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }*/
});


/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

var $event = $.event,
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(jQuery);

 // global to be used throughout
  var widthTester, scrollDisplayMenu;
  
  // work JS
  $(function() {

    // testing because width is spazzing out on ipads, use resize to see if width has changed
    widthTester = $(window).width();
    
    /* THIS IS GONE FOR NOW, REMOVING LOAD ANIMATIONS ON NAV/LOGO
    // setting logo margin top for animation, could possibly be done in CSS on .closed class to remove FOUS 
    //$('#logo').css('margin-top', -230);
    */

    
    // define these
    var $logo = $('#logo a');
    var $about = $('#main-nav ul li:nth-child(1) a');
    var $work = $('#main-nav ul li:nth-child(2) a');
    var $labs = $('#main-nav ul li:nth-child(3) a');
    var $blog = $('#main-nav ul li:nth-child(4) a');
    var $contact = $('#main-nav ul li:nth-child(5) a');
    
    // popping stuff in - NOW moved to window.load
    // this is going through all items with class 'closed' and removing this class, delay of 100ms between each iteration
    /*$('.closed').each(function(i) {
        var $this = $(this);
        setTimeout(function() {
            $this.removeClass('closed');
        }, 300*i);
    });*/   
    
    // doing a loading animator
    $('#container').prepend('<div id="loading"><span class="outer"><span class="inner"></span></span>&nbsp;Loading<div class="loading-slow">Seems to be taking ages to load... Click <a href="#" id="refresh">here</a> to refresh the page and try again, or <a href="#" id="show-content">here</a> to show what has loaded so far.</div></div>');
    // fade in loading-slow fallback
    setTimeout(function() {
        $('.loading-slow').fadeIn(500);
    }, 5000);
    // refresh page click handler
    $('#refresh').click(function() {
        location.reload();
        return false;
    });
    // show what's loaded handler
    $('#show-content').click(function() {
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
        return false;
    });
    
    
    // adding spans for animations...
    $('#logo').append('<span></span>');
    $('#main-nav ul li').append('<span></span>');
    $('body').prepend('<span id="header-bg"></span>');

    
    // animating nav on scroll
    scrollDisplayMenu = function() {
        var viewportWidth = $(window).width();
        var scrolled = $(document).scrollTop();
        var $scrollNav = $('#header-bg');
        var $header = $('header');
        if ((scrolled >= 100) && (!$header.hasClass('fixed')) && (viewportWidth > 1024)) {
            $scrollNav.addClass('open');
            $header.addClass('fixed');
            $logo.html('N');
            $about.text('a');
            $work.text('w');
            $labs.text('l');
            $blog.text('b');
            $contact.text('c');
            setTimeout(function() {
                $header.addClass('fixed-after-anim');
            }, 300)
        }
        else if (((scrolled <= 100) && ($header.hasClass('fixed'))) || (viewportWidth < 1025)) {
            $scrollNav.removeClass('open');
            $header.removeClass('fixed-after-anim').removeClass('fixed');
            $logo.html('Neil<br/>Carpenter');
            $about.text('About');
            $work.text('Work');
            $labs.text('Labs');
            $blog.text('Blog');
            $contact.html('Contact');
        }
    };
    // call on scroll
    $(window).bind('scroll', function(){
        scrollDisplayMenu();
    });
    
    
    // scroll to top button
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000, 'easeInOutQuint');
        return false;
    });
    
    // trying to do double hover thing
    $('.double-hover').hover(function(){
        $(this).parent().find('.double-hover').addClass('mouseenter'); 
        },
        function(){
        $(this).parent().find('.double-hover').removeClass('mouseenter'); 
    });
    
        
    // expanding footer
    $('#expanded-footer').hide();
    
    $('#toggle-footer').click(function(e) {
        e.preventDefault();
        var viewportWidth = $(window).width();
        var footerScrollTop;
        if (viewportWidth > 768) {
            footerScrollTop = $(document).height();
        }
        else {
            footerScrollTop = ($(document).height() - 100);
        }
        var follow_btn = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/follow_button.html?screen_name=NeilCarpenter&show_count=false" style="width: 150px; height:20px;"></iframe>';
        var $t = $('#toggle-footer span');
        if ($(this).hasClass('footer-open')) {
            $(this).removeClass('footer-open');
            $(this).addClass('follow-button-loaded');
            /*
            $t.fadeOut(250,function(){ 
                    $(this).text('o').fadeIn(250); 
            });
            */  
            $('#expanded-footer').slideUp(500, 'easeInOutQuint');
            // removed this for smoother closing animation, but does it make it hard to tell that
            // there is stuff below the intro column?
            //$('html, body').animate({
            //  scrollTop: footerScrollTop
            //}, 500, 'easeInOutQuint');
        }
        else {
            $(this).addClass('footer-open');
            /*
            $t.fadeOut(250,function(){ 
                    $(this).text('O').fadeIn(250); 
            });
            */  
            $('#expanded-footer').slideDown(500, 'easeInOutQuint');
            $('html, body').animate({
                scrollTop: footerScrollTop
            }, 500, 'easeInOutQuint');
            // add follow button
            if ($(this).hasClass('follow-button-loaded')) {
            }
            else {
                $('.follow-button').html(follow_btn);
            }
        }
    });

    // mobile menu
    $('.nav-control a').click(function(){
        $html = $('html');
        if ($html.hasClass('nav-open')){
            $html.removeClass('nav-open');
        }
        else {
            $html.addClass('nav-open');
        }
        return false;
    });
});

/*
 * MBP - Mobile boilerplate helper functions
 */

(function(document){

window.MBP = window.MBP || {}; 

/* 
   * Fast Buttons - read wiki below before using
   * https://github.com/h5bp/mobile-boilerplate/wiki/JavaScript-Helper
*/

MBP.fastButton = function (element, handler) {
  this.handler = handler;
    
    if (element.length && element.length > 1) {
    for (var singleElIdx in element) {
      this.addClickEvent(element[singleElIdx]);
    }
  } else {
    this.addClickEvent(element);
  }
};
 
MBP.fastButton.prototype.handleEvent = function(event) {
    event = event || window.event;
  switch (event.type) {
    case 'touchstart': this.onTouchStart(event); break;
    case 'touchmove': this.onTouchMove(event); break;
    case 'touchend': this.onClick(event); break;
    case 'click': this.onClick(event); break;
  }
};

MBP.fastButton.prototype.onTouchStart = function(event) {
  var element = event.srcElement;
  event.stopPropagation();
  element.addEventListener('touchend', this, false);
  document.body.addEventListener('touchmove', this, false);
  this.startX = event.touches[0].clientX;
  this.startY = event.touches[0].clientY;
  element.style.backgroundColor = "rgba(0,0,0,.7)";
};

MBP.fastButton.prototype.onTouchMove = function(event) {
  if(Math.abs(event.touches[0].clientX - this.startX) > 10 || 
    Math.abs(event.touches[0].clientY - this.startY) > 10    ) {
    this.reset(element);
  }
};

MBP.fastButton.prototype.onClick = function(event) {
    event = event || window.event;
  var element = event.srcElement;
  if (event.stopPropagation) { event.stopPropagation(); }
  this.reset(event);
  this.handler.apply(event.currentTarget, [event]);
  if(event.type == 'touchend') {
    MBP.preventGhostClick(this.startX, this.startY);
  }
  element.style.backgroundColor = "";
};

MBP.fastButton.prototype.reset = function(event) {
  var element = event.srcElement;
    rmEvt(element, "touchend", this, false);
    rmEvt(document.body, "touchmove", this, false);
  element.style.backgroundColor = "";
};

MBP.fastButton.prototype.addClickEvent = function(element) {
  addEvt(element, "touchstart", this, false);
  addEvt(element, "click", this, false);
};

MBP.preventGhostClick = function (x, y) {
  MBP.coords.push(x, y);
  window.setTimeout(function (){
    MBP.coords.splice(0, 2);
  }, 2500);
};

MBP.ghostClickHandler = function (event) {
  if (!MBP.hadTouchEvent && 'ontouchstart' in window) {
    // This is a bit of fun for Android 2.3...
    // If you change window.location via fastButton, a click event will fire
    // on the new page, as if the events are continuing from the previous page.
    // We pick that event up here, but MBP.coords is empty, because it's a new page,
    // so we don't prevent it. Here's we're assuming that click events on touch devices
    // that occur without a preceding touchStart are to be ignored. 
    event.stopPropagation();
    event.preventDefault();
    return;
  }
  for(var i = 0, len = MBP.coords.length; i < len; i += 2) {
    var x = MBP.coords[i];
    var y = MBP.coords[i + 1];
    if(Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};

if (document.addEventListener) {
  document.addEventListener('click', MBP.ghostClickHandler, true);
}

addEvt( document.documentElement, 'touchstart', function() {
  MBP.hadTouchEvent = true;
}, false);
                            
MBP.coords = [];

// fn arg can be an object or a function, thanks to handleEvent
// read more about the explanation at: http://www.thecssninja.com/javascript/handleevent
function addEvt(el, evt, fn, bubble) {
  if("addEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.addEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.addEventListener(evt, function(e){
        // Bind fn as this and set first arg as event object
        fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("attachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.attachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.attachEvent("on" + evt, fn);
    }
  }
}

function rmEvt(el, evt, fn, bubble) {
  if("removeEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.removeEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.removeEventListener(evt, function(e){
          // Bind fn as this and set first arg as event object
          fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("detachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.detachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.detachEvent("on" + evt, fn);
    }
  }
}

/* 
  * Enable active
  * Enable CSS active pseudo styles in Mobile Safari
  * http://miniapps.co.uk/blog/post/enable-css-active-pseudo-styles-in-mobile-safari/
*/

MBP.enableActive = function () {
  document.addEventListener("touchstart", function() {}, false);
};

})(document);

/* A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){

    // This fix addresses an iOS bug, so return early if the UA claims it's something else.
    if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){
        return;
    }

    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
        x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }

    function checkTilt( e ){
        aig = e.accelerationIncludingGravity;
        x = Math.abs( aig.x );
        y = Math.abs( aig.y );
        z = Math.abs( aig.z );

        // If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
            if( enabled ){
                disableZoom();
            }           
        }
        else if( !enabled ){
            restoreZoom();
        }
    }

    w.addEventListener( "orientationchange", restoreZoom, false );
    w.addEventListener( "devicemotion", checkTilt, false );

})( this );

/* Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function( win ){
    var doc = win.document;

    // If there's a hash, or addEventListener is undefined, stop here
    if( !location.hash && win.addEventListener ){

        //scroll to 1
        window.scrollTo( 0, 1 );
        var scrollTop = 1,
            getScrollTop = function(){
                return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
            },

            //reset to 0 on bodyready, if needed
            bodycheck = setInterval(function(){
                if( doc.body ){
                    clearInterval( bodycheck );
                    scrollTop = getScrollTop();
                    win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
                }   
            }, 15 );

        win.addEventListener( "load", function(){
            setTimeout(function(){
                //at load, if user hasn't scrolled more than 20 or so...
                if( getScrollTop() < 20 ){
                    //reset to hide addr bar at onload
                    win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
                }
            }, 0);
        } );
    }
})( this );