<?php

$name = basename(__FILE__, ".php") ; 
$callback = str_replace("-", "_", $name);

function svjat_image_selector_block ($attributes, $content ) { // comes from file name _ instead of -
    ob_start();
    echo '<img src=' . wp_get_attachment_image_src($attributes['bgImageId'])[0] . '>';
    return ob_get_clean();
    }

    $$name = new SvjatRGB($name, $callback); 