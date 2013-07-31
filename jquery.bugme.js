/**
 * jQuery bugMe v1.0.1
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
 * View the demo at http://weare2ndfloor.com/bugme
 *
 */
(function ($) {
    $.fn.bugme = function (options) {
        var defaults = {
            target: jQuery(this), // target of where you want the bugme bar to go
            message: "Super duper exciting announcement goes in here! You can even have a link <a href='http://weare2ndfloor.com'>weare2ndfloor.com</a>", // message that goes inside the bug me bar
            close: true, // have the close button on or off
            closeText: "X", // for the little dismiss cross in the top right
            align: "left", // align the text left, right, center or justify
            remember: true, // this stores a cookie to remember cancellation of bugme bar
            expireIn: 7, // set expiry of remember cookie (in days)
            colours: true, // this will traverse through the colours in the CSS - CSS3 browsers only
            animate: true, // this will animate in and out the bugme bar - CSS3 browsers only
            fixed: false, // this will fix bugmebar to the top of the page
            zindex: 99999 // this will allow you control the z-index of bugmebar
        };
        var options = $.extend(defaults, options);
        
        return this.each(function () {
            var target = options.target;
            var message = options.message;
            var close = options.close;
            var align = options.align;
            var closeText = options.closeText;
            var remember = options.remember;
            var colours = options.colours;
            var animate = options.animate;
            var expireIn = options.expireIn;
            var fixed = options.fixed;
            var zindex = options.zindex;
            
            // lets get going
            function bugMe() {
            
            	if ( close ) {
            		closer = '<a class="bugme-close" href="#">' + closeText + '</a>';
            	} else {
            	    closer = "";        
            	}
            	
            	if ( animate ) {
            		animateme = ' animated bounceInDown';
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
            	
            	var bugCookieExist = jQuery.cookie('bugme') == "close";
            	
            	if ( !bugCookieExist ) {
            	
	            	jQuery(target).prepend('<div class="bugme' + animateme + fixme + '" style="text-align:'+ align +';' + zindexme + '">' + message + closer + '</div>'); 
	            	
	            	// slide content as it animates in
	            	jQuery('.bugme').hide().slideDown();
	            	
	            
		            if ( colours ) {
						
						var timeoutId;
						function addColourTimeout() {
							timeoutId = window.setTimeout(addColour, 2000);
						}
						function addColour() {
							jQuery('.bugme').addClass("colours");
						}
						addColourTimeout();
		            	
		            } 
		            
		            jQuery('a.bugme-close').on( "click" , function (e) {
		            	
		            	e.preventDefault();
		            	jQuery('.bugme').removeClass("colours").addClass("bounceOutUp");
		            	
		            	if ( remember ) {
		            		jQuery.cookie('bugme', 'close', { expires: expireIn, path: '/' });
		            	}
		            	
		            	var timeoutId;
		            	function bodyUpTimeout() {
		            		timeoutId = window.setTimeout(bodyUp, 1000);
		            		timeoutId = window.setTimeout(bugMeRemove, 2000);
		            	}
		            	function bodyUp() {
		            		jQuery('.bugme').slideUp();
		            	}
		            	function bugMeRemove() {
		            		jQuery('.bugme').remove();
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