<?php
/**
* Plugin Name: Ajaxify for WordPress
* Description: Ajaxifies the WP website. Forked from https://github.com/browserstate/ajaxify
* Version: 1.0
* Author: Sorin Coza
* Author URI: http://sorincoza.com
*
* 
*/

add_action( 'wp_enqueue_scripts', 'ajaxify_wp_scripts' );



function ajaxify_wp_scripts(){
	
	// wp_enqueue_script( 'jquery-scrollto', '//balupton.github.io/jquery-scrollto/lib/jquery-scrollto.js', array('jquery'), '', true );
	wp_enqueue_script( 'history-js', '//browserstate.github.io/history.js/scripts/bundled/html4+html5/jquery.history.js', array('jquery'), '', true );
	wp_enqueue_script( 'ajaxify', plugins_url( 'ajaxify-html5.js', __FILE__ ) , array('jquery', 'history-js'), '', true );

}