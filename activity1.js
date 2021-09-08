var score=0;
function update_Score(){
  score+=1; 
  document.getElementById("h2").innerHTML="score: "+score;
}
function save(){
    localStorage.setItem("score",score);
}
function next_page(){
    window.location="activity_2.html";
}