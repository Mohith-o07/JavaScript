form=document.querySelector('.quiz-form');
result=document.querySelector('.result');
trueoptions=['B','A','B','B','A']
form.addEventListener('submit',e=>{
    e.preventDefault();
    setoptions=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]
    let score=0;
    setoptions.forEach((answer,index)=>{
        if(answer===trueoptions[index]){
            score+=20;
        }
    });
    scrollTo(0,0);
    result.classList.remove('d-none');
    //console.log(score);
    let i=0;
   const timer= setInterval(()=>{
        result.querySelector('span').textContent=`${i}%`;
        if(i==score)
        clearInterval(timer);
        else
        i++;
    },10);
});