<?php

$name = basename(__FILE__, ".php") ; 
$callback = str_replace("-", "_", $name);

function svjat_dynamic_block ($attributes, $content ) { // comes from file name _ instead of -
    $posts = get_posts( ['category'=> $attributes['selectedCategory']]
    );
    ob_start();
    foreach ($posts as $post) {
    echo '<h1 class="svjat-dynamic-block">' . $post->post_title .'</h1>';
    }
    return ob_get_clean();
    }

    $$name = new SvjatRGB($name, $callback); 