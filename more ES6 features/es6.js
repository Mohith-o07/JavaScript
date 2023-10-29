const s=[...new Set([1,1,2,3,4,4])];
console.log(s);
//symbols..
symbol1=Symbol('name');
symbol2=Symbol('name');
console.log(symbol1==symbol2);
ninja={};
ninja['belt']='black';
ninja['belt']='orange';
ninja[symbol1]='shaun';
ninja[symbol2]='pelling';
console.log(ninja);