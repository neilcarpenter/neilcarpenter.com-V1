<?php
/**
 *
 * Template Name: Homepage template
 *
 */
?>
<!doctype html>
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]--><head>
  <meta charset="utf-8">

  <title>Neil Carpenter &bull; web design & front-end development</title>
  <meta name="description" content="<?php echo get_post_meta($post->ID, 'meta-desc', true); ?>" />

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/home.min.css">
 

  <?php get_header(); ?>
    
    
    
<div id="content" class="clearfix loading">
    
		<div class="flex-container flex-loading">
			<div class="flexslider">
		    <ul class="slides">
          <li>
            <img src="http://neilcarpenter.com/wp-content/uploads/2013/10/home-love-cravendale-1_SML.jpg" data-smallsrc="http://neilcarpenter.com/wp-content/uploads/2013/10/home-love-cravendale-1_SML.jpg" data-mediumsrc="http://neilcarpenter.com/wp-content/uploads/2013/10/home-love-cravendale-1_LRG.jpg" data-largesrc="http://neilcarpenter.com/wp-content/uploads/2013/10/home-love-cravendale-1_XL.jpg" alt="Love Cravendale" class="RWD-i" />
                    <div class="flex-caption"><h2 class="section-heading">Cravendale</h2><span>Love Cravendale</span><a href="http://neilcarpenter.com/work/love-cravendale/" class="more-other" title="Lurpak">View this</a></div>
          </li>  
		    	<li>
		    		<img src="http://neilcarpenter.com/wp-content/uploads/2012/10/circle-warp-home2_SML.jpg" data-smallsrc="http://neilcarpenter.com/wp-content/uploads/2012/10/circle-warp-home2_SML.jpg" data-mediumsrc="http://neilcarpenter.com/wp-content/uploads/2012/10/circle-warp-home2_MED.jpg" data-largesrc="http://neilcarpenter.com/wp-content/uploads/2012/10/circle-warp-home2_LRG.jpg" alt="Circle warp" class="RWD-i" />
                    <div class="flex-caption"><h2 class="section-heading">Cirle warp</h2><span>Warped canvas</span><a href="http://neilcarpenter.com/labs/circle-warp/" class="more-other" title="Circle warp">View this</a></div>
		    	</li>
		    	<li>
		    		<img src="http://neilcarpenter.com/wp-content/uploads/2013/05/ikon-home-3_SML.jpg" data-smallsrc="http://neilcarpenter.com/wp-content/uploads/2013/05/ikon-home-3_SML.jpg" data-mediumsrc="http://neilcarpenter.com/wp-content/uploads/2013/05/ikon-home-3_MED.jpg" data-largesrc="http://neilcarpenter.com/wp-content/uploads/2013/05/ikon-home-3_LRG.jpg" alt="Ikon Arts Management" class="RWD-i" />
                    <div class="flex-caption"><h2 class="section-heading">Ikon Arts Management</h2><span>Ikon Arts</span><a href="http://neilcarpenter.com/work/ikon-arts-management/" class="more-other" title="Ikon Arts Management">View this</a></div>
		    	</li>
          <li>
            <img src="http://neilcarpenter.com/wp-content/uploads/2013/05/lurpak-uk-home-1_SML.jpg" data-smallsrc="http://neilcarpenter.com/wp-content/uploads/2013/05/lurpak-uk-home-1_SML.jpg" data-mediumsrc="http://neilcarpenter.com/wp-content/uploads/2013/05/lurpak-uk-home-1_MED.jpg" data-largesrc="http://neilcarpenter.com/wp-content/uploads/2013/05/lurpak-uk-home-1_LRG.jpg" alt="Lurpak UK" class="RWD-i" />
                    <div class="flex-caption"><h2 class="section-heading">Lurpak UK</h2><span>Responsive Lurpak</span><a href="http://neilcarpenter.com/work/lurpak-uk/" class="more-other" title="Lurpak">View this</a></div>
          </li>
          <li>
            <img src="http://neilcarpenter.com/wp-content/uploads/2013/05/home-milk-matters-1_SML.jpg" data-smallsrc="http://neilcarpenter.com/wp-content/uploads/2013/05/home-milk-matters-1_SML.jpg" data-mediumsrc="http://neilcarpenter.com/wp-content/uploads/2013/05/home-milk-matters-1_LRG.jpg" data-largesrc="http://neilcarpenter.com/wp-content/uploads/2013/05/home-milk-matters-1_XL.jpg" alt="The Milk Matters" class="RWD-i" />
                    <div class="flex-caption"><h2 class="section-heading">Cravendale</h2><span>The Milk Matters</span><a href="http://neilcarpenter.com/work/the-milk-matters/" class="more-other" title="Lurpak">View this</a></div>
          </li>
		    </ul>
		  </div>
	 	</div>
        
        <section id="home-about" class="half clearfix module">
        
			<h1 class="section-heading">About me</h1>        
            
            <p class="intro">Well hello there, nice to see you, how do you do... My name is <b>Neil</b> and I like the <b>Internet</b>. I like to try and make interesting and nice looking <b>websites</b>.</p>
			<p class="intro-sub">I also like <b>cats</b>, but I can't have one because my flat isn't big enough.</p>
			
			<p>Please have a look around, peruse some of the <a href="<?php bloginfo('siteurl');?>/work/" title="Recent work">recent projects</a> and <a href="<?php bloginfo('siteurl');?>/labs/" title="Labs">experiments</a> I've been working on or read some <a href="<?php bloginfo('siteurl');?>/blog/thoughts/" title="Recent thoughts">thoughts</a> on web design and development.<!-- check out some <a href="<?php bloginfo('siteurl');?>/blog/snaps/" title="Web snaps">snaps</a> I've collected of interesting bits and pieces from around the internet or read reviews on <a href="<?php bloginfo('siteurl');?>/blog/sites/" title="Good sites">sites</a> that have impressed me.--> If you feel like getting in touch for any reason, use this <a href="<?php bloginfo('siteurl');?>/contact/">lovely form</a>, or any of the other <a href="<?php bloginfo('siteurl');?>/contact/#social-accounts">social things</a>.</p>
        
			<a href="<?php bloginfo('siteurl');?>/about" class="more double-hover">More?</a>
			

		</section><!--! end of #home-about -->

        <div id="latest" class="half">
        
        	<section id="latest-work" class="clearfix module">
            
            	<h1 class="section-heading">Latest work</h1>
                
				<?php 
					$pages = get_pages('child_of=20&parent=20&number=1&sort_column=post_date&sort_order=desc'); 
						foreach ( $pages as $page ) {
							$recentWork = '<a href="' . get_page_link( $page->ID ) . '" class="double-hover"';
							$recentWork .= ' title="View ' . $page->post_title . '">';
							$recentWork .= '<img alt="" src="' . get_post_meta($page->ID, 'small-thumb', true) . '" />';
							$recentWork .= '</a>';
							$recentWork .= '<p>' . get_post_meta($page->ID, 'large-blurb', true) . '</p>';
							$recentWork .= '<a href="' . get_page_link( $page->ID ) . '" class="more double-hover"';
							$recentWork .= ' title="View ' . $page->post_title . '">View project</a>';
							echo $recentWork;
						}
				?>
                                      
            </section>
            
            <section id="latest-blog" class="clearfix module">
            
            	<h1 class="section-heading">Latest thoughts</h1>
				<?php 
					global $post;
					$recentThought = get_posts('numberposts=1&category_name=Thoughts'); 
						foreach($recentThought as $post) ?>
					
					<a href="<?php the_permalink(); ?>" class="double-hover" title="Read: <?php the_title(); ?>"><img src="<?php echo get_post_meta($post->ID, 'thought-thumb', true); ?>" alt=" " /></a>
					<p><?php echo get_post_meta($post->ID, 'homepage-blurb', true); ?></p>
					<a href="<?php the_permalink(); ?>" class="more double-hover" title="Read: <?php the_title(); ?>">Read more</a>
            
            </section>
        
        </div><!--! end of #latest -->
                
        <div id="social-other">
        
        	<section id="twitter" class="quarter module">
            
            	<h1 class="section-heading">Tweets</h1>
                <div id="tweets">
                <a href="http://twitter.com/neilcarpenter" title="Me on Twitter" target="_blank"><img src="<?php bloginfo('template_directory');?>/i/twitter-avatar.jpg" alt="Neil" /></a>
				<span id="twitter-fallback" class="fallback"><strong>Latest tweet should go here...</strong> Tweets don't seem to be loading (make sure you have JavaScript enabled), <a href="http://twitter.com/neilcarpenter" title="Me on Twitter" target="_blank">see me on Twitter here instead.</a></span>
                
                </div>
               	<a href="http://twitter.com/neilcarpenter" title="Me on Twitter" target="_blank" class="more-other">See more</a>
            
            </section>
            
            <section id="flickr" class="quarter module">

            	<h1 class="section-heading">Flickr</h1>
                <div id="flickr_badge_wrapper"></div>
				<span id="flickr-fallback" class="fallback"><strong>Should be 3 recent Flickr pics here...</strong> but they don't seem to be loading (make sure you have JavaScript enabled), <a href="http://www.flickr.com/photos/neilanthonycarpenter/" title="Me on Flickr" target="_blank">see me on Flickr here instead.</a></span>                
                <a href="http://www.flickr.com/photos/neilanthonycarpenter/" title="Me on Flickr" target="_blank" class="more-other">See more</a>
                    
            </section>
            
            <section id="contact" class="quarter module">

            	<h1 class="section-heading">Contact</h1>
                <ul>
                	<li class="email"><a href="mailto:hi@neilcarpenter.com" title="Email me">hi@neilcarpenter.com</a></li>
                    <li class="phone"><a href="tel:00447854650169">07854 650 169</a></li>
                </ul>
            
            </section>

            <section id="lastfm" class="quarter module">

            	<h1 class="section-heading">Last.FM</h1>
            	<div id="loved-track">
                
				<span id="lastfm-fallback" class="fallback"><strong>Most recent loved track should go here...</strong> Songs don't seem to be loading (make sure you have JavaScript enabled), <a href="http://www.last.fm/user/nac22" title="Me on Last.FM" target="_blank">see me on Last.FM here instead.</a></span>                
                
                </div>
                <a href="http://www.last.fm/user/nac22" title="Me on Last.FM" target="_blank" class="more-other">See more</a>
                
            </section>
                    
        </div><!--! end of #social-other -->
    
    </div><!--! end of #content -->
    
  <?= '<script id="tweetsData">'.getTweets(1).'</script>'; ?>
    
  <?php get_footer(); ?>

  
  <script async src="<?php bloginfo('template_directory');?>/js/home.min.js"></script>
	
  <?php get_template_part('analytics'); ?>

  <!--[if lt IE 9 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>