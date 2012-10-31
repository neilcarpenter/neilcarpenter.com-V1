<?php
/**
 *
 * Template Name: Contact template
 *
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title><?php echo get_the_title(); ?> &bull; Neil Carpenter</title>
  <meta name="description" content="<?php echo get_post_meta($post->ID, 'meta-desc', true); ?>" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/about-contact-workhome.min.css">
 

  <?php get_header(); ?>
    
    
  <div id="content" class="clearfix loading">
  
	<h1 class="module">Contact</h1>
	
		<div class="contact-intro module">
		
			<p class="intro">Hellloooooo...?</p>
			<p class="intro-sub">If you feel like getting in touch, please use the form on this page, or alternatively email on <a href="mailto:hi@neilcarpenter.com" title="Email me">hi@neilcarpenter.com</a></p>
			<p>And see some used, and not so used, accounts below.</p>
			
		</div>
		
      <div class="form module">
		
		<?php echo do_shortcode( '[contact-form-7 id="4" title="Contact form 1"]' ); ?>
		
      </div>
    
    <section id="social-accounts" class="accounts-holder">
    
    	<div class="account module a-twitter">
			<a href="https://twitter.com/#!/neilcarpenter" title="Me on Twitter" target="_blank">Twitter</a><span>Cats, code & moaning in 140 characters.</span>
		</div>
		<div class="account module a-flickr">
			<a href="http://www.flickr.com/photos/neilanthonycarpenter/" title="Me on Flickr" target="_blank">Flickr</a><span>This is where I post photos occasionally, mostly from instagram.</span>
		</div>
    	<div class="account module a-lastfm">
			<a href="http://www.last.fm/user/nac22" title="Me on Last.fm" target="_blank">Last.FM</a><span>This generally gets me through the day.</span>
		</div>
    	<div class="account module a-readability">
			<a href="http://www.readability.com/neilcarpenter/latest" title="Me on Readability" target="_blank">Readability</a><span>Stuff that I read on the tube.</span>
		</div>
    	<div class="account module a-facebook">
			<a href="https://www.facebook.com/neilanthonycarpenter" title="Me on Facebook" target="_blank">Facebook</a><span>I go here to be advertised at and see what people I don't care about are doing.</span>
		</div>
    	<div class="account module a-linkedin">
			<a href="http://uk.linkedin.com/pub/neil-carpenter/23/8b4/619" title="Me on LinkedIn" target="_blank">LinkedIn</a><span>I have an account, that's about it.</span>
		</div>
    	<div class="account module a-googleplus">
			<a href="https://plus.google.com/u/0/114713464020581388501?rel=author" title="Me on Google+" target="_blank">Google+</a><span>This might be used one day, but not yet.</span>
		</div>
    	<div class="account module a-github">
			<a href="https://github.com/neilcarpenter" title="Me on GitHub" target="_blank">GitHub</a><span>Don't use this too much, but plan on changing that in the future.</span>
		</div>
    	<div class="account module a-codepen">
			<a href="http://codepen.io/neilcarpenter" title="Me on CodePen" target="_blank">CodePen</a><span>Some weeny code experiments, mostly with rainbows.</span>
		</div>
    
    </section>
    
  </div><!--! end of #content --> 
    
  <?php get_footer(); ?>

  
  <script async src="<?php bloginfo('template_directory');?>/js/about-contact-workhome.min.js"></script>
	
  <?php get_template_part('analytics'); ?>

  <!--[if lt IE 9 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>