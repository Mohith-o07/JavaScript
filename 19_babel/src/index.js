import  {styleBody,addTitle,contact} from './dom';
import users,{getPremUsers} from './data'; //import name can be other than users, since it is the default export.


console.log('index file');
addTitle('test');
styleBody();
console.log(contact);
const premUsers=getPremUsers(users);
console.log('',users,"\n",premUsers);
console.log('this is the test for auto-reload-3');