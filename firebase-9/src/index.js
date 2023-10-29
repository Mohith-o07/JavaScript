import {initializeApp} from 'firebase/app';
import {
    getFirestore,collection,onSnapshot,
    addDoc,deleteDoc,doc,
    query,where, orderBy, 
    serverTimestamp, 
    getDoc, updateDoc
} from 'firebase/firestore';

import{
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAf5f4e21WW2KfFaSxF6E-fStsJoQsWOv8",
    authDomain: "fir-9-9b1bc.firebaseapp.com",
    projectId: "fir-9-9b1bc",
    storageBucket: "fir-9-9b1bc.appspot.com",
    messagingSenderId: "427787830686",
    appId: "1:427787830686:web:ead7034680a0f890a8c28f"
  };
  //init firebase app
  initializeApp(firebaseConfig);
  //init services
 const db=getFirestore();
 const auth=getAuth();
 //collection ref
 const colref=collection(db,'books');

 //queries
 const q=query(colref,orderBy('createdAt'));

//real time collection data..
const unsubcol=onSnapshot(q,(snapshot)=>{
    let books=[];
    snapshot.docs.forEach(doc=>{
        books.push({...doc.data(),id:doc.id})
    })
    console.log(books);
});

 //adding docs..
const addbook=document.querySelector('.add');
addbook.addEventListener('submit',e=>{
    e.preventDefault();
    addDoc(colref,{
        title:addbook.title.value,
        author:addbook.author.value,
        createdAt:serverTimestamp()
    })
    .then(()=>addbook.reset())
    .catch(err=>console.log(err.message))
})

 //deleting docs..
 const deletebook=document.querySelector('.delete');
 deletebook.addEventListener('submit',e=>{
     e.preventDefault();

     const docref=doc(db,'books',deletebook.id.value);

     deleteDoc(docref)
     .then(()=>deletebook.reset())
     .catch(err=>console.log(err))
 });

 //get a single doc..
 const docref=doc(db,'books',"NWvkKfhInykYOinrZzXU");
//  getDoc(docref)
//  .then(doc=>console.log(doc.data(),doc.id))
//  .catch(err=>console.log(err));

 const unsubdoc=onSnapshot(docref,(doc)=>{
    console.log(doc.data(),doc.id);
 })

 const updateform=document.querySelector('.update');
 updateform.addEventListener('submit',e=>{
    e.preventDefault();

    const docref=doc(db,'books',updateform.id.value);

    updateDoc(docref,{
        title:'updated title: VEDAS' //updates only this property..
    })
    .then(updateform.reset())
    .catch(err=>console.log(err))
 });

 //signing up users
 const signupform=document.querySelector('.signup');
 signupform.addEventListener('submit',e=>{
    e.preventDefault();

    const email=signupform.email.value;
    const password=signupform.password.value;
    createUserWithEmailAndPassword(auth,email,password)
    .then(cred=>console.log('user signed up:',cred.user))
    .catch(err=>console.log(err.message));
 });

 //login and logout...
 const logout=document.querySelector('.logout');
 logout.addEventListener('click',()=>{
    signOut(auth)
    .then(()=>console.log('user logged out'))
    .catch(err=>console.log(err.message))
 })

 const login=document.querySelector('.login');
 login.addEventListener('submit',e=>{
    e.preventDefault();

    const email=login.email.value;
    const password=login.password.value;

    signInWithEmailAndPassword(auth,email,password)
    .then(cred=>console.log('user logged in:',cred.user))
    .catch(err=>console.log(err.message))
 });

 //subscribing to auth changes..
 const unsubauth=onAuthStateChanged(auth,(user)=>{
    console.log('user status changed:',user);
 });

 //unsubscribe from changes (auth and db)...
 const unsub=document.querySelector('.unsub');
 unsub.addEventListener('click',()=>{
    console.log('unsubscribing...');
    unsubcol();
    unsubdoc();
    unsubauth();
 });
