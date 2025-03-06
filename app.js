// Fitur Pencarian
const searchInput = document.getElementById('search-input');
const ceramahItems = document.querySelectorAll('.ceramah-item');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    ceramahItems.forEach(item => {
        const title = item.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Fitur Mode Gelap
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Fitur Konfirmasi Download
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const ceramahTitle = this.closest('.ceramah-item').querySelector('h2').innerText;
        const confirmDownload = confirm(`Apakah Anda yakin ingin mengunduh audio ceramah "${ceramahTitle}"?`);
        if (confirmDownload) {
            alert(`Mengunduh "${ceramahTitle}"...`);
            // Logika download bisa ditambahkan di sini
        } else {
            alert('Unduhan dibatalkan.');
        }
    });
});

// Fitur Tambah Favorit
document.querySelectorAll('.btn-favorite').forEach(button => {
    button.addEventListener('click', function () {
        const ceramahTitle = this.closest('.ceramah-item').querySelector('h2').innerText;
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(ceramahTitle)) {
            favorites.push(ceramahTitle);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert(`"${ceramahTitle}" ditambahkan ke favorit.`);
        } else {
            alert(`"${ceramahTitle}" sudah ada di favorit.`);
        }
    });
});