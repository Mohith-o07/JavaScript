//compare the output with that of async1.js...
const todos=(resource,callback)=>{

const request=new XMLHttpRequest();
request.addEventListener('readystatechange',e=>{
    //console.log(request,request.readyState);
    if(request.readyState===4 && request.status===200){
        //console.log(typeof request.responseText);
        const data=JSON.parse(request.responseText);
        //console.log(typeof data);
    callback(undefined,data);
    }
else if(request.readyState===4)
callback('couldn\'t fetch data',undefined);
});
//request.open('GET','https://jsonplaceholder.typicode.com/todos/')
request.open('GET',resource);
request.send();
};

console.log(1);
console.log(2);
todos('todos.json',(err,data)=>{
    console.log('callback fired!');
    if(err)
    console.log(err);
else
console.log(data,data[0]);
console.log(3); //this is all.. part of this function.. hence the output is different in comparison with async2.js..
console.log(4);
todos('todo1.json',(err,data)=>{
    console.log('callback fired!');
    if(err)
    console.log(err);
else
console.log(data,data[0]);
console.log(5);
console.log(6);
todos('todos2.json',(err,data)=>{
    console.log('callback fired!');
    if(err)
    console.log(err);
else
console.log(data,data[0]);
console.log(7);
console.log(8);
});
});
});
