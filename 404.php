<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package WordPress
 * @subpackage Starkers
 * @since Starkers 3.0
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title>Neil Carpenter &bull; web design & front-end development</title>
  <meta name="description" content="" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css"> 

  <?php get_header(); ?>
    
	<div id="content" class="clearfix loading fourohfour">
		
		<div class="module">
			<h2 class="section-heading">404 error, page not found</h2>
			<h3>Whoa, where do you think you're going?</h3>
			<p>The page you are looking for doesn't exist, or it may have just moved.</p>
			<p>I'd recommend returning to the <a href="<?php bloginfo('siteurl');?>" title="Go home">homepage</a> and trying again.</p>
			<p>Or if you are frequently met with this error page, then please <a href="<?php bloginfo('siteurl');?>/contact/" title="Contact me">get in touch</a> and let me know!</p>
		</div>
	
    </div><!--! end of #content -->
    
  <?php get_footer(); ?>
  
  <script src="<?php bloginfo('template_directory');?>/js/home.min.js"></script>
	
  <script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-----------']);
	_gaq.push(['_trackPageview']);
	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
  </script>

  <!--[if lt IE 9 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>