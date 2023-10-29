const todo=async()=>{
const response=await fetch('todos1.json');
//console.log(response);
if(response.status!=200){
    throw new Error('can\'t resolve resource');
}
const data=await response.json();//try without await..
console.log(data);
const response2=await fetch('todos2.json')
const data2=response2.json();//try without await..
console.log(data2);
console.log(1);
console.log(2);
return data2;
};
todo()
.then(data=>console.log('fulfilled:',data))
.catch(err=>console.log('rejected:',err.message)); //try with just 'err'..
console.log(3);
console.log(4);

// fetch('toos2.json').then(response=>{
//     console.log('resolved',response);
//     return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log('rejected',err);
// });