(function($){

  var dir = 'uploads/';

  // Ajax request
  $.ajax({
    url:          dir,
    dataType:     'html',
    contentType:  false,
    processData:  false,
    success: function ( data ) {
      $( data )
      // all the types
      .find('tr:nth-child(n+4) > td > a')
      .each( function () {
        var filename = this.href.replace( window.location.host, '' ).replace( 'http://', '' ).replace( '/drop', '');
        $( '.display' ).append( '<img src="' + dir + filename + '">' );
      });
    }
  });

})(jQuery);