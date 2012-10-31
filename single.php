<?php
/**
 *
 * The Template for displaying all posts
 *
 * Only thoughts will ever use this template, sites and snaps are aggregated on collective pages
 *
 */
 ?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title><?php echo get_the_title(); ?> &bull; Neil Carpenter</title>
  <meta name="description" content="<?php echo get_post_meta($post->ID, 'homepage-blurb', true); ?>" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/blog.min.css">
 

  <?php get_header(); ?>
    
  <div id="content" class="clearfix loading thoughts">
    <h1 class="module single-thought">Blog</h1>

	<div class="buttons-intro">
          
	  <?php get_template_part('blog-nav'); ?>
      
      <div class="module intro single-thought">
        <h2 class="section-heading">Thoughts</h2>
        <p><?php echo get_post_meta($post=22, 'thoughts-blurb', true); ?></p>
      </div>
      
      <div class="module back-to-thoughts">
      	<a href="<?php bloginfo('siteurl');?>/blog/thoughts/" title="Back to thoughts">&larr; Back to thoughts</a>
      </div>

	</div><!--! end of .buttons-intro -->

  <section id="thought-content">

	<article class="module">
    
	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		
		<h1><?php the_title(); ?></h1>
	
		<time datetime="<?php the_time('c') ?>"><?php the_time('l, F jS, Y') ?></time>
        
		<div class="post-tags">
			<?php the_tags('<span>','</span><span>','</span>'); ?>
		</div>
		
		<?php the_content(); ?>
	
    </article>

	<?php get_template_part('sharers'); ?>

    <!-- comments -->
    <div class="module comments clearfix">   
	 
        <h2 class="section-heading">Leave a comment...?</h2>
        
		<?php comments_template( '', true ); ?>
		
    </div><!-- end .comments -->
   
		<?php wp_reset_postdata(); ?>

	<?php endwhile; // end of the loop. ?>

  </section><!--! end of #thought-content -->

	<?php get_template_part('tags-module'); ?>

	<?php get_template_part('subscribe'); ?>

    <!-- project nav -->
    <div class="thought-nav-holder module">
        <nav class="thought-nav">
			<?php previous_post_link('%link', '<span>Previous post</span>', $in_same_cat = true); ?>
			<?php next_post_link('%link', '<span>Next post</span>', $in_same_cat = true); ?>
		</nav>
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