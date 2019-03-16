var t=document.querySelector("button");
var isRed=true;
t.addEventListener("click",function(){
  if(isRed)
  {
    document.body.style.background="red";
  }
  else
  {
    document.body.style.background="green";
  }
  isRed=!isRed;
});