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
        <strong>${user.nama}</strong> | ${user.role} | ${user.lokasi}
    `;

    displayStock();
}

function displayStock() {
    const stockGrid = document.getElementById('stockGrid');
    stockGrid.innerHTML = '';

    dataBahanAjar.forEach((item, index) => {
        const stockCard = createStockCard(item, index);
        stockGrid.appendChild(stockCard);
    });

    document.getElementById('totalStock').textContent = dataBahanAjar.length;
}

function createStockCard(item, index) {
    const card = document.createElement('div');
    card.className = 'stock-card';

    const imgSrc = item.cover || 'https://via.placeholder.com/280x200/667eea/ffffff?text=No+Image';

    card.innerHTML = `
        <img src="${imgSrc}" alt="${item.namaBarang}" onerror="this.src='https://via.placeholder.com/280x200/667eea/ffffff?text=No+Image'">
        <div class="stock-card-body">
            <h3>${item.namaBarang}</h3>
            <div class="stock-info">
                <strong>Kode:</strong> ${item.kodeBarang}
            </div>
            <div class="stock-info">
                <strong>Lokasi:</strong> ${item.kodeLokasi}
            </div>
            <div class="stock-info">
                <strong>Jenis:</strong> ${item.jenisBarang} | <strong>Edisi:</strong> ${item.edisi}
            </div>
            <div class="stock-badge">
                Stok: ${item.stok} unit
            </div>
        </div>
    `;

    return card;
}

function toggleAddForm() {
    const form = document.getElementById('addStockForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        form.style.display = 'none';
        document.querySelector('#addStockForm form').reset();
    }
}

function handleAddStock(event) {
    event.preventDefault();

    const newStock = {
        kodeLokasi: document.getElementById('kodeLokasi').value,
        kodeBarang: document.getElementById('kodeBarang').value,
        namaBarang: document.getElementById('namaBarang').value,
        jenisBarang: document.getElementById('jenisBarang').value,
        edisi: document.getElementById('edisi').value,
        stok: parseInt(document.getElementById('stok').value),
        cover: document.getElementById('cover').value || 'https://via.placeholder.com/280x200/667eea/ffffff?text=No+Image'
    };

    const exists = dataBahanAjar.find(item => item.kodeBarang === newStock.kodeBarang);
    if (exists) {
        alert('Kode barang sudah ada! Gunakan kode yang berbeda.');
        return;
    }

    dataBahanAjar.push(newStock);

    displayStock();

    toggleAddForm();

    alert('Bahan ajar berhasil ditambahkan!');

    setTimeout(() => {
        const cards = document.querySelectorAll('.stock-card');
        if (cards.length > 0) {
            cards[cards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
            cards[cards.length - 1].style.border = '3px solid #28a745';
            setTimeout(() => {
                cards[cards.length - 1].style.border = '2px solid #f0f0f0';
            }, 2000);
        }
    }, 100);
}

window.onload = function() {
    initPage();
}

