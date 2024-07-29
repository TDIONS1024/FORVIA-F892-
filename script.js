const username = document.getElementById ('username')
const password = document.getElementById ('password')
const form = document.getElementById('form')


const username_error = document.getElementById ('username_error')
const password_error = document.getElementById ('password_error')

form.addEventListener('log in',(e)=>{

if(username.value === ''){
    e.preventDefault();
    username_error.innerHTML="username is required";
}



});

