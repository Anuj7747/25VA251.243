function result(){
   document.getElementById('text').style.color="red";
  // document.getElementsByTagName('body')[0].style.backgroundColor="yellow";
   // to change random color then follow this one
   // document.getElementsByTagName('body')[0].style.backgroundColor="#" + Math.floor(Math.random() * 16777215).toString(16);
}

let changeBkg=document.getElementsByTagName('body')[0];
let button=document.getElementById('btn');

function changeBKG(){
   changeBkg.style.backgroundColor="blue";
}
button.addEventListener("click",changeBKG);