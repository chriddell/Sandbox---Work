$( document ).ready( function() {

  // setup click function
  $( '.video-nav li' ).click( function() {

    // get the id
    var selectedId = $( this ).data( 'id' );

    // iterate through the videos
    $( '.video' ).each( function() {

      // get the video's data-id
      var idToMatch = $( this ).data( 'id' );
      // if it matches our selectors id
      if ( idToMatch === selectedId ) {
        // show video
        $( this ).attr( 'data-visible', 'visible' );
      } else {
        // hide video
        $( this ).attr( 'data-visible', 'hidden' );
      }
      
    });
  });

});