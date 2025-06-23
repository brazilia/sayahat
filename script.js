
document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contactForm').classList.remove('hidden');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('contactForm').classList.add('hidden');
});