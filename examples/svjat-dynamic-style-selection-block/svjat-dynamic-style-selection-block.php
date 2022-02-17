<?php

$name = basename(__FILE__, ".php") ; 
$callback = str_replace("-", "_", $name);

function svjat_dynamic_style_selection_block ($attributes, $content ) { // comes from file name _ instead of -
    $posts = get_posts( ['category'=> $attributes['selectedCategory']]
    );
    ob_start();
    foreach ($posts as $post) {
        echo '<h1 class="svjat-dynamic-style-selection-block" style="background-color: ' . $attributes["favoriteColor"] . '">' .
        $post->post_title
        .'</h1>';
    }
    return ob_get_clean();
}

$$name = new SvjatRGB($name, $callback);