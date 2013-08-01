BugMeBar
=====

A simple little annoying notification bar plugin


Demo
----
[http://weare2ndfloor.com/bugmebar/](http://weare2ndfloor.com/bugmebar/)


Dependencies
------------

* [jQuery](https://github.com/jquery/jquery)
* [jQuery.cookie](https://github.com/carhartl/jquery-cookie)



Set up
----
Nice and easy, just include this in your &lt;head&gt; or just before &lt;/body&gt;

	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="jquery.cookie.js"></script>
	<script src="jquery.bugme.js"></script>

Then call the function…

	<script>
		jQuery(document).ready(function () {
    		jQuery('body').bugme();
	});
	<script>

Options
---
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
	
Browsers
---

Aside from the colour changing aspect and the bouncy animation, this works in IE7 & IE8.

It has also been tested in all the cool browsers (Chrome, Safari, Firefox, Opera), iOS, Windows Phone and Android Phone… and IE9 &IE10.

Special thanks
---
**Dan Eden** for his awesome [animate.css](http://daneden.me/animate/)

**Klaus Hartl** for his amazing [jquery.cookie plugin](https://github.com/carhartl/jquery-cookie)


Why did I build this?
---
Because I needed something mega simple without a gazillion options that also looked nice and I couldn't find anything that matched those requirements.


Happy annoying people, everyone :)
