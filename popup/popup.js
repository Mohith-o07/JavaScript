button=document.querySelector('button');
popup=document.querySelector('.popup-wrapper');
clos=document.querySelector('.close');
button.addEventListener('click',(e)=>{
    popup.style.display='block';
});
clos.addEventListener('click',()=>{
popup.style.display='none';
});
popup.addEventListener('click',e=>{
popup.style.display='none';
});