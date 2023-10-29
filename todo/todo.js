const addform=document.querySelector('.add');
const container=document.querySelector('.container');
const ul=document.querySelector('.todo');
const search=document.querySelector('.search input');
const template=todo=>{  //writing functions instead of same code in eventlistener's callback function
    //makes the code reusable..
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    console.log(html);
    ul.innerHTML+=html;
};
//add todos..
addform.addEventListener('submit',e=>{
e.preventDefault();
const todo=addform.add.value.trim().toLowerCase(); //deletes the leading and trailing spaces..
if(todo.length)
template(todo);
addform.reset();
});
//delete todos using event delegation..
ul.addEventListener('click',e=>{ 
    if(e.target.classList.contains('delete')){
       let k=e.target.parentElement.textContent.trim();
       console.log(k);
    e.target.parentElement.remove();
    const button=document.createElement('button');
    button.textContent='undo todo';
    button.innerHTML+=`<i class="fas fa-undo-alt"></i></pre>`;
    container.append(button);
    const element=document.querySelector('button');
        button.addEventListener('click',e=>{
            template(k);
            element.remove();
        });
    setTimeout(()=>{
        element.remove();
    },3000);
    }
});
//filter todos..
const filtertodos=term=>{
    const k=Array.from(ul.children)
    .filter(todo=> !todo.textContent.toLowerCase().includes(term))
    .forEach(todo=> todo.classList.add('filtered'));
    c=document.querySelectorAll('.filtered');
    console.log(c);
    Array.from(ul.children)
    .filter(todo=> todo.textContent.toLowerCase().includes(term))
    .forEach(todo=> todo.classList.remove('filtered'));
    
};
//keyup event..
search.addEventListener('keyup',e=>{
    const term=search.value.trim().toLowerCase();
    filtertodos(term);
})