function login(username, password) {
    return (username === "admin") && (password === "P@ssw0rd");
}

alert(login(username = prompt("Enter username"), password = prompt("Enter password")));