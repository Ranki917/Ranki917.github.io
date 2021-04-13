var response1;
var response2;
var response3;

function one(){
  response1=prompt("请填写答案");
document.getElementById("answer1").innerText=response1;
}

function two(){
   response2=prompt("请填写答案");
document.getElementById("answer2").innerText=response2;
}

function three(){
   response3=prompt("请填写答案");
document.getElementById("answer3").innerText=response3;
}



function final(){
  if (response1==="工") {
    if (response2==="具") {
      if (response3==="人") {
        alert("恭喜你，工具人！")
      }
      else {
        alert("请重新做答")
      }
    }
    else {
      alert("请重新做答")
    }
  }
  else {
    alert("请重新做答")
  }
};
