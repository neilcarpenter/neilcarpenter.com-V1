<?php
/**
 *
 * Template Name: Blog-home template
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
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/blog.min.css">
 

  <?php get_header(); ?>
    
  <div id="content" class="clearfix loading blog-landing">
    
	<h1 class="module">Blog</h1>

	<div class="module thoughts-landing">
    	<a href="<?php bloginfo('siteurl');?>/blog/thoughts/" class="double-hover" title="View thoughts"><h2>Thoughts</h2></a>
		<p><?php echo get_post_meta($post->ID, 'thoughts-blurb', true); ?></p>
        <a href="<?php bloginfo('siteurl');?>/blog/thoughts/" class="double-hover blog-landing-image" title="View thoughts"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-smallsrc="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-mediumsrc="<?php bloginfo('template_directory');?>/i/thoughts-thumb_MED.jpg" data-largesrc="<?php bloginfo('template_directory');?>/i/thoughts-thumb_LRG.jpg" alt="Thoughts" class="RWD-i" /></a>
    	<a href="<?php bloginfo('siteurl');?>/blog/thoughts/" class="more double-hover" title="View thoughts">View thoughts</a>
    </div>

	<div class="module snaps-landing">
    	<a href="<?php bloginfo('siteurl');?>/blog/snaps/" class="double-hover" title="View snaps"><h2>Snaps</h2></a>
		<p><?php echo get_post_meta($post->ID, 'snaps-blurb', true); ?></p>
        <a href="<?php bloginfo('siteurl');?>/blog/snaps/" class="double-hover blog-landing-image" title="View snaps"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-smallsrc="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-mediumsrc="<?php bloginfo('template_directory');?>/i/snaps-thumb_MED.jpg" data-largesrc="<?php bloginfo('template_directory');?>/i/snaps-thumb_LRG.jpg" alt="Snaps" class="RWD-i" /></a>
    	<a href="<?php bloginfo('siteurl');?>/blog/snaps/" class="more double-hover" title="View snaps">View snaps</a>
    </div>

	<div class="module sites-landing">
    	<a href="<?php bloginfo('siteurl');?>/blog/sites/" class="double-hover" title="View sites"><h2>Sites</h2></a>
		<p><?php echo get_post_meta($post->ID, 'sites-blurb', true); ?></p>
        <a href="<?php bloginfo('siteurl');?>/blog/sites/" class="double-hover blog-landing-image" title="View sites"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-smallsrc="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-mediumsrc="<?php bloginfo('template_directory');?>/i/sites-thumb_MED.jpg" data-largesrc="<?php bloginfo('template_directory');?>/i/sites-thumb_LRG.jpg" alt="Sites" class="RWD-i" /></a>
     	<a href="<?php bloginfo('siteurl');?>/blog/sites/" class="more double-hover" title="View sites">View sites</a>
   </div>

  </div><!--! end of #content --> 
    
  <?php get_footer(); ?>

  
  <script async src="<?php bloginfo('template_directory');?>/js/blog.min.js"></script>
  
  <?php get_template_part('analytics'); ?>

  <!--[if lt IE 9 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>