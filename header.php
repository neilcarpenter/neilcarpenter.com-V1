<?php
/**
 *
 * The header for our theme.
 *
 * Everything after the CSS files, to end of <header>
 *
 */
?>
  <script src="<?php bloginfo('template_directory');?>/js/libs/modernizr-2.0.6.min.js"></script>
  <script type="text/javascript" src="http://use.typekit.com/gzl0awp.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

</head>

<body>

  <div id="container" class="clearfix">
    <header>
    	
        <h1 id="logo"><a href="<?php bloginfo('siteurl');?>" title="Go home">Neil<br/>Carpenter</a></h1>

		<h2 id="desc" class="">Design <span class="amp">&amp;</span> front-end development</h2>

        <div class="nav-control">
          <a href="#main-nav">Navigation</a>
        </div>
        
		<nav id="main-nav">
        	<ul>
				<li<?php 
					if (is_page('About'))  
					{ 
					echo " class=\"current_page_item\"";
					}?>>
					<a href="<?php bloginfo('url') ?>/about/" title="About me">About</a>
				</li>
				<li<?php 
					if (is_page('Work') || is_page_template('page-work-single.php'))  
					{ 
					echo " class=\"current_page_item\"";
					}?>>
					<a href="<?php bloginfo('url') ?>/work/" title="Recent work">Work</a>
				</li>
				<li<?php 
					if (is_page('Labs') || is_page_template('page-labs-single.php'))  
					{ 
					echo " class=\"current_page_item\"";
					}?>>
					<a href="<?php bloginfo('url') ?>/labs/" title="Labs">Labs</a>
				</li>				
				<li<?php 
					if (is_page('Blog') || is_page_template('page-blog-thoughts.php') || is_page_template('page-blog-snaps.php') || is_page_template('page-blog-sites.php') || in_category('Thoughts'))  
					{ 
					echo " class=\"current_page_item\"";
					}?>>
					<a href="<?php bloginfo('url') ?>/blog/" title="Blog">Blog</a>
				</li>
				<li class="last-nav<?php 
					if (is_page('Contact'))  
					{ 
					echo " current_page_item";
					}?>">
					<a href="<?php bloginfo('url') ?>/contact/" title="Contact">Contact</a>
				</li>
            </ul>
        </nav>
        
    </header>