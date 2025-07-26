document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('subNav').classList.toggle('active');
});

document.getElementById('buy-btn').addEventListener('click', () => {
    window.location.href = 'frontend/html/cars.html';
})

function contactDealer() {
    alert("We’ve sent your email. Our dealer will contact you shortly.");
}