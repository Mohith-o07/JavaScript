//this code to test the response.. with and without await..
 //with async and await..
const func=async()=>{
    const res=await fetch('todos1.json');
    const data=res.json(); //try with await..
    console.log(data,"async and await");
    return data;
}
func()
.then(data=>console.log(data))
.catch(err=>console.log(err.message))

console.log(1234);
//without async and await..
const func1=()=>{
    const res=fetch('todos2.json');
    return res;
}
func1()
.then(data=>{
    console.log(data,'without async&await'); //await gets indirectly..
    return data.json();
})
.then(data=>console.log(data,'without async & await'))
.catch(err=>console.log(err.message))