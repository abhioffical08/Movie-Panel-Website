import './api';

function toggleForm() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const formTitle = document.getElementById('form-title');

        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            formTitle.textContent = 'Login';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            formTitle.textContent = 'Register';
        }
    }

    function login() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const data = { email, password };

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Login Successful');
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Login Failed');
        });
    }

    function register() {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        const data = { name, email, password };

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Registration Successful');
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Registration Failed');
        });
    }