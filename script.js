// ============================================
//  BADULLA TOURISM GUIDE — SLIDER SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    const sliderWrapper = document.getElementById('sliderWrapper');
    const navButtons    = document.querySelectorAll('.nav-btn[data-target]');
    let currentPage     = 0;
    const totalPages    = 5;

    // ── Navigate to a page ──────────────────────
    function goToPage(index) {
        if (index < 0 || index >= totalPages) return;
        currentPage = index;

        sliderWrapper.style.transform = `translateX(-${index * 100}vw)`;

        navButtons.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.target) === index);
        });

        localStorage.setItem('badulla_page', index);
    }

    // ── Nav button clicks ────────────────────────
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = parseInt(e.target.getAttribute('data-target'), 10);
            if (!isNaN(target)) goToPage(target);
        });
    });

    // ── Resize fallback ──────────────────────────
    window.addEventListener('resize', () => {
        sliderWrapper.style.transform = `translateX(-${currentPage * 100}vw)`;
    });

    // ── Init — restore last visited page ─────────
    const savedPage = parseInt(localStorage.getItem('badulla_page')) || 0;
    goToPage(savedPage);

});