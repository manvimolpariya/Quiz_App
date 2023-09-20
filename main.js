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
async  function loadAPI(){
  option1.disabled=false;
  option2.disabled=false;
  option3.disabled=false;
  option4.disabled=false;
  option1.classList.remove("activered");
  option2.classList.remove("activered");
  option3.classList.remove("activered");
  option4.classList.remove("activegreen");
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
 function check(){
    option1.classList.add("activered");
    option4.classList.add("activegreen");
    option1.disabled="true";
    option2.disabled="true";
    option3.disabled="true";
    option4.disabled="true";
    
 }
 function check1(){
  option2.classList.add("activered");
  option4.classList.add("activegreen");
  option1.disabled="true";
  option2.disabled="true";
  option3.disabled="true";
  option4.disabled="true";
    
 }
 function check2(){
  option3.classList.add("activered");
  option4.classList.add("activegreen");
  option1.disabled="true";
  option2.disabled="true";
  option3.disabled="true";
  option4.disabled="true";
    
 }
 function check3(){
  option4.classList.add("activegreen");
  option1.disabled="true";
  option2.disabled="true";
  option3.disabled="true";
  option4.disabled="true";
     score++;
 }
 
 async function displayQuiz(quizQuestion){
    let indexNumber = currentQuestionIndex+1;
          questiondisplay.innerHTML=`${indexNumber}`+". "+quizQuestion[currentQuestionIndex].question.text;  
        p =  await quizQuestion[currentQuestionIndex].incorrectAnswers;
         option1.innerHTML= p[0];
         option2.innerHTML=p[1];
         option3.innerHTML=p[2];
         option4.innerHTML=quizQuestion[currentQuestionIndex].correctAnswer;
         currentQuestionIndex++;
         option1.addEventListener("click",check);
         option2.addEventListener("click",check1);
         option3.addEventListener("click",check2);
         option4.addEventListener("click",check3);
        console.log(quizQuestion);   
      
  }
 
function startQuiztart(){
  option1.disabled="false";
  option2.disabled="false";
  option3.disabled="false";
  option4.disabled="false";
   currentQuestionIndex=0;
   score=0;
   loadAPI();
   answerbutton.style.display="block";
   nextButton.style.display="block";
   startbutton.style.display="none";
}
onload=()=>{
  startbutton.style.display="none";
 
  loadAPI();
}
 nextButton.addEventListener("click",loadAPI);
 startbutton.addEventListener("click",startQuiztart);
 
