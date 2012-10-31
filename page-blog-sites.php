<?php
/**
 *
 * Template Name: Blog-sites template
 *
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title><?php echo get_the_title(); ?> &bull; Blog &bull; Neil Carpenter</title>
  <meta name="description" content="<?php echo get_post_meta($post=22, 'sites-blurb', true); ?>" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/blog.min.css">
 

  <?php get_header(); ?>
    
  <div id="content" class="clearfix loading sites">
  
    <h1 class="module">Blog</h1>

	<div class="buttons-intro">
          
	  <?php get_template_part('blog-nav'); ?>
      
      <div class="module intro">
        <h2 class="section-heading">Sites</h2>
        <p><?php echo get_post_meta($post=22, 'sites-blurb', true); ?></p>
      </div>

	</div><!--! end of .buttons-intro -->

  <section id="sites-content">

	<?php 
		$temp = $wp_query;
        $wp_query= null;
        $wp_query = new WP_Query();
		$wp_query->query('showposts=5'.'&paged='.$paged.'&category_name=Sites'); ?>
        
    <?php while ($wp_query->have_posts()) : $wp_query->the_post(); ?>
            
	<article class="module">
    
        <div class="site-heading site-buttons">
        	<a href="#" class="double-hover"><h1><?php the_title(); ?></h1></a>
			<a href="#" class="show-site double-hover">More</a>
        </div>

        <div class="site-heading">
			<?php echo get_post_meta($post->ID, 'site-image', true); ?>
        </div>

		<div class="site-content clearfix">
            <a href="<?php echo get_post_meta($post->ID, 'site-url', true); ?>" class="site-url" title="<?php the_title(); ?>" target="_blank"><?php echo get_post_meta($post->ID, 'site-pretty-url', true); ?></a>
            <h2 class="section-heading">What's so good?</h2>
        	<p><?php echo get_post_meta($post->ID, 'site-content', true); ?></p>
        	<a href="#" class="close-site">Close</a>
     	</div>
     
	</article>
				
	<?php endwhile; ?>

	<div class="module pagination">
	  <div class="newer"><?php previous_posts_link('Previous') ?></div>
	  <div class="older"><?php next_posts_link('More') ?></div>
	</div>

  </section><!--! end of #sites-content -->

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