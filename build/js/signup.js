function registerUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || password === "" || confirmPassword === "") {
        openPopup("Harap isi semua field!");
    } else if (password !== confirmPassword) {
        openPopup("Konfirmasi password tidak sesuai!");
    } else {
        // Logic untuk registrasi berhasil
        openPopup("Registrasi berhasil!");
    }

    // Prevent form submission
    return false;
}

// Function untuk membuka popup
function openPopup(message) {
    document.getElementById("popupMessage").innerHTML = message;
    document.getElementById("registrationPopup").style.display = "block";
}

// Function untuk menutup popup
function closePopup() {
    document.getElementById("registrationPopup").style.display = "none";
}
