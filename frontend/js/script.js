document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('subNav').classList.toggle('active');
});

document.getElementById('buy-btn')?.addEventListener('click', () => {
    window.location.href = 'frontend/html/cars.html';
});

function contactDealer() {
    alert("We’ve sent your email. Our dealer will contact you shortly.");
}

// Filter logic
document.addEventListener('DOMContentLoaded', () => {
    const filter = document.getElementById('brandFilter');
    if (filter) {
        filter.addEventListener('change', () => {
            const value = filter.value;
            document.querySelectorAll('.box').forEach(box => {
                const name = box.querySelector('h2')?.textContent.toLowerCase();
                if (value === 'all' || name.includes(value)) {
                    box.style.display = 'flex';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }
});
