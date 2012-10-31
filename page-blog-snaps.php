<?php
/**
 *
 * Template Name: Blog-snaps template
 *
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title><?php echo get_the_title(); ?> &bull; Blog &bull; Neil Carpenter</title>
  <meta name="description" content="<?php echo get_post_meta($post=22, 'snaps-blurb', true); ?>" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/blog.min.css">
 

  <?php get_header(); ?>
    
  <div id="content" class="clearfix loading snaps">
  
    <h1 class="module">Blog</h1>

	<div class="buttons-intro">
          
	  <?php get_template_part('blog-nav'); ?>
      
      <div class="module intro">
        <h2 class="section-heading">snaps</h2>
        <p><?php echo get_post_meta($post=22, 'snaps-blurb', true); ?></p>
      </div>

	</div><!--! end of .buttons-intro -->

  <div id="snaps-content">

  <section id="snaps" class="module clearfix">

	<?php 
		$temp = $wp_query;
        $wp_query= null;
        $wp_query = new WP_Query();
		$wp_query->query('showposts=18'.'&paged='.$paged.'&category_name=Snaps'); ?>
        
    <?php while ($wp_query->have_posts()) : $wp_query->the_post(); ?>
            
  	<div class="snap">
    	<div class="snap-image">
        	<img src="<?php echo get_post_meta($post->ID, 'snap-image', true); ?>" alt="<?php the_title(); ?>" />
        	<span class="title-span"><?php the_title(); ?></span>
        </div>
        
         <div class="snap-content clearfix">   
            <h2 class="section-heading">Where?</h2>
            <p><?php echo get_post_meta($post->ID, 'snap-where', true); ?></p>
            <h2 class="section-heading">What?</h2>
            <p><?php echo get_post_meta($post->ID, 'snap-what', true); ?></p>
		</div>
    </div>
				
	<?php endwhile; ?>
	
  </section><!--! end of #snaps -->

	<div class="module pagination">
	  <div class="newer"><?php previous_posts_link('Previous') ?></div>
	  <div class="older"><?php next_posts_link('More') ?></div>
	</div>

  </div><!--! end of #snap-content -->

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