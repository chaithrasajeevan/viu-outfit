document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let valid = true;

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    }

    // If everything is valid
    if (valid) {
        alert("Login successful!");
        // window.location.href = "homepage.html"; // Redirect after login
    }
});