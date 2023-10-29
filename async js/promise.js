const todos=resource=>{
    return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',e=>{
        //console.log(request,request.readyState);
        if(request.readyState===4 && request.status===200){
            //console.log(typeof request.responseText);
            const data=JSON.parse(request.responseText);
            //console.log(typeof data);
        resolve(data);
        }
    else if(request.readyState===4)
    reject('couldn\'t fetch data');
    });
    //request.open('GET','https://jsonplaceholder.typicode.com/todos/')
    request.open('GET',resource);
    request.send();
});
};
todos('todos.json').then(data=>{
    console.log('promise resolved:',data);
    return todos('todos1.json'); //try this with tod.json i.e., a url that can't be resolved..
}).then(data=>{
    console.log('promise 2 resolved:',data);
    return todos('todo.json');
}).then(data=>{
    console.log('promise 3 resolved',data);
}).catch(err=>{
    console.log('promise rejected:',err);
});
console.log(3);
console.log(4);