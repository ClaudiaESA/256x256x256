/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
<<<<<<< HEAD:src/0x35.old/script.js
  @Last Modified time: 2019-01-31 12:18:31
=======
  @Last Modified time: 2019-01-31 12:05:55
>>>>>>> JadeRichard:src/0x2A/script.js
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function dragMoveHandler (event){
<<<<<<< HEAD:src/0x35.old/script.js
	var target = event.target,
	// keep the dragged position in the data-x/data-y attributes
	x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
=======
	var target = event.target;
    
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || -150) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || -100) + event.dy;   
    console.log(x, y);
    
>>>>>>> JadeRichard:src/0x2A/script.js
	// translate the element
    
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}

function dragEndHandler(event){
	top.postMessage('SUCCESS', '*');
	console.log("dragEndHandler");
}

<<<<<<< HEAD:src/0x35.old/script.js
=======


>>>>>>> JadeRichard:src/0x2A/script.js
function setup(){
	interact('#symboltwo')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler,
		onend: dragEndHandler,
	});
}

