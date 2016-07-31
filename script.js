<!--

var pcs = document.lastModified.split(" ")[0].split("/");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = pcs[1] + ' ' + months[eval(pcs[0]) - 1] + ' ' + pcs[2];

onload = function(){
    document.getElementById("lastModified").innerHTML = "Page last updated " + date;
}

//-->