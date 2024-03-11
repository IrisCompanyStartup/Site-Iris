document.getElementById('scrollButton').addEventListener('click', function() {
    var targetSection = document.getElementById('section-alvo');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
