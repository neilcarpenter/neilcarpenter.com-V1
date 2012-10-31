<?php
/**
 *
 * Template Name: Labs-single template
 *
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title><?php echo get_the_title(); ?> &bull; Labs &bull; Neil Carpenter</title>
  <meta name="description" content="<?php echo get_post_meta($post->ID, 'small-blurb', true); ?>" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/labs.min.css">
 
  <?php get_header(); ?>
        
    <div id="content" class="clearfix loading lab-single">
    
      <h1 class="module">Recent experiments</h1>

		  <section class="module labs-image">
        
        <h1><?php echo get_the_title(); ?></h1>
        <div>
          <img src="<?php echo get_post_meta($post->ID, 'labs-hero', true); ?>" alt="<?php echo get_the_title(); ?>" />
        </div>
            
      </section>
      
      <section class="description module">
        
        <h2 class="section-heading">What is it?</h2>
        
        <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
          
          <?php the_content(); ?>
         
          <?php wp_reset_postdata(); ?>

        <?php endwhile; // end of the loop. ?>
        
      </section>
      
      <section class="links-sharers-labs-nav">
      
        <section class="module links">
          <h2 class="section-heading">Links</h2>
          <?php echo get_post_meta($post->ID, 'labs-links', true); ?>
        </section>
        
        <?php get_template_part('sharers'); ?>
        
        <!-- project nav -->
        <div class="project-nav-holder module">
          <nav class="project-nav">
            <?php echo get_post_meta($post->ID, 'labs-nav', true); ?>
          </nav>
        </div>
        
      </section>
                    
    </div><!--! end of #content -->
    
  <?php get_footer(); ?>

  
  <script src="<?php bloginfo('template_directory');?>/js/labs.min.js"></script>
	
  <?php get_template_part('analytics'); ?>

  <!--[if lt IE 9 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>