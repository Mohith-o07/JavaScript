// alert("dood");
// let a;
// let b=99;
// const q=12;
// const r=null;
// var x
// //log things to console..
// console.log(r,a,"hello",b,'world',x,'ram');//'ram" wrong!
// //q="gta";
// console.log(q);
// b="vice";
// console.log(b);
// //q=111;
//  var k=75;
//  k="heLBuy";
//  console.log(k);
//  ///STRINGS and STRING FUNCS
//  k.toUpperCase();
//  let res=k.toLowerCase();
//  console.log(k,k.toUpperCase(),res);
//  let s="LordGovinda";
//  console.log(s.lastIndexOf('o'));
// console.log("slice->",s.slice(0,4),"substring->",s.substr(4,7));
// console.log("replace->",s.replace("Govinda","Krishna"),s);
// let n=5;
// n**=3;
// console.log(n);
// console.log(5*'hello',1/0,0/0,1/'a');
// console.log("hello "+2+" this world");
// console.log(`${s} is lub`); //template string..
// //creating html templates..
// let g="god";
// let html=`<h1>${s}</h1>
// <p>${s.substr(4,7)} is ${g}</p>
// `;
// console.log(html);
//arrays
arr=['mohith','eswar','pyda'];
console.log(arr);
let random=["mohith",123,null,0/0,1/0]
console.log(random, random.length);
console.log(random.join(','));//join
console.log(random.indexOf(null),random.indexOf(1));//index
console.log(arr+random);
console.log(arr.concat(random));//concat
console.log(arr);
arr=[1,2,3]
console.log(arr.push("asdf"));//push
res=arr.pop();//pop
console.log(arr,res);
console.log(arr.pop());
a=1;
a='mohith';
console.log(a.includes("moh"));
a=1
//strict vs loose comparison
console.log(`loose equality->${a=='1'}`); //loose equality
console.log(`strict equality->${a==='1'}`)//strict equality
console.log(a!=='1');
console.log(typeof a);
//type conversion
a='1';
console.log(typeof a,Number(a)+10);
console.log(Boolean(NaN));//try for null,infinity,undefined...
//control flow..
for(i=0;i<5;i++)
console.log(i);
i=1
while(i<5)
{
    console.log("while:",i);
    i++;
}
console.log('this"is the way');
//switch..
switch(1){    //switch uses strict equality...
    case 1:
        console.log('this is case 1');
        console.log('hello');
        break;
    case 2:
        console.log('this is case 2');
        console.log('world');
        break;
}
//variables and block scope..
let b=99;//global scope..
//b=3;
console.log(b);
if(b==99)
{
   const b=3; //can also be let..
    console.log(`value of b inside block->${b}`);
}
console.log('value of b outside block->',b);
const q=19;
if(true)
{
    let as='name';
    console.log(as);
    const q=123;
    console.log('reassigning const and let inside a block is valid, but only for local scope, unlike var, which gives global scope!->',q);
}
//console.log(b,as);  gives error!
console.log(q);
var old=44;
if(true)
{
    var old=100;
    console.log('value of old variable inside block=',old);
}
console.log('value of old variable outside block=',old); //same!
//functions and func. expressions..
function abc(){
    console.log("i am abc");
}
old=function(){
    console.log("i am a function expression!");
};
abc(),old();//we can also seperate these using semi-colon!
//check function declarations and expressions in notes (hoisting important!)
//args and parameters..
const x=function(name){//try making name="string"..
    console.log(`my name is ${name}`);
};
x();
//returning values..
const area=function(a){
    return a*a;
};
const dup=function(){
    return area(12);
};
console.log(dup());
//arrow functions..
const reg=function(rad){
    return rad**rad*3.14;
};
const arrow=(rad)=>{  //arrow function..
    return rad**rad*3.14; 
};
const arrow1=rad=>{ //parentheses around parameter can be omitted only when the func has a single parameter..
    return rad**rad*3.14;
};
const arrow2=rad=>rad**rad*3.14;//works even explicitly writing return (works when the func body has a single return statement)..
console.log("the areas from different funcs are:",reg(2),arrow(2),arrow1(2),arrow2(2));
//practice..
const greet=function(){
return "hello world";
};
const greet1=()=>"hello world";
console.log(greet());
const bill=function(products,tax){
    let total=0;
    for(let i=0;i<products.length;i++)
    total+=products[i]+products[i]*tax;
    return total;
};
const bill1=(products,tax)=>{ //can't shorten this to 1 line.. since we have >1 line in func body..
    let total=0;
    for(let i=0;i<products.length;i++)
    total+=products[i]+products[i]*tax;
    return total;
};
let prod=[1,2,3,4,5],tax=0.28;
console.log("final values are:",Math.fround(bill([1,2,3,4,5],0.28)),Math.trunc(bill1(prod,tax)));//try round too..
//callback functions..
const myfunc=callbackfunc=>{
    let val=50;
    console.log('calling the callback function now...',end="\j");
    callbackfunc(val);
};
myfunc(value=>{
    console.log(value);
});
//foreach..
let people=["mohith",'eswar','pyda'];
people.forEach((person,index)=>{
    console.log(person+index);
});
console.log(people.forEach);
const logperson=(a,b)=>{ //foreach gives both arguments as element and index. These aruments are optional..
    console.log(`${b} - hello ${a}`);
};
people.forEach(logperson);
//callback funcs in action..
const ul=document.querySelector('.people');
let html=``;
people.forEach((person,index)=>{
html+=`<li style="color:#FF${index}${index}FF"><h4>${person}</h4></li>\n`
});
console.log(html);
ul.innerHTML=html;
//objects..
let obj1={
    name:'mohith',
    oage:'20',
    skills:['problem solving','coding',1],
    login:function(){  //this doesn't 
        let x=25;
        //console.log(oage); //gives 'oage not defined' error!!
        console.log(`${this} has just logged in ${this.oage}`);
        console.log(this);
    },
    printskills(){
        console.log(`${this.name} has the following skills:`);
        this.skills.forEach(i=>{
            console.log(i);
        });
    }
};
console.log(obj1,"\n",obj1.name,obj1.z);
//update..
obj1.skills=null;
console.log(obj1.skills);
obj1['name']="eswar";
console.log(obj1['name'],"\n",obj1.name,"\n","hello");
console.log(typeof obj1);
//this keyword..
obj1.login();
console.log(this);
obj1.skills=['problem solving','coding']
console.log(obj1.printskills()); //prints undefined...since it is the implicit default value!
function hello(){
    console.log('hello there');
}
console.log(hello());
const arr1=[{name:'Harshith',nickname:'kypmowa',roomno:2327},{name:'likhith',nickname:'likhithuu',roomno:2327},
{name:'bhargav',nickname:'gb',roomno:2327}];
console.log(arr1);
obj1['blogs']=arr1;
console.log(obj1);
obj2={blogs:arr1,
printblogs(){
    this.blogs.forEach(i=>{
        console.log(i.name,i.nickname);
    })
}
};
obj2.printblogs();
//inbuilt Math object..
console.log(Math);//refer line 166...
console.log(Math.random());//b/w 0 and 1..
console.log(Math.round(Math.random()*100)); //any no. between 0 and 100(inclusive)
zz=[1,2,3];
console.log(zz.NaN);
//primitive vs reference..
const ref1={a:1,b:2}
const ref2=ref1;
console.log(ref1,ref2);
ref2['a']='iam2'
console.log(ref1,ref2);
