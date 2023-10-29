content=document.querySelector('p');
console.log(content.classList);
content.classList.add('success');
content.classList.remove('error');
const task=document.querySelectorAll('p');
task.forEach(item=>{
    //console.log(item.textContent); //even though the content inside span is hidden, we still get it.
    //This is the difference between innerText and textContent..
if(item.innerText.includes('error'))
item.classList.add('error');
else if(item.innerText.includes('success'))
item.classList.add('success');
});
content=document.querySelector('.title');
content.classList.toggle('test');
//content.classList.toggle('test');