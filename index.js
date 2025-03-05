window.addEventListener("load", function(){
    const form = this.document.querySelector('#contact form');
    form.addEventListener('submit', sendMessage);

    const reset_success = this.document.querySelector("#reset_success");
    reset_success.addEventListener("click", reset);

    const reset_error = this.document.querySelector("#reset_error");
    reset_error.addEventListener("click", reset);
});

function reset(evt){
    evt.preventDefault();
    document.querySelector('#success').style.display = 'none';
    document.querySelector('#error').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#contact').style.display = 'block';

    if(this.getAttribute('id') == 'reset_success'){
        document.querySelector('#email').value = '';
        document.querySelector('#subject').value = '';
        document.querySelector('#message').value = '';
    }

}


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

if (fields_ok){

    //hide form and show loading icon
    document.querySelector('#contact').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';

    //prepare data for transport to server
    const data = new FormData();
    data.append('email', email);
    data.append('subject', subject);
    data.append('message', message);

    //simulate delay when submitting the data to the server
    await new Promise(resolve => setTimeout(resolve, 2000));
    const success = Math.random() > 0.25;

    //hide loading icon when we receive the response
    document.querySelector("#loading").style.display = "none";

    //show success or error depending on the response
    if(success){
        document.querySelector("#success").style.display = "block";
    }
    else{
        document.querySelector('#error').style.display = "block";
    }
}