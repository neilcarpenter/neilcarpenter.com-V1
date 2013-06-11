<?php
/**
 *
 * Template Name: About template
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
    
    
    
    <div id="content" class="clearfix loading about">

        <h1 class="module">About me</h1>
        
		<section class="blurb-photos clearfix">
    
            <div class="module blurb">
            
			<p class="intro">My name is Neil and I like to build websites.</p>
            
			<p class="intro-sub">I stay on top of the latest standards-based web technologies to help create interesting, interactive and nice-looking interfaces and experiences.</p>
            
            <p>I live in London with my <a href="http://twitter.com/annieannier" target="_blank" title="Annie reluctantly on Twitter">nice ginger girlfriend</a> and currently work at <a href="http://www.saatchi.co.uk/" title="Saatchi & Saatchi" target="_blank">Saatchi & Saatchi</a>. Other than staring at a screen I occasionally do other stuff, I won't bore you with the details.</p>
            
			<p>This site is a <a href="http://www.alistapart.com/articles/responsive-web-design/" target="_blank" title="Responsive Web Design by Ethan Marcotte, on A List Apart">responsive design</a>, with a heavy focus on CSS-only presentation attempting to make it as scalable, future-proof and mobile-friendly as possible, and built with progressive enhancement and strong client-side optimisation as essentials. Full colophon in <a href="http://neilcarpenter.com/2012/05/making-this-site/" title="Making this site">this blog post about what's in this site</a>.</p>
            
            </div>

            <div class="photos module">
            	<div class="photos-holder clearfix">
                	<a class="start-animation" href="#"><span class="hey">HEY!</span><span class="click-me">Click me!</span></a>
                    <img src="<?php bloginfo('template_directory');?>/i/tile-1.jpg" class="one" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-2.jpg" class="two" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-3.jpg" class="three" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-4.jpg" class="four" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-5.jpg" class="five" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-6.jpg" class="six" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-7.jpg" class="seven" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-8.jpg" class="eight" alt="" />
                    <img src="<?php bloginfo('template_directory');?>/i/tile-9.jpg" class="nine" alt="" />
                    
                    <img src="<?php bloginfo('template_directory');?>/i/whole.jpg" class="whole" alt="Pic of me" />          
                </div>
            </div>

		</section>        
        
        <div class="five-lists clearfix">
        
        	<section class="likes module">
            	<h2 class="section-heading">5 likes</h2>
                <ul>
                	<li><a href="http://s3-ec.buzzfed.com/static/enhanced/web05/2011/12/15/15/enhanced-buzz-9812-1323979293-37.jpg" title="Chill cat" target="_blank">Cats</a></li>
                	<li><a href="http://cdn.bleacherreport.net/images_root/slides/photos/000/607/604/funny_cat_soccer_problem_crop_650x440.jpg?1294007705" title="Football cat" target="_blank">Football</a></li>
                	<li><a href="http://s3-ec.buzzfed.com/static/enhanced/terminal05/2012/3/28/16/enhanced-buzz-716-1332966122-29.jpg" title="Sleeping cat" target="_blank">Sleeping</a></li>
                	<li><a href="http://copyranter.blogspot.co.uk/2012/02/stock-photo-of-day.html" title="Farming for the future" target="_blank">Stock photos</a></li>
                	<li><a href="http://www.youtube.com/watch?v=fCG3DIZR86c&t=13m41s" title="Whoa. Does that mean my rabbit's dead?" target="_blank">Spaced</a></li>
                </ul>
            </section>

        	<section class="dislikes module">
            	<h2 class="section-heading">5 dislikes</h2>
                <ul>
                	<li><a href="http://images.inmagine.com/img/clover/am026/am11021008020.jpg" title="No" target="_blank">Fold-up bikes</a></li>
                	<li><a href="http://www.adturds.co.uk/2011/12/worst-tv-advert-commercials-2011.html" title="" target="_blank" title="Adturds - adverts that are shit">Bad advertising</a></li>
                	<li><a href="http://wtfqrcodes.com/post/20965941602/se-habla-qr-code" title="What?" target="_blank">QR codes</a></li>
                	<li><a href="http://oilpatchwriting.wordpress.com/2011/01/26/25-most-annoying-buzzwords/" title="25 annoying buzzwords" target="_blank">Buzzwords</a></li>
                	<li><a href="http://olegnax.com/assets/2012/01/974_award.jpg" title="Some ribbons" target="_blank">Award site ribbons</a></li>
                </ul>
            </section>

        	<section class="sites module">
            	<h2 class="section-heading">5 sites</h2>
                <ul>
                    <li><a href="http://thisisnthappiness.com/" title="this isn't happiness" target="_blank">this isn't happiness</a></li>
                	<li><a href="http://ffffound.com/" title="FFFFOUND!" target="_blank">FFFFOUND!</a></li>
                	<li><a href="http://consumeconsume.com/" title="CONSUME CONSUME" target="_blank">Consume Consume</a></li>
                	<li><a href="http://shitlondon.co.uk/" title="Shit London" target="_blank">Shit London</a></li>
                	<li><a href="http://lolcatalog.tumblr.com/" title="LOLCATALOG" target="_blank">LOLCATALOG</a></li>
                </ul>
            </section>
        
        	<section class="people module">
            	<h2 class="section-heading">5 people</h2>
                <ul>
                	<li><a href="https://twitter.com/#!/paul_irish" title="Paul Irish, front-end extraordinaire" target="_blank">Paul Irish</a></li>
                	<li><a href="https://twitter.com/#!/chriscoyier" title="Chris Coyier, CSS-trickery" target="_blank">Chris Coyier</a></li>
                	<li><a href="https://twitter.com/#!/danielmall" title="Dan Mall, design skills" target="_blank">Dan Mall</a></li>
                	<li><a href="https://twitter.com/#!/desandro" title="Dave DeSandro, crazy JavaScriptery" target="_blank">Dave DeSandro</a></li>
                	<li><a href="https://twitter.com/#!/hakimel" title="Hakim El Hattab, creative interactive development" target="_blank">Hakim El Hattab</a></li>
                </ul>
            </section>

        </div>
            
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