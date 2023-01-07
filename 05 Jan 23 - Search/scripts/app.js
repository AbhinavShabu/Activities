// eslint-disable-next-line no-unused-vars
function handleSubmit(e){
    e.preventDefault();
    console.log(e);

    const email = document.forms.login.email;
    const password = document.forms.login.password;
    const age = document.forms.login.age;

    const passwordValue = password.value;
    const ageValue = age.value;

    const passwordErrorDisplay = password.nextElementSibling;
    const ageErrorDisplay = age.nextElementSibling;

    if(passwordValue.length < 6){
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must be atleast 6 characters.</li>';
    }
    if(passwordValue.includes(' ')){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must not contain spaces.</li>';
    }
    if(ageValue <= 18){
        age.style.border = '1px solid red';
        ageErrorDisplay.classList.remove('d-none');
        alert('Age should be more than 18');
    }
    console.log(password);
}