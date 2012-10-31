<?php
/**
 *
 * Template Name: Work-single template
 *
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title><?php echo get_the_title(); ?> &bull; Work &bull; Neil Carpenter</title>
  <meta name="description" content="<?php echo get_post_meta($post->ID, 'small-blurb', true); ?>" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/work.min.css">
 
  <style type="text/css">
  	.pattern { background-image: url(<?php echo get_post_meta($post->ID, 'pattern', true); ?>); }
  </style>
  <?php get_header(); ?>
    
	<span class="module pattern pattern-closed"></span>
    
    <div id="content" class="clearfix loading">
        
		<div id="top-content" class="clearfix">            
            
            <section id="skinny" class="module half top-module clearfix">
            
                <h1><?php echo get_the_title(); ?></h1>
                
                <h2 class="section-heading">The skinny</h2>
                
                <p><?php echo get_post_meta($post->ID, 'large-blurb', true); ?></p>
                
                <a href="<?php echo get_post_meta($post->ID, 'external-url', true); ?>" class="visit-site" target="_blank">Visit site</a>
				<?php 
					if (get_post_meta($post->ID, 'is-smartphone', true) === 'yes')  
					{ 
					echo "<a href=\"";
					echo get_post_meta($post->ID, 'external-url', true);
					echo "\" class=\"smartphone-demo\" title=\"";
					echo get_the_title();
					echo "\">Smartphone demo</a>";
					}
					if (get_post_meta($post->ID, 'is-tablet', true) === 'yes')  
					{ 
					echo "<a href=\"";
					echo get_post_meta($post->ID, 'external-url', true);
					echo "\" class=\"tablet-demo\" title=\"";
					echo get_the_title();
					echo "\">Tablet demo</a>";
					}
					?>
                            
            </section><!--! end of #skinny -->
            
            <div id="top-image" class="module half top-module">
			
            	<?php echo get_post_meta($post->ID, 'top-image', true); ?>
                
            </div>
            
		</div>            
        
        <section id="not-so-skinny" class="module half">
        
        	<h2 class="section-heading">The not-so-skinny</h2>
            
            <div class="scope slider-holder">
            
            	<h3>Project overview</h3>
                
                <div class="slider">
                	
					<p><?php echo get_post_meta($post->ID, 'overview', true); ?></p>
                
                </div>
            
            </div><!--! end of .scope -->

            <div class="responsibilities slider-holder">
            
            	<h3>Responsibilities</h3>
                
                <div class="slider">
				
					<p><?php echo get_post_meta($post->ID, 'responsibilities', true); ?></p>
                
                </div>
            
            </div><!--! end of .responsibilities -->

            <div class="technical slider-holder">
            
            	<h3>Technical deets</h3>
                
                <div class="slider">
                
					<p><?php echo get_post_meta($post->ID, 'tech', true); ?></p>
                
                </div>
            
            </div><!--! end of .technical -->

            <div class="outcome slider-holder">
            
            	<h3>Outcome</h3>
                
                <div class="slider">
					
					<p><?php echo get_post_meta($post->ID, 'outcome', true); ?></p>
                
                </div>
            
            </div><!--! end of .outcome-->
            
        </section><!--! end of #not-so-skinny -->
        
        <div id="main-images" class="module half">
        
            <ul>
            	<?php echo get_post_meta($post->ID, 'main-images', true); ?>			
            </ul>
	        
        </div><!--! end of #main-images -->
		
		<?php get_template_part('sharers'); ?>

        <!-- project nav -->
        <div class="project-nav-holder module">
            <nav class="project-nav">
				<?php echo get_post_meta($post->ID, 'project-nav', true); ?>
            </nav>
        </div>
                    
    </div><!--! end of #content -->
    
  <?php get_footer(); ?>

  
  <script src="<?php bloginfo('template_directory');?>/js/libs/klass.min.js"></script>
  <script src="<?php bloginfo('template_directory');?>/js/work.min.js"></script>
	
  <?php get_template_part('analytics'); ?>

  <!--[if lt IE 9 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>