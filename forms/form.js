document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here  
form=document.querySelector('form');
input=document.querySelector('#username');
feedback=document.querySelector('.feedback');
const pattern=/^[a-zA-Z]{6,12}$/;
form.addEventListener('submit',e=>{
e.preventDefault();
const user=form.username.value;
if(pattern.test(user))
feedback.textContent='username is valid!';
else
feedback.textContent='username must contain only uppercase and lowercase letters with length l in range 6<=l<=12';
//console.log(input.value);
console.log(form.username.value);
});
//live feedback..
form.username.addEventListener('keyup',e=>{
if(pattern.test(e.target.value))
{
    e.target.setAttribute('class','success');
    // input.classList.remove('failure');
    // input.classList.add('success');
    //console.log('passed');
    console.log(e);
}
else
{
    form.username.setAttribute('class','failure');
    // input.classList.remove('success');
    // input.classList.add('failure');
    //console.log('failed');
    console.log(e);
}
});
});