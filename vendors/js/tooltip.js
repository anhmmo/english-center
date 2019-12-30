
     var tooltip = document.getElementById("tooltip");

window.onmousemove = function(e){
  var x = e.clientX;
  var y = e.clientY;
  tooltip.style.top = (y+10)+"px";
  tooltip.style.left = (x+10)+"px";
}
