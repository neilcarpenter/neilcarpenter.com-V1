<?php
/**
 *
 * The template for displaying Tag Archive pages.
 *
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title><?php printf( __( 'Tag Archives: %s', 'twentyten' ), '' . single_tag_title( '', false ) . '' );?> &bull; Blog &bull; Neil Carpenter</title>
  <meta name="description" content="<?php printf( __( 'Tag Archives: %s', 'twentyten' ), '' . single_tag_title( '', false ) . '' );?>">

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/blog.min.css">
 

  <?php get_header(); ?>
    
  <div id="content" class="clearfix loading tag-archive">
    
	<h1 class="module">Blog</h1>

		<section id="tags-content">
				
				<h1><?php
				printf( __( 'Tag Archives: %s', 'twentyten' ), '' . single_tag_title( '', false ) . '' );
			?></h1>
	
			<?php
			/* Run the loop for the tag archive to output the posts
			 * If you want to overload this in a child theme then include a file
			 * called loop-tag.php and that will be used instead.
			 */
			 get_template_part( 'loop-tag' );
			?>
		
		</section>
      
	  <div class="module back-to-thoughts">
      	<a href="<?php bloginfo('siteurl');?>/blog/thoughts/" title="Back to thoughts">&larr; Back to thoughts</a>
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