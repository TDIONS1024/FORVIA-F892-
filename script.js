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

if(password.length<6){
    e.preventDefault();
    password_error.innerHtml="Must be atleast 6 characters"
}



});

