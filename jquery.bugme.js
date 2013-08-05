/**
 * jQuery bugMe v1.0.7
 * Copyright (C) 2013 Chris Wharton (chris@weare2ndfloor.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * View the demo at http://weare2ndfloor.com/bugmebar
 *
 */
(function ($) {
    $.fn.bugme = function (options) {
        var defaults = {
            target: jQuery(this), // target of where you want the bugme bar to go
            message: "Super duper exciting announcement goes in here! You can even have a link <a href='http://weare2ndfloor.com'>weare2ndfloor.com</a>", // message that goes inside the bug me bar
            align: "left", // align the message left, right, center or justify
            close: true, // have the close button on or off
            closeText: "X", // for the little dismiss cross in the top right
            closeAlign: "right", // align close button left or right
            remember: true, // this stores a cookie to remember cancellation of bugme bar
            expireIn: 7, // set expiry of remember cookie (in days)
            cookieName: "bugmebar", // this will allow you set a cookie name
            colours: true, // this will traverse through the colours in the CSS - CSS3 browsers only
            animate: true, // this will animate in and out the bugme bar - CSS3 browsers only
            fixed: false, // this will fix bugmebar to the top of the page
            fixedSpacer: false, // want to create a bit of space for a fixed bar? Set to true
            zindex: 99999 // this will allow you control the z-index of bugmebar
        };
        var options = $.extend(defaults, options);
        
        return this.each(function () {
            var target = options.target;
            var align = options.align;
            var message = options.message;
            var close = options.close;
            var closeText = options.closeText;
            var closeAlign = options.closeAlign;
            var remember = options.remember;
            var expireIn = options.expireIn;
            var cookieName = options.cookieName;
            var colours = options.colours;
            var animate = options.animate;
            var fixed = options.fixed;
            var fixedSpacer = options.fixedSpacer;
            var zindex = options.zindex;
            
            // lets get going
            function bugMe() {
            
            	if ( closeAlign == "left" ) {
            		closeme = " bugme-close-left";
            	} else {
            		closeme = "";
            	}
            
            	if ( close ) {
            		closer = '<a class="bugme-close' + closeme + '" href="#">' + closeText + '</a>';
            	} else {
            	    closer = "";        
            	}
            	
            	if ( animate ) {
            		animateme = ' bugmebar-animated bugmebar-bounceInDown';
            	} else {
            	    animateme = "";        
            	}
            	
            	if ( fixed ) {
            		fixme = ' bugme-fixed';
            	} else {
            	    fixme = "";        
            	}
            	
            	
            	zindexme = "z-index:" + zindex;
            	
            	//check for cookie present...
            	var bugCookieExist = jQuery.cookie(cookieName) == "close";
            	
            	if ( !bugCookieExist || !remember ) {
            	
            		jQuery('body').addClass('bugmebar');
            	
	            	jQuery(target).prepend('<div class="bugme' + animateme + fixme + '" style="text-align:'+ align +';' + zindexme + '">' + message + closer + '</div>'); 
	            	
	            	// grab height of bar if its fixed and fixedSpacer is true 
	            	if ( fixedSpacer && fixed ) {
	            		var bugmeHeight = jQuery('.bugme' , target).outerHeight();
	            		// add to the targets margin
	            		jQuery(target).animate({ marginTop: '+=' + bugmeHeight }, 500);
	            	}
	            	
	            	// slide content as it animates in
	            	jQuery('.bugme').hide().slideDown();
	            
		            if ( colours ) {
						
						var timeoutId;
						function addColourTimeout() {
							timeoutId = window.setTimeout(addColour, 2000);
						}
						function addColour() {
							jQuery('.bugme' , target).addClass("colours");
						}
						addColourTimeout();
		            	
		            } 
		            
		            jQuery('a.bugme-close').on( "click" , function (e) {
		            	
		            	e.preventDefault();
		            	jQuery('.bugme' , target).removeClass("colours").addClass("bugmebar-bounceOutUp");
		            			            	
		            	if ( remember ) {
		            		jQuery.cookie(cookieName, 'close', { expires: expireIn, path: '/' });
		            	}
		            	
		            	var timeoutId;
		            	function bodyUpTimeout() {
		            		timeoutId = window.setTimeout(bodyUp, 1000);
		            		timeoutId = window.setTimeout(bugMeRemove, 2000);
		            	}
		            	function bodyUp() {
		            		if ( fixedSpacer && fixed ) {
		            			// animate margin back up again
		            			jQuery(target).animate({ marginTop: '-=' + bugmeHeight }, 500);
		            		}
		            		jQuery('.bugme' , target).slideUp();
		            	}
		            	function bugMeRemove() {
		            		jQuery('.bugme' , target).remove();
		            		jQuery('body').removeClass('bugmebar');
		            	}
		            	bodyUpTimeout();
		            	
		            });
	            
	            }
	            
            }            
            
           // run main bugMe function on load
           bugMe(); 
        });
    };
})(jQuery);