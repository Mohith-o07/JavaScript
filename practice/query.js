console.log(document);
para=document.querySelector('p');
console.log(para);
console.log(document.querySelector('.error'));
console.log(document.querySelector('div.error'));
console.log(document.querySelector('body > h1'));
const paras=document.querySelectorAll('p')
console.log(paras);
paras.forEach((e,i)=>{
    console.log(e,i+Math.trunc((Math.random()*100)));
})
const errors=document.querySelectorAll('.error');
console.log(errors);
console.log(errors[1],errors[2]);
//other ways to query DOM..
x=document.getElementById('heading1')
console.log(x);
x=document.getElementsByClassName('error')
console.log(x);
console.log(x.item(1),x[1]);
x=document.getElementsByTagName('p');
console.log(x);
console.log(document);
//adding and changing page content..
x=document.querySelector('p'); //only first para tag..
console.log(x.innerText); //innertext is a property..
x.innerText="I've changed";
x.innerText+=",and now I've been appended!";
x=document.querySelectorAll('p');
x.forEach(para=>{
    console.log(para.innerText);//try printing just para..
    para.innerText+=' new text added';
})
x=document.querySelector('.content');
console.log(x);
console.log(x.innerHTML);//check for something that doesnt have inner HTML!!
x.innerHTML='<h2>this\'s a new H2</h2>';
const people=['James','Clear','Abhimanyu😢'];
people.forEach(person=>{
    x.innerHTML+=`<p><q><mark>${person}</mark></q></p>`;
});
//get and set attribute..
x=document.querySelector('a');
console.log(x.getAttribute('href'));
x.setAttribute('href','https://netninja.co.uk');
x.innerText="this takes you to net ninja";
x=document.querySelector('.classname');
x.setAttribute('class','success');
x.setAttribute('style','color:green;');
console.log(x.getAttribute('#id'));
x.style.margin='50px';
x.style.fontSize='27px'; //camelcase for font-size...
console.log(x.style);
