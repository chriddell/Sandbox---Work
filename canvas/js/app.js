/**
 * Learning HTML5 canvas element
 * Dev: Chris Liddell @ OTM
 */

var mDown = false;
var Color = 'blue';

var canvas = document.getElementById( 'learner' );
var ctx = canvas.getContext( '2d' );

canvas.onselectstart = function() { return false; };
canvas.unselectable = "on";
canvas.style.MozUserSelect = "none";

canvas.onmousedown = function( e ) {
  mDown = true;
  ctx.strokeStyle = Color;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo( e.pageX - Position( canvas ).left, e.pageY - 5 );
}
    
canvas.onmouseup = function() { 
  mDown = false; 
};

canvas.onmousemove = function( e ) { 

  if ( mDown ) {

    ctx.lineTo( e.pageX - Position( canvas ).left, e.pageY - 5 );
    ctx.stroke();

  }

}

function Position(el) {

  var position = { left: 0, top: 0 };

  if (el) {

    if (!isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {

      position.left += el.offsetLeft;
      position.top += el.offsetTop;

    }

  }

  return position;
}

function init() { 

  resizeCanvas();         //resize the canvas-Element
  window.onresize = function()  { resizeCanvas(); }

}

function resizeCanvas() {

  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  
}