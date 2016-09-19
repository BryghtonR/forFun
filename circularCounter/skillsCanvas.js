//Individual Canvas Atributes
var multiCanvas = [
  {
    title:"HTML",
    canvasName:"canvasHTML",
    skillLevel: 10,
    skillCountA: 0,
    skillCountB: 0
  },{
    title:"CSS",
    canvasName:"canvasCSS",
    skillLevel: 9,
    skillCountA: 0,
    skillCountB: 0
  },{
    title:"JS",
    canvasName:"canvasJS",
    skillLevel: 8,
    skillCountA: 0,
    skillCountB: 0
  },{
    title:"BootStrap",
    canvasName:"canvasBootStrap",
    skillLevel: 9,
    skillCountA: 0,
    skillCountB: 0
  },{
    title:"Angular",
    canvasName:"canvasAngularJS",
    skillLevel: 7,
    skillCountA: 0,
    skillCountB: 0
  },{
    title:"SASS",
    canvasName:"canvasSASS",
    skillLevel: 5,
    skillCountA: 0,
    skillCountB: 0
  },{
    title:"jQuery",
    canvasName:"canvasjQuery",
    skillLevel: 7,
    skillCountA: 0,
    skillCountB: 0
  }
];

var centerX = 100;
var centerY = 100;
var sections = 10;
var inside = 68;
var outside = 80;
var arcLength = .88;
var capWidth = .03;
//do not modify
var sectionsCalc = sections/2;
var span = outside - inside;
var center = inside + span/2

//main canvas generation funtion
$(document).ready(function(){
  function myTimer(){
    for(x=0; x<multiCanvas.length; x++){
      var c=document.getElementById(multiCanvas[x].canvasName);
      var ctx=c.getContext("2d");

      //Constant clearing
      ctx.clearRect(0,0,200,200);

      //arc movement counter and growth speed
      if(multiCanvas[x].skillCountA < multiCanvas[x].skillLevel){
        if (multiCanvas[x].skillCountB <= arcLength){
        multiCanvas[x].skillCountB += multiCanvas[x].skillLevel/50/(multiCanvas[x].skillCountA+1);
        } else {
        multiCanvas[x].skillCountB = 0;
        multiCanvas[x].skillCountA ++;
        }
      }

      //Inner Text
      ctx.fillStyle = "darkblue";
      ctx.font= " 28px Arial";
      ctx.textAlign="center";
      ctx.clearRect(58,95,83,38);
      ctx.fillText(multiCanvas[x].title, 100, 95);
      ctx.textAlign="right";
      ctx.fillText(multiCanvas[x].skillCountA, 88, 125);
      ctx.font= "10px Arial";
      ctx.textAlign="left";
      ctx.fillText(multiCanvas[x].skillCountB.toFixed(1).replace(/^0+/, ''), 88,125);
      ctx.font= "28px Arial";
      ctx.fillText("/" + sections, 101 ,125);

      //Circle Outline
      for(n=0; n<sections+1; n++){
        ctx.lineWidth=2;
        ctx.strokeStyle="darkblue";

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

        //arc fill
        if(n<=multiCanvas[x].skillLevel && n<=multiCanvas[x].skillCountA){
          if(n==multiCanvas[x].skillCountA){
            ctx.beginPath();
            ctx.arc(centerX,centerY,center,(n/sectionsCalc)*Math.PI,((n + multiCanvas[x].skillCountB)/sectionsCalc)*Math.PI);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(centerX,centerY,center,(n/sectionsCalc)*Math.PI,((n + arcLength)/sectionsCalc)*Math.PI);
            ctx.stroke();
          }
        }
      }
    }
  }
  var myVar = setInterval(myTimer, 20);
});
