var array = [
  {message:"HULLO", color:"red"}, 
  {message:"Hi there!", color:"blue"},
  {message:"Sup homie", color:"green"}
];

var newDiv1 = document.createElement("div");
newDiv1.style.height = "50px";
newDiv1.style.width = "300px";
document.body.appendChild(newDiv1);

for (var i = 0; i < array.length; i++) {
  var obj = array[i];
  var newDiv = document.createElement("div");
  newDiv.style.height = "100px";
  newDiv.style.width = "300px";
  newDiv.style.backgroundColor = obj.color; 
  document.body.appendChild(newDiv);
  const message = obj.message;
  newDiv.addEventListener("click",function(){newDiv1.innerHTML = message;})
}