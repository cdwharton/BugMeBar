BugMeBar
=====

A simple little annoying notification bar plugin


Demo
----
[http://weare2ndfloor.com/bugmebar/](http://http://weare2ndfloor.com/bugmebar/)


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
	message: "Message in here", // message that goes inside the bug me bar
	close: true, // have the close button on or off
	closeText: "X", // for the little dismiss cross in the top right
	align: "left", // align the text left, right, center or justify
	remember: true, // this stores a cookie to remember cancellation of bugme bar
	expireIn: 7, // set expiry of remember cookie (in days)
	colours: true, // this will traverse through the colours in the CSS - CSS3 browsers only
	animate: true // this will animate in and out the bugme bar - CSS3 browsers only
	
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
