  $( function() {
    $( "#draggable" ).draggable();
  } );
    $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
      $( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    $( "#tabs" ).tabs();
  } );



    $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );



  $( function() {
    function position() {
      $( ".positionable" ).position({
        of: $( "#parent" ),
        my: $( "#my_horizontal" ).val() + " " + $( "#my_vertical" ).val(),
        at: $( "#at_horizontal" ).val() + " " + $( "#at_vertical" ).val(),
        collision: $( "#collision_horizontal" ).val() + " " + $( "#collision_vertical" ).val()
      });
    }
 
    $( ".positionable" ).css( "opacity", 0.5 );
 
    $( "select, input" ).on( "click keyup change", position );
 
    $( "#parent" ).draggable({
      drag: position
    });
 
    position();
  } );