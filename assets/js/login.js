function login() {
    const username = id("username").value.trim();
    const password = id("password").value.trim();
    
    if(username.length === 0 || password.length === 0) {
        id("login-msg").innerText = "Please enter both username and password to login!";
        return;
    }

    if(password.length < 8) {
        id("login-msg").innerText = "Password too short!";
        return;
    }

    id("login-msg").innerText = "Login success!";

}