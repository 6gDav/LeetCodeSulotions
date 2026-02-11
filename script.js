const selectElement = document.getElementById('filter-options');

selectElement.addEventListener('change', (event) => {
    const targetId = event.target.value;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});