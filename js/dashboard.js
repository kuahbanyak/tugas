function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return null;
    }
    return JSON.parse(currentUser);
}

function getTimeGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 11) {
        return 'Selamat Pagi';
    } else if (hour >= 11 && hour < 15) {
        return 'Selamat Siang';
    } else if (hour >= 15 && hour < 18) {
        return 'Selamat Sore';
    } else {
        return 'Selamat Malam';
    }
}

function getCurrentDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('id-ID', options);
}

function initDashboard() {
    const user = checkAuth();
    if (!user) return;

    const greeting = getTimeGreeting();
    document.getElementById('greetingText').textContent = greeting + ', ' + user.nama + '!';

    document.getElementById('timeGreeting').textContent = getCurrentDateTime();

    document.getElementById('userInfo').innerHTML = `
        <strong>Role:</strong> ${user.role} | <strong>Lokasi:</strong> ${user.lokasi}
    `;
}

function handleLogout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

window.onload = function() {
    initDashboard();

    setInterval(function() {
        document.getElementById('timeGreeting').textContent = getCurrentDateTime();
    }, 60000);
}

