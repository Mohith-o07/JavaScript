localStorage.setItem('name','mohith');
localStorage.setItem('age',50);
console.log(localStorage.name);
localStorage.name='hero';
console.log(typeof localStorage.age);
console.log(localStorage);
localStorage.clear();
console.log(localStorage);
todos=[{text:'atomic',author:'james'},
{text:'bhagavadgita',author:'Krishna'}
]
console.log(todos);
console.log(JSON.stringify(todos));
localStorage.setItem('todos',JSON.stringify(todos));
array=localStorage.todos;
console.log(JSON.parse(array));
