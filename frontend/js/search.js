document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            const name = box.querySelector('h2')?.textContent.toLowerCase() || '';
            if (name.includes(query)) {
                box.style.display = 'flex';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
