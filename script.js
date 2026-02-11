const selectElement = document.getElementById('filter-options');

selectElement.addEventListener('change', (event) => {
    const targetId = event.target.value;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        // Finom görgetés a kiválasztott szekcióhoz
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});