//dom queries..
const chatList=document.querySelector('.chat-list');
const newChatForm=document.querySelector('.new-chat');
const newNameForm=document.querySelector('.new-name');
const updateMsg=document.querySelector('.update-msg');
const rooms=document.querySelector('.chat-rooms');
//const send=document.querySelector('.sending');

//add a new chat..
newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(()=>newChatForm.reset())
    .catch(err=>console.log(err))
});

//update username..
newNameForm.addEventListener('submit',e=>{
    e.preventDefault();
    const newName=newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    updateMsg.innerText=`your name was updated to ${newName}`;
    setTimeout(()=>updateMsg.innerText=``,3000);
});

//check local storage for a name..
const username=localStorage.username?localStorage.username:'anonymous';

//update chatroom..
rooms.addEventListener('click',e=>{
    if(e.target.tagName==='BUTTON'){
        chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat=>chatUI.render(chat));
    }
});

//class instances..
const chatUI=new ChatUI(chatList);
const chatroom=new Chatroom('general',username);
//get chats and render..
chatroom.getChats(data=>{
    chatUI.render(data);
});
