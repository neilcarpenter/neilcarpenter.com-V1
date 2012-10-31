<?php
/**
 *
 * The footer for our theme.
 *
 * <footer> and jQuery
 *
 */
?>
  </div> <!--! end of #container -->

    <footer>
		
        <div id="footer-links">
        
            <a href="#" id="back-to-top" title="Back to top">Get back up there!</a>
            
            <a href="#footer-content" id="toggle-footer" title="See more stuff"><span>o</span></a>
            
            <p>☺<span class="disappearer"> oh haaaaaaaaaai</span></p>
            
		</div>
        
        <div id="expanded-footer" class="clearfix">
        
            <div id="footer-content">
    
                <div class="footer-intro">
                    <p>Generic footer stuff here.</p>            
                    <p class="about-site">This site is a fully responsive design with a heavy reliance on CSS for presentation. Built on <a href="http://wordpress.org/" title="WordPress.org" target="_blank">WordPress</a>, fonts by <a href="https://typekit.com/" title="Typekit" target="_blank">Typekit</a>, icons by <a href="http://pictos.cc/" title="Pictos" target="_blank">Pictos</a>. Read more stuff <a href="http://neilcarpenter.com/2012/05/making-this-site/" title="Making this site">about this site</a>.</p>
                    <div class="follow-button"></div>
                </div>
    
                <section class="footer-nav">
                    <h1 class="section-heading">Sections</h1>
                    <ul>
						<li><a href="<?php bloginfo('siteurl');?>" title="Go home">Home</a></li>
						<li><a href="<?php bloginfo('siteurl');?>/about/" title="Go to about">About</a></li>
						<li><a href="<?php bloginfo('siteurl');?>/work/" title="Go to work">Work</a></li>
                        <li><a href="<?php bloginfo('siteurl');?>/labs/" title="Go to labs">Labs</a></li>
						<li><a href="<?php bloginfo('siteurl');?>/blog/" title="Go to blog">Blog</a></li>
						<li><a href="<?php bloginfo('siteurl');?>/contact/" title="Go to contact">Contact</a></li>
                    </ul>            
                </section>
                
                <section class="footer-contacts">
                    <h1 class="section-heading">Contact</h1>
                    <ul>
                        <li><a href="mailto:hi@neilcarpenter.com" title="Email me">hi@neilcarpenter.com</a></li>
                        <li><a href="tel:00447854650169" title="Call me!">07854 650 169</a></li>
                        <li><a href="http://twitter.com/#!/neilcarpenter" title="Me on Twitter" target="_blank">@neilcarpenter</a></li>
			<li class="footer-googleplus"><a href="https://plus.google.com/u/0/114713464020581388501?rel=author" target="_blank" title="Me on Google+">Google+</a></li>
                    </ul>            
                </section>
                        
            </div><!--! end .footer-content -->
            
		</div><!--! end #expanded-footer -->
        
    </footer>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="<?php bloginfo('template_directory');?>/js/libs/jquery-1.7.1.min.js"><\/script>')</script>