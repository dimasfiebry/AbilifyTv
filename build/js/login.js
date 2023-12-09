function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;





    if (username === "" || password === "") {
        openPopup("Harap isi username atau password Anda!");
    } else if (username === "dipta" && password === "1234") {
        openPopup("Login berhasil!");
        location.href = 'home.html';

    } else {
        openPopup("Login gagal. Username atau password salah.");
    }

    // Prevent form submission
    return false;
}

// Function to open the popup
function openPopup(message) {
    document.getElementById("popupMessage").innerHTML = message;
    document.getElementById("loginPopup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

