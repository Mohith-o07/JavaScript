form=document.querySelector('.quiz-form');
result=document.querySelector('.result');
trueanswers=[54,45,27,72,27,24];
form.addEventListener('submit',e=>{
    e.preventDefault();
    setanswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value]
    let score=0;
    setanswers.forEach((answer,index)=>{
        if(answer==trueanswers[index]){
            score+=1;
        }
        else{
        score-=0.5;
        }
    });
    console.log(score);
    scrollTo(0,0);
    result.classList.remove('d-none');
    //console.log(score);
    let i=-3;
   const timer= setInterval(()=>{
        result.querySelector('span').textContent=`${i}/6`;
        if(i===score)
        clearInterval(timer);
        else
        i+=0.5;
    },10);
});