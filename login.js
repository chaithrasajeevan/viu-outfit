document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
        
    }
});