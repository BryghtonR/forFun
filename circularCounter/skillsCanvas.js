var c=document.getElementById("htmlSkill");
var ctx=c.getContext("2d");

var centerX = 100;
var centerY = 100;
var sections = 10;
var inside = 54;
var outside = 72;
var arcLength = .88;
var capWidth = .03;
var skillLevel = 7;
//do not modify
var sectionsCalc = sections/2;
var span = outside - inside;
var center = inside + span/2
//main rendering
for(n=0; n<sections+1; n++){
  ctx.lineWidth=2;//modifiable
  ctx.strokeStyle="darkblue";//modifiable border color

  //outside arc
  ctx.beginPath();
  ctx.arc(centerX,centerY,outside,(n/sectionsCalc)*Math.PI,((n+arcLength)/sectionsCalc)*Math.PI);
  ctx.stroke();

  //inside arc
  ctx.beginPath();
  ctx.arc(centerX,centerY,inside,(n/sectionsCalc)*Math.PI,((n+arcLength)/sectionsCalc)*Math.PI);
  ctx.stroke();

  ctx.lineWidth=span;

  //start arc cap
  ctx.beginPath();
  ctx.arc(centerX,centerY,center,(n/sectionsCalc)*Math.PI,((n+capWidth)/sectionsCalc)*Math.PI);
  ctx.stroke();

  //end arc cap
  ctx.beginPath();
  ctx.arc(centerX,centerY,center,((n+arcLength-capWidth)/sectionsCalc)*Math.PI,((n+arcLength)/sectionsCalc)*Math.PI);
  ctx.stroke();
}

//Progressive Fill
$(document).ready(function(){
  var myVar = setInterval(myTimer, 10);
  var m= 0;
  var d = 0;
  function myTimer() {
    if(m < skillLevel){
      if (d <= arcLength){
      d += skillLevel/100/(m+1);
      } else {
      d = 0;
      m ++;
      }
      ctx.beginPath();
      ctx.arc(centerX,centerY,center,(m/sectionsCalc)*Math.PI,((m+d)/sectionsCalc)*Math.PI);
      ctx.stroke();
    }
    //Inner Text
    ctx.fillStyle = "darkblue";
    ctx.font= "28px Arial";
    ctx.textAlign="center";
    ctx.clearRect(58,95,83,38);
    ctx.fillText("HTML", 100, 95);
    ctx.textAlign="right";
    ctx.fillText(m, 88, 125);
    ctx.font= "10px Arial";
    ctx.textAlign="left";
    ctx.fillText(d.toFixed(1).replace(/^0+/, ''), 88,125);
    ctx.font= "28px Arial";
    ctx.fillText("/" + sections, 101 ,125);
  }
});
