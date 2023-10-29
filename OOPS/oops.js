const a=new String('a');
console.log(typeof a,'\n',a);
class user{
    lengt=4;
    static leng=5;
}
const b=new user();
console.log(b);
console.log(b.lengt,user.lengt);
console.log(user.leng,b.leng);
console.log(user);

function hello(user,id)
{
    this.user=user;
    this.id=id;
    this.login=function(){
        console.log(`${this.user} has logged in`);
        return this;
    }
}
hello.prototype.logout=function(){
    console.log('logged out');
    return this;
}
hello.prototype.logout1=function(){
    console.log('prototype\'s logged out');
}
const u1=new hello('mohith',44);
console.log(hello);
console.log(u1);
u1.logout().logout1();  //method chaining..
console.log(hello.prototype);