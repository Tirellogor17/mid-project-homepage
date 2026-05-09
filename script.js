// Menunggu sampai seluruh struktur HTML (DOM) selesai dimuat oleh browser
document.addEventListener('DOMContentLoaded', function() {
    
    // Mencari elemen form kontak berdasarkan ID
    const contactForm = document.getElementById('contactForm');

    // Pastikan script hanya berjalan jika form tersebut ada di halaman yang sedang dibuka
    // (Karena script.js dipanggil di semua halaman, kita harus mencegah error di halaman Home/Gallery/Blog)
    if (contactForm) {
        
        // Menambahkan pendengar kejadian (event listener) saat tombol submit ditekan
        contactForm.addEventListener('submit', function(event) {
            
            // Mencegah halaman refresh otomatis (perilaku bawaan form HTML)
            event.preventDefault();

            // Mengambil nilai dari inputan pengguna
            const nameValue = document.getElementById('name').value.trim();
            const emailValue = document.getElementById('email').value.trim();
            const messageValue = document.getElementById('message').value.trim();

            // Validasi dasar: Memastikan tidak ada yang kosong atau hanya berisi spasi
            if (nameValue === "" || emailValue === "" || messageValue === "") {
                alert("Mohon lengkapi semua data (Nama, Email, dan Pesan) sebelum mengirim.");
                return; // Menghentikan proses fungsi jika ada yang kosong
            }

            // --- Jika semua validasi lulus ---

            // Simulasi proses pengiriman data (karena tidak ada backend)
            // Menampilkan pesan sukses menggunakan Alert
            alert("Terima kasih, " + nameValue + "!\n\nPesan Anda telah berhasil dikirim ke sistem kami.\n(Catatan: Ini adalah simulasi, pesan tidak benar-benar dikirim ke server).");

            // Mengosongkan form (reset) kembali seperti semula
            contactForm.reset();
        });
    }
    
    /* 
     * CONTOH TAMBAHAN (Opsional): 
     * Efek sederhana di halaman Gallery
     */
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        galleryItems.forEach(function(item) {
            item.addEventListener('click', function() {
                // Mengambil nama gambar dari elemen p di bawahnya
                const title = this.querySelector('p').innerText;
                alert("Anda mengklik proyek: " + title);
            });
        });
    }

});