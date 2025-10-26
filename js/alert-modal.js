function showAlertModal(message, type = 'info', title = '') {
    let existingModal = document.getElementById('alertModal');
    if (existingModal) {
        existingModal.remove();
    }

    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ',
        warning: '⚠'
    };

    const titles = {
        success: title || 'Berhasil',
        error: title || 'Error',
        info: title || 'Informasi',
        warning: title || 'Peringatan'
    };

    const modal = document.createElement('div');
    modal.id = 'alertModal';
    modal.className = 'alert-modal';

    modal.innerHTML = `
        <div class="alert-modal-content">
            <div class="alert-modal-header ${type}">
                <span class="alert-modal-icon">${icons[type]}</span>
                <h2 class="alert-modal-title">${titles[type]}</h2>
            </div>
            <div class="alert-modal-body">
                ${message}
            </div>
            <div class="alert-modal-footer">
                <button class="btn btn-primary" onclick="closeAlertModal()">OK</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    setTimeout(() => {
        modal.style.display = 'block';
    }, 10);

    modal.onclick = function(event) {
        if (event.target == modal) {
            closeAlertModal();
        }
    };
}

function closeAlertModal() {
    const modal = document.getElementById('alertModal');
    if (modal) {
        modal.style.display = 'none';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

