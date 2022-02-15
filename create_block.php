<?php
/**
* Copy a file, or recursively copy a folder and its contents
* @author Aidan Lister <aidan@php.net>
    * @version 1.0.1
    * @link http://aidanlister.com/2004/04/recursively-copying-directories-in-php/
    * @param string $source Source path
    * @param string $dest Destination path
    * @param int $permissions New folder creation permissions
    * @return bool Returns true on success, false on failure
    */
    function xcopy($source, $dest, $permissions = 0755) {
        if(!is_dir($dest)) {
        $sourceHash = hashDirectory($source);
        // Check for symlinks
        if (is_link($source)) {
        return symlink(readlink($source), $dest);
        }

        // Simple copy for a file
        if (is_file($source)) {
        return copy($source, $dest);
        }

        // Make destination directory
        if (!is_dir($dest)) {
        mkdir($dest, $permissions);
        }

        // Loop through the folder
        $dir = dir($source);
        while (false !== $entry = $dir->read()) {
        // Skip pointers
        if ($entry == '.' || $entry == '..') {
        continue;
        }

        // Deep copy directories
        if($sourceHash != hashDirectory($source."/".$entry)){
        xcopy("$source/$entry", "$dest/$entry", $permissions);
        }
        }
        
        // Clean up
        $dir->close();

        echo "Block succesfully created!";
        
        return true;
        } else {
            echo "Block already exists!";
        }
    }

    // In case of coping a directory inside itself, there is a need to hash check the directory otherwise and infinite loop of coping is generated

function hashDirectory($directory){
    if (! is_dir($directory)){ return false; }

    $files = array();
    $dir = dir($directory);

    while (false !== ($file = $dir->read())){
    if ($file != '.' and $file != '..') {
    if (is_dir($directory . '/' . $file)) { $files[] = hashDirectory($directory . '/' . $file); }
    else { $files[] = md5_file($directory . '/' . $file); }
    }
    }

    $dir->close();

    return md5(implode('', $files));
}      

$new_block = dirname(__FILE__) . "/src/blocks/" . $argv[1];
$boilerplate = dirname(__FILE__) . "\src\boilerplate";
    
xcopy($boilerplate, $new_block);

rename(realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/boilerplate.js', realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/' . $argv[1] . '.js');
rename(realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/boilerplate.scss', realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/' . $argv[1] . '.scss');
rename(realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/boilerplate.php', realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/' . $argv[1] . '.php');

function replace_string_in_file($filename, $string_to_replace, $replace_with){
    $content = file_get_contents($filename);
    $content_chunks = explode($string_to_replace, $content);
    $content = implode($replace_with, $content_chunks);
    file_put_contents($filename, $content);
    }

$filename_php = realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/' . $argv[1] . '.php';
$string_to_replace = "boilerplate";
$replace_with_php = str_replace("-", "_", $argv[1]);

$filename_js= realpath(dirname(__FILE__)) . '/src/blocks/' . $argv[1] . '/' . $argv[1] . '.js';
$replace_with_js = $argv[1];

replace_string_in_file($filename_php, $string_to_replace, $replace_with_php);
replace_string_in_file($filename_js, $string_to_replace, $replace_with_js);

$import = "\n\nimport './blocks/" . $argv[1] . "/" . $argv[1] . ".js';
import './blocks/" . $argv[1] . "/" . $argv[1] . ".scss';";
file_put_contents(realpath(dirname(__FILE__)) . "/src/index.js", $import, FILE_APPEND);