window.addEventListener("load", function(){
    const form = this.document.querySelector('#contact form');
    form.addEventListener('submit', sendMessage);
});

async function sendMessage(evt){
    evt.preventDefault();
}

//get values
const email = document.querySelector('#email').value.trim();
const subject = document.querySelector('#subject').value.trim();
const message = document.querySelector('#message').value.trim();

//get handles for hint messages
const hint_email = document.querySelector('#hint_email');
const hint_subject = document.querySelector('#hint_subject');
const hint_message = document.querySelector('#hint_message');

let fields_ok = true;

if(email.length < 5 || email.indexOf('@') < 0 ){
    hint_email.style.display = 'inline';
    fields_ok = false;
} else {
    hint_email.style.display = 'none';
}

if (subject.length == 0) {
    hint_subject.style.display = 'inline';
    fields_ok = false;
}else{
    hint_subject.style.display = 'none';
}

if (message.length == 0){
    hint_message.style.display='inline';
    fields_ok=false;
}else{
    hint_message.style.display='none';
}