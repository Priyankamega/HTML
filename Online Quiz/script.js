document.getElementById("student").innerHTML =
localStorage.getItem("studentName");

function result(){

let score=0;

let answers=document.querySelectorAll("input[type='radio']:checked");

answers.forEach(function(ans){
score+=Number(ans.value);
});

let percentage=(score/10)*100;

let msg="";

if(score>=5)
msg="🎉 PASS";
else
msg="❌ FAIL";

document.getElementById("output").innerHTML=
"Score : "+score+"/10<br>"+
"Percentage : "+percentage+"%<br>"+msg;

}