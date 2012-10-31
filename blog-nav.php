<?php
/**
 *
 * The template for displaying blog nav buttons
 *
 */
?>
	<div class="module buttons clearfix<?php if (in_category('Thoughts'))
	{
	echo ' single-thought';
	}
	?>">
		<a<?php 
			if (is_page('Thoughts') || in_category('Thoughts'))  
			{ 
			echo " class=\"current\"";
			}?>
			href="<?php bloginfo('url') ?>/blog/thoughts/" title="View thoughts">Thoughts</a>
		<a<?php 
			if (is_page('Snaps'))  
			{ 
			echo " class=\"current\"";
			}?>
			href="<?php bloginfo('url') ?>/blog/snaps/" title="View snaps">Snaps</a>
		<a<?php 
			if (is_page('Sites'))  
			{ 
			echo " class=\"current\"";
			}?>
			href="<?php bloginfo('url') ?>/blog/sites/" title="View sites">Sites</a>
	</div>
