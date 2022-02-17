<?php
function deleteDir($dirPath) {
    if (! is_dir($dirPath)) {
        throw new InvalidArgumentException("$dirPath must be a directory");
    }
    if (substr($dirPath, strlen($dirPath) - 1, 1) != '/') {
        $dirPath .= '/';
    }
    $files = glob($dirPath . '*', GLOB_MARK);
    foreach ($files as $file) {
        if (is_dir($file)) {
            deleteDir($file);
        } else {
            unlink($file);
        }
    }
    if(rmdir($dirPath)) {
        echo "Block successfully removed!";
    } else {
        echo "Something went wrong!";
    };
}

$block_to_remove = dirname(__FILE__) . "\\src\\blocks\\" . $args[0];

deleteDir($block_to_remove);

function replace_string_in_file($filename, $string_to_replace, $replace_with){
    $content = file_get_contents($filename);
    $content_chunks = explode($string_to_replace, $content);
    $content = implode($replace_with, $content_chunks);
    file_put_contents($filename, $content);
    }

$filename = realpath(dirname(__FILE__)) . '\\src\\index.js';
$string_to_replace = "\n\nimport './blocks/" . $args[0] . "/" . $args[0] . ".js';
import './blocks/" . $args[0] . "/" . $args[0] . ".scss';";
$replace_with = '';

replace_string_in_file($filename, $string_to_replace, $replace_with);


