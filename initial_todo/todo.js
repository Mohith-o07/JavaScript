ul=document.querySelector('ul');
button=document.querySelector('button');
button.addEventListener('click',()=>{
console.log('new task added!');
li=document.createElement('li');
li.textContent=`random task with ID: ${Math.round(Math.random()*100)}`;
ul.append(li);
});
/*list=document.querySelectorAll('li');
list.forEach(element =>{
    element.addEventListener('click',e=>{
        console.log(e.target);
        //console.log(element);
        e.target.style.textDecoration='line-through';
        e.stopPropagation();
        e.target.remove();
    });
});*/
ul.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI')
    console.log(e);
    e.target.remove();
});