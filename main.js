const API=`https://the-trivia-api.com/v2/questions`;
const container=document.getElementsByClassName("")[0];
const questiondisplay=document.getElementsByClassName("question-display")[0];
const answerbutton=  document.getElementsByClassName("answer-container")[0];
const btn =document.getElementsByClassName("btn");
const nextButton=document.getElementsByClassName("next")[0];
const startbutton=document.getElementById("restart");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
let currentQuestionIndex=0;
let score=0;
let randomNumber ;
function generator(){
  randomNumber = Math.floor(Math.random()*4)+1;
}
async  function loadAPI(){
  option1.disabled=false;
  option2.disabled=false;
  option3.disabled=false;
  option4.disabled=false;
  option1.classList.remove("activegreen");
  option4.classList.remove("activegreen");
  option3.classList.remove("activegreen");
  option2.classList.remove("activegreen");
  option1.classList.remove("activered");
  option2.classList.remove("activered");
  option3.classList.remove("activered");
  option4.classList.remove("activered");
   //randomNumber = Math.floor(Math.random()*4)+1;
   generator();
    let fetchApi= await fetch(API);
    let returnAPI= await fetchApi.json();
    if(currentQuestionIndex==10){
      answerbutton.style.display="none";
      questiondisplay.innerHTML="your Score out of 10 is: "+score;
      nextButton.style.display="none";
      startbutton.style.display="block";
      return;
    }
    displayQuiz(returnAPI);
}
function colorchange(){
  option1.classList.remove("activegreen");
  option4.classList.remove("activegreen");
  option3.classList.remove("activegreen");
  option2.classList.remove("activegreen");
  option1.classList.remove("activered");
  option2.classList.remove("activered");
  option3.classList.remove("activered");
  option4.classList.remove("activered");
}
   
let correct =()=>{
  if(randomNumber == 2 ){
  score++;
  option2.classList.add("activegreen");
  option1.disabled="true";
  option2.disabled="true";
  option3.disabled="true";
  option4.disabled="true";
}
  else if(randomNumber == 1){
    option1.classList.add("activegreen");
    option2.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else if(randomNumber == 3){
    option3.classList.add("activegreen");
    option2.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else{
      option4.classList.add("activegreen");
      option2.classList.add("activered");
      option1.disabled="true";
      option2.disabled="true";
      option3.disabled="true";
      option4.disabled="true";
  }
 }
 let correct1 =()=>{
  if(randomNumber == 3){
  score++;
  option3.classList.add("activegreen");
  option1.disabled="true";
  option2.disabled="true";
  option3.disabled="true";
  option4.disabled="true";
  }
  else if(randomNumber == 2){
    option2.classList.add("activegreen");
    option3.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else if(randomNumber == 1){
    option1.classList.add("activegreen");
    option3.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else{
    option4.classList.add("activegreen");
    option3.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
 }
 let correct2=()=>{
  if(randomNumber == 4){
    option4.classList.add("activegreen");
    option1.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else if(randomNumber == 2){
    option2.classList.add("activegreen");
    option1.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else if(randomNumber == 3){
    option3.classList.add("activegreen");
    option1.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else if(e.target && randomNumber ==1){
      option1.classList.add("activegreen");
      score=score+1;
      option1.disabled="true";
      option2.disabled="true";
      option3.disabled="true";
      option4.disabled="true";
  }
 }
 let correct3 =()=>{
  if(randomNumber == 4){
  score++;
    option4.classList.add("activegreen");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else if(randomNumber == 1){
    option1.classList.add("activegreen");
    option4.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
  else if(randomNumber == 2){
    option2.classList.add("activegreen");
    option4.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
   else{
    option3.classList.add("activegreen");
    option4.classList.add("activered");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
  }
 }
 async function displayQuiz(quizQuestion){
  let indexNumber = currentQuestionIndex+1;
          questiondisplay.innerHTML=`${indexNumber}`+". "+quizQuestion[currentQuestionIndex].question.text;  
        p =  await quizQuestion[currentQuestionIndex].incorrectAnswers;
       
        if(randomNumber == 4){
         
          option1.innerHTML= p[0];
          option2.innerHTML=p[1];
          option3.innerHTML=p[2];
          option4.innerHTML=quizQuestion[currentQuestionIndex].correctAnswer;
        }
         if(randomNumber == 3)
        { 
          option1.innerHTML= p[0];
          option2.innerHTML=p[1];
          option3.innerHTML=quizQuestion[currentQuestionIndex].correctAnswer;
          option4.innerHTML=p[2];
        }
        if(randomNumber == 2)
        {  
          option1.innerHTML= p[0];
          option2.innerHTML=quizQuestion[currentQuestionIndex].correctAnswer;
          option3.innerHTML=p[1];
          option4.innerHTML=p[2];
        }
       if(randomNumber == 1){
          option1.innerHTML=quizQuestion[currentQuestionIndex].correctAnswer; 
          option2.innerHTML=p[0];
          option3.innerHTML=p[1];
          option4.innerHTML=p[2];
        }
      
         currentQuestionIndex++;
       
         option1.addEventListener("click",correct2);
         option2.addEventListener("click",correct);
         option3.addEventListener("click",correct1);
         option4.addEventListener("click",correct3);
        console.log(quizQuestion);   
        console.log(randomNumber)
       console.log(score);
      
  }
 
function startQuiztart(){
  option1.disabled="false";
  option2.disabled="false";
  option3.disabled="false";
  option4.disabled="false";
   currentQuestionIndex=0;
   score=0;
   option1.classList.remove("activegreen");
  option4.classList.remove("activegreen");
  option3.classList.remove("activegreen");
  option2.classList.remove("activegreen");
  option1.classList.remove("activered");
  option2.classList.remove("activered");
  option3.classList.remove("activered");
  option4.classList.remove("activered");
  
   loadAPI();
   answerbutton.style.display="block";
   nextButton.style.display="block";
   startbutton.style.display="none";
}
onload=()=>{
  startbutton.style.display="none";
  option1.classList.remove("activegreen");
  option4.classList.remove("activegreen");
  option3.classList.remove("activegreen");
  option2.classList.remove("activegreen");
  option1.classList.remove("activered");
  option2.classList.remove("activered");
  option3.classList.remove("activered");
  option4.classList.remove("activered");
  loadAPI();
}
 nextButton.addEventListener("click",loadAPI);
 startbutton.addEventListener("click",startQuiztart);
 
