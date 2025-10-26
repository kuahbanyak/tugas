function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return null;
    }
    return JSON.parse(currentUser);
}

function initPage() {
    const user = checkAuth();
    if (!user) return;

    document.getElementById('userInfo').innerHTML = `
        <strong>${user.nama}</strong> | ${user.role}
    `;
}

function handleSearch(event) {
    event.preventDefault();

    const nomorDO = document.getElementById('searchInput').value.trim();

    const tracking = dataTracking[nomorDO];

    if (tracking) {
        displayTrackingResult(tracking);
        document.getElementById('trackingResult').style.display = 'block';
        document.getElementById('notFound').style.display = 'none';
    } else {
        document.getElementById('trackingResult').style.display = 'none';
        document.getElementById('notFound').style.display = 'block';
    }
}

function displayTrackingResult(data) {
    document.getElementById('resultNomorDO').textContent = data.nomorDO;
    document.getElementById('resultNama').textContent = data.nama;
    document.getElementById('resultStatus').textContent = data.status;
    document.getElementById('resultEkspedisi').textContent = data.ekspedisi;
    document.getElementById('resultTanggal').textContent = formatDate(data.tanggalKirim);
    document.getElementById('resultPaket').textContent = data.paket;
    document.getElementById('resultTotal').textContent = data.total;

    let progress = 0;
    if (data.status === 'Dalam Perjalanan') {
        progress = 50;
    } else if (data.status === 'Diterima' || data.status === 'Dikirim') {
        progress = 100;
    }

    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = progress + '%';
    progressFill.textContent = progress + '%';

    displayJourney(data.perjalanan);
}

function displayJourney(perjalanan) {
    const journeyList = document.getElementById('journeyList');
    journeyList.innerHTML = '';

    perjalanan.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        if (index === perjalanan.length - 1) {
            timelineItem.style.borderLeftColor = '#28a745';
        }

        timelineItem.innerHTML = `
            <div class="timeline-time">${item.waktu}</div>
            <div class="timeline-desc">${item.keterangan}</div>
        `;

        journeyList.appendChild(timelineItem);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('id-ID', options);
}

window.onload = function() {
    initPage();
}

