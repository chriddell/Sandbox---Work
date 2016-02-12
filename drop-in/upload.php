<?php

// Set some vars
$target_dir = "uploads/";
$uploadOk = 1;
$max_file_size = 50000000;

// Loop through each file
for ( $i = 0; $i < count( $_FILES[ 'uploadedFiles' ][ 'name' ]); $i++ ) {
  // Get the temp file path
  $temp_file = $_FILES[ 'uploadedFiles' ][ 'tmp_name' ][ $i ];
  // Get the target path
  $target_file = $target_dir . $_FILES[ 'uploadedFiles' ][ 'name' ][ $i ];

  // Check if file already exists
  if ( file_exists( $target_file ) ) {
    echo 'Sorry, ' . $target_file . ' already exists. ';
    $uploadOk = 0;
  }

  // Check file size
  if ($_FILES[ 'uploadedFiles' ][ 'size' ][ $i ] > $max_file_size) {
    echo 'Sorry, your file is too large.';
    $uploadOk = 0;
  }

  // Make sure we have a filepath
  if ( $temp_file != '' && $uploadOk = 1) {

    // Upload to dir
    if ( move_uploaded_file( $temp_file, $target_file ) ) {
      echo 'File uploaded! Alright!';
    }
  }
}

?>