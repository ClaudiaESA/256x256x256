/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:10:15
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);



function weAreOnline (event){
	document.body.classList.add("red");
	
}

function weAreFocus (event){
	document.body.classList.add("red");
	final();
}

function setup(){
	window.ononline = weAreOnline;
	window.onfocus = weAreFocus;

}





