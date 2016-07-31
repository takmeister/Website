<!--

var pcs = document.lastModified.split(" ")[0].split("/");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = pcs[1] + ' ' + months[eval(pcs[0]) - 1] + ' ' + pcs[2];
var night = false; //Is night mode on?
var speed = 1000; //Speed of animation
var isAnimating = false; //Don't execute further commands when animating

onload = function(){
    document.getElementById("lastModified").innerHTML = "Page last updated " + date;
}

function nightmode(){

		if ((night == false) && (isAnimating == false)){ //Turn out the lights
			//document.getElementById("website").style.background = "#000000";
			//document.getElementById("website").style.color = "#FFFFFF";
			isAnimating = true;
			animateDark(0);
		}

		else if ((night == true) && (isAnimating == false)) {
			isAnimating = true;
			animateLight(0);
		}
}

function animateDark(i){
	if (i < 255){
		v=255-i;
		document.getElementById("website").style.background = "rgb("+ v.toString(10) + "," + v.toString(10) + "," + v.toString(10) + ")";
		document.getElementById("website").style.color = "rgb("+ i.toString(10) + "," + i.toString(10) + "," + i.toString(10) + ")";
		document.getElementById("spacer").style.background = "rgb("+ Math.round(207-(207/255)*i).toString(10) + "," + Math.round(20+((36-20)/255)*i).toString(10) + "," + Math.round(43+((125-43)/255)*i).toString(10) + ")";
		document.getElementById("topheader").style.background = "rgb("+ Math.round(207-(207/255)*i).toString(10) + "," + Math.round(20+((36-20)/255)*i).toString(10) + "," + Math.round(43+((125-43)/255)*i).toString(10) + ")";
		document.getElementById("topheader-right").style.background = "rgb("+ Math.round(207-(207/255)*i).toString(10) + "," + Math.round(20+((36-20)/255)*i).toString(10) + "," + Math.round(43+((125-43)/255)*i).toString(10) + ")";
		document.getElementById("footer").style.background = "rgb("+ Math.round(207-(207/255)*i).toString(10) + "," + Math.round(20+((36-20)/255)*i).toString(10) + "," + Math.round(43+((125-43)/255)*i).toString(10) + ")";
		document.body.style.background = "rgb("+ Math.round(207-(207/255)*i).toString(10) + "," + Math.round(20+((36-20)/255)*i).toString(10) + "," + Math.round(43+((125-43)/255)*i).toString(10) + ")";
		i++;
		setTimeout(function(){animateDark(i);},1000/speed);
	}
	else {
		isAnimating = false;
		night = !night;
	}
}

function animateLight(i){
	if (i < 255){
		v=255-i;
		document.getElementById("website").style.background = "rgb("+ i.toString(10) + "," + i.toString(10) + "," + i.toString(10) + ")";
		document.getElementById("website").style.color = "rgb("+ v.toString(10) + "," + v.toString(10) + "," + v.toString(10) + ")";
		document.getElementById("spacer").style.background = "rgb("+ Math.round((207/255)*i).toString(10) + "," + Math.round(36-((36-20)/255)*i).toString(10) + "," + Math.round(125-((125-43)/255)*i).toString(10) + ")";
		document.getElementById("topheader").style.background = "rgb("+ Math.round((207/255)*i).toString(10) + "," + Math.round(36-((36-20)/255)*i).toString(10) + "," + Math.round(125-((125-43)/255)*i).toString(10) + ")";
		document.getElementById("topheader-right").style.background = "rgb("+ Math.round((207/255)*i).toString(10) + "," + Math.round(36-((36-20)/255)*i).toString(10) + "," + Math.round(125-((125-43)/255)*i).toString(10) + ")";
		document.getElementById("footer").style.background = "rgb("+ Math.round((207/255)*i).toString(10) + "," + Math.round(36-((36-20)/255)*i).toString(10) + "," + Math.round(125-((125-43)/255)*i).toString(10) + ")";
		document.body.style.background = "rgb("+ Math.round((207/255)*i).toString(10) + "," + Math.round(36-((36-20)/255)*i).toString(10) + "," + Math.round(125-((125-43)/255)*i).toString(10) + ")";
		i++;
		setTimeout(function(){animateLight(i);},1000/speed);
	}
	else {
		isAnimating = false;
		night = !night;
	}
}

//-->