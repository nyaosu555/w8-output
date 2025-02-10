(() => {
    const signInButton = document.getElementById('signin-button');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    if(localStorage.getItem('email') && localStorage.getItem('password')) {
        emailInput.value = localStorage.getItem('email');
        passwordInput.value = localStorage.getItem('password');
    }

    signInButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(email && password) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            alert('Please enter your email and password');
        }

    })
})();
