<?php

$name = basename(__FILE__, ".php") ; 
$callback = str_replace("-", "_", $name);

function svjat_sample_block ($attributes, $content ) { // comes from file name _ instead of -
    ob_start();
    return ob_get_clean();
}

$$name = new SvjatRGB($name, $callback); 