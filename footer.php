<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Genesis Block Theme
 */
?>

	</div><!-- #content -->
</div><!-- #page .container -->

<footer id="colophon" class="site-footer">
	<div class="container">
		<?php if ( is_active_sidebar( 'footer-1' ) || is_active_sidebar( 'footer-2' ) || is_active_sidebar( 'footer-3' ) ) : ?>
			<div class="footer-widgets">
				<h2 class="screen-reader-text"><?php esc_html_e( 'Footer', 'genesis-block-theme' ); ?></h2>

				<?php if ( is_active_sidebar( 'footer-1' ) ) { ?>
					<div class="footer-column">
						<div class="footer-background">
							<?php dynamic_sidebar( 'footer-1' ); ?>
						</div>
					</div>
				<?php } ?>

				<?php if ( is_active_sidebar( 'footer-2' ) ) { ?>
					<div class="footer-column">
						<div class="footer-background">
							<?php dynamic_sidebar( 'footer-2' ); ?>
						</div>
					</div>
				<?php } ?>

				<?php if ( is_active_sidebar( 'footer-3' ) ) { ?>
					<div class="footer-column">
						<div class="footer-background">
							<?php dynamic_sidebar( 'footer-3' ); ?>
						</div>
					</div>
				<?php } ?>

			</div>
		<?php endif; ?>

		<p class="footer-copyright">© 
			<?php echo date('Y'); ?> 
			<a href="https://storiesofantisemitism.com/">Stories of Antisemitism</a>
		</p>
		<p class="managed-by-steckinsights">
			<a href="https://www.steckinsights.com">
				Managed by <img src="https://www.steckinsights.com/wp-content/themes/steckinsights/images/SteckInsightsLogo.png" alt="Steck Insights WordPress Development" class="steckinsights-logo">
			</a>
		</p>
	</div><!-- .container -->
</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>
