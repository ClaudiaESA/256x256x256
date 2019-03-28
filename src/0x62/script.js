/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:10:49
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);


function tapHandler (event){
	//top.postMessage('SUCCESS', '*');
	console.log("tapHandler");

	dragMoveHandler(); //
}


function dragMoveHandler (event){
	
	var target = event.target;
	
	// keep the dragged position in the data-x/data-y attributes

	target.style.background = "orange";



	/*target.setAttribute('data-x', 'data-y', "bonjour")    
	console.log(target.getAttribute('data-x', 'data-y'));*/


	
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	console.log("dragMoveHandler");
	top.postMessage('SUCCESS', '*');


}


function setup(){


	var scale = 1,
	    gestureArea = document.querySelector('#pinch-area'),
	    scaleElement = document.querySelector('#toPinch'),
	    resetTimeout;

	interact(gestureArea)
	  .gesturable({
	    onmove: function (event) {
	      scale = scale * (1 + event.ds);
	      scaleElement.style.webkitTransform =
	      scaleElement.style.transform =
	        'scale(' + scale + ')';

	    },
	    /*onend: function (event) {
	      alert("YO");
	    }*/
});



	interact('.trigger')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler
	});
}

//OU:

//dans setup => var trigger = interact ('.trigger');
//trigger.draggable({onmove: dragMoveHandler});
