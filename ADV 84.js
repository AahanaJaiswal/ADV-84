canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


img_width = 300;
img_height = 100;
+
varimg_image;

img_x = 100;
img_y = 100;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadimg; // setting a function, onloading this variable
	background_imgTag.src = img_image;   // load image
}

function uploadBackground(){

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		
	 {
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key";
		console.log("alphabet key");
	}
}

function alphabetkey()
{     

	img_image="Alpkey.png";
	add(A-Z,a-z); 

}
function numberkey()
{
	img_image="numkey.png";
	add(0-9); 
	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add(up/down/left/right); 
}
function specialkey()
{
	img_image="spkey.png";
	add(ctrl/alt/esc); 
}
function otherkey()
{
	img_image="otherkey.png";
	add(enter/shift/del);
}
	
