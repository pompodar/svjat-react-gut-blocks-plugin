<?php

/**
 * Plugin Name: Svjat React Gut Blocks Plugin
 * Description: It's is a Gutenberg plugin enabling creation multiply React Guttenberg blogs.
 * Author: Svjatoslav Kachmar 
 * Version: 1.0.0
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register blocks
class SvjatRGB {

protected $name;
protected $callback; 
    
function __construct($name, $callback) {
    $this->name = $name;
    $this->callback = $callback;
    add_action( 'init', array($this, 'adminAssets'));
    }
    function adminAssets() {
        wp_register_script( 'svjatJS', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor') );
        wp_register_style( 'svjatCSS', plugin_dir_url(__FILE__) . 'build/index.css' );
        register_block_type(
            'svjat-r-g-b/' . $this->name, array(
            // Enqueue blocks.style.build.css on both frontend & backend. Unique name required!
            'style' => 'svjatCSS',
            // Enqueue blocks.build.js in the editor only. Unique name required!
            'editor_script' => 'svjatJS',
            // Enqueue blocks.editor.build.css in the editor only. Unique name required!
            'editor_style' => 'my_block-cgb-block-editor-css',
            // Make block dynamic!
            'render_callback' => $this->callback,
            )
        );
    }
}
// Fetch PHP files throughout blocks folders
foreach (scandir(realpath(__DIR__ . "/src/blocks/")) as $folders) {
    if (strpos($folders, 'block') !== false) {
        $files[] = $folders;
        foreach (array_unique($files) as $file) {
            $address = '/src/blocks/' . $file . '/' . $file . '.php';
            require_once(dirname(__FILE__). $address);
        }
    }
}
    

// wp-cli

if ( defined( 'WP_CLI' ) && WP_CLI ) {
    class WP_CLI_Commands {
        /**
         * create/remove blocks CLI
         * 
         * ## EXAMPLES
         *
         *     wp rgb create
         *
         *
         * @when after_wp_load
         */
        function create( $args, $assoc_args ) {
            require_once(dirname(__FILE__). "/create_block.php");
        }

        function remove( $args, $assoc_args ) {
            require_once(dirname(__FILE__). "/remove_block.php");
        }
    }
    WP_CLI::add_command( 'rgb', 'WP_CLI_Commands' );
}