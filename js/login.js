function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = dataPengguna.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        alert('Login berhasil! Selamat datang ' + user.nama);
        window.location.href = 'dashboard.html';
    } else {
        alert('Email atau password yang Anda masukkan salah!');
    }
}

function showForgotPassword() {
    document.getElementById('forgotPasswordModal').style.display = 'block';
}

function closeForgotPassword() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

function showRegister() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegister() {
    document.getElementById('registerModal').style.display = 'none';
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('resetEmail').value;

    const user = dataPengguna.find(u => u.email === email);

    if (user) {
        alert('Link reset password telah dikirim ke email ' + email);
        closeForgotPassword();
        document.getElementById('forgotPasswordForm').reset();
    } else {
        alert('Email tidak terdaftar dalam sistem!');
    }
}

function handleRegister(event) {
    event.preventDefault();

    const nama = document.getElementById('regNama').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;
    const lokasi = document.getElementById('regLokasi').value;

    const existingUser = dataPengguna.find(u => u.email === email);

    if (existingUser) {
        alert('Email sudah terdaftar! Gunakan email lain.');
        return;
    }

    const newUser = {
        id: dataPengguna.length + 1,
        nama: nama,
        email: email,
        password: password,
        role: role,
        lokasi: lokasi
    };

    dataPengguna.push(newUser);

    alert('Pendaftaran berhasil! Silakan login dengan akun Anda.');
    closeRegister();
    document.getElementById('registerForm').reset();
}

window.onclick = function(event) {
    const forgotModal = document.getElementById('forgotPasswordModal');
    const registerModal = document.getElementById('registerModal');

    if (event.target == forgotModal) {
        closeForgotPassword();
    }
    if (event.target == registerModal) {
        closeRegister();
    }
}

window.onload = function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = 'dashboard.html';
    }
}

