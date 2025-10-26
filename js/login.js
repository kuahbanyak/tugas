function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = dataPengguna.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        showAlertModal('Selamat datang, ' + user.nama + '! Anda akan diarahkan ke dashboard.', 'success', 'Login Berhasil');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        showAlertModal('Email atau password yang Anda masukkan salah! Silakan periksa kembali dan coba lagi.', 'error', 'Login Gagal');
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
        showAlertModal('Link reset password telah dikirim ke email <strong>' + email + '</strong>. Silakan cek inbox Anda.', 'success', 'Email Terkirim');
        closeForgotPassword();
        document.getElementById('forgotPasswordForm').reset();
    } else {
        showAlertModal('Email <strong>' + email + '</strong> tidak terdaftar dalam sistem!', 'error', 'Email Tidak Ditemukan');
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
        showAlertModal('Email <strong>' + email + '</strong> sudah terdaftar! Silakan gunakan email lain atau login dengan akun yang sudah ada.', 'warning', 'Email Sudah Terdaftar');
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

    showAlertModal('Pendaftaran berhasil, <strong>' + nama + '</strong>! Silakan login dengan akun Anda.', 'success', 'Registrasi Berhasil');
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

