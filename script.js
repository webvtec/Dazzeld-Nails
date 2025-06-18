// Firebase Authentication
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch(error => {
            alert(error.message);
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = 'index.html';
    });
}

// Check Login Status
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById('user-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    }
});

// Cloudinary Upload
function uploadImage() {
    const file = document.getElementById('fileInput').files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'resturant_uploads'); // Replace with your unsigned preset name

    fetch('https://api.cloudinary.com/v1_1/WebVtec/image/upload', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('uploadedImage').innerHTML = `<img src="${data.secure_url}" width="300">`;
    })
    .catch(err => console.error(err));
}
