
// As soon as the page loads, we check if there is a login.

window.addEventListener('load', function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        // If not logged in, send to login page + remember where to return
        window.location.href = 'login.html?redirect=' + encodeURIComponent('product.html');
        return;
    }

    const userEmailEl = document.getElementById('user-email');
    if (userEmailEl) {
        userEmailEl.textContent = localStorage.getItem('currentUser');
    }
});

// Logout Function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    alert('Logged out successfully.');
    window.location.href = 'index.html';
}

// Image slider (different for each card)
document.querySelectorAll('.image-slider').forEach(function(slider) {
    const slides = slider.querySelectorAll('img');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    let current = 0;
    const total = slides.length;

    function showSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        slides[n].classList.add('active');
    }

    nextBtn.addEventListener('click', function() {
        current = (current + 1) % total;
        showSlide(current);
    });

    prevBtn.addEventListener('click', function() {
        current = (current - 1 + total) % total;
        showSlide(current);
    });
});