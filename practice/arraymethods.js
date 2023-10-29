let array=[10,20,30,40,50,60];
const w=array.filter(score=>score > 30);//since this func needs only one statement..
console.log(array,w);
const mod=array.map(i=>i/2);
console.log(mod);
//reduce..
let scores=[
{player:'mario',score:50},
{player:'yoshi',score:30},
{player:'mario',score:90}
];
const res=scores.reduce((acc,obj)=>{
    if(obj.player==='mario')
    acc+=obj.score;
return acc;
},0);
console.log(res);
//sort method..
scores.sort((a,b)=>{  //sort in descending order..
    if(a.score>b.score)
    return -1;
else if(b.score>a.score)
return 1;
else
return 0;
});
console.log(scores); 
scores.sort((a,b)=>a.score-b.score);
console.log(scores);
scores=[10,5,2,15,4];
scores.sort();
console.log(scores);
scores.sort((a,b)=>a-b);
console.log(scores);