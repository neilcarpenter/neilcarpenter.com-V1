<?php
/**
 *
 * Template Name: Labs-home template
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
    
    
	<div id="content" class="clearfix loading work-home">

        <h1 class="module">Recent experiments</h1>
        
		<?php 
			$pages = get_pages('child_of=735&number=0&sort_column=post_date&sort_order=desc'); 
				foreach ( $pages as $page ) {
					$project = '<div class="project module">';
					$project .= '<a href="' . get_page_link( $page->ID ) . '" class="double-hover"';
					$project .= ' title="View ' . $page->post_title . '">';
					$project .= '<img alt="' . $page->post_title . '" ';
					$project .= 'src="' . get_post_meta($page->ID, 'large-thumb', true) . '" />';
					$project .= '</a>';
					$project .= '<h2 class="section-heading">' . $page->post_title . '</h2>';
					$project .= '<p>' . get_post_meta($page->ID, 'small-blurb', true) . '</p>';
					$project .= '<a href="' . get_page_link( $page->ID ) . '" class="more double-hover"';
					$project .= ' title="View ' . $page->post_title . '">More</a>';
					$project .= '</div>';
					echo $project;
				}
		?>
						            
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