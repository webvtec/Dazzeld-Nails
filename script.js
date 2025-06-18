// Email/Password Login
document.getElementById('emailLoginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'index.html'; // Redirect on success
        })
        .catch(error => {
            alert("Login Failed: " + error.message);
        });
});

// Google Login
document.getElementById('googleLoginBtn').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(() => {
            window.location.href = 'index.html'; // Redirect on success
        })
        .catch(error => {
            alert("Google Login Failed: " + error.message);
        });
});

// Logout Function
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = 'index.html';
    });
}

// Check User Login on Home Page
firebase.auth().onAuthStateChanged(user => {
    if (user && document.getElementById('user-section')) {
        document.getElementById('user-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    }
});
