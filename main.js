document.addEventListener('DOMContentLoaded', function() {
    const sizeDropdown = document.getElementById('sizeDropdown');
    const priceDisplay = document.getElementById('priceDisplay');

    const prices = {
        small: 10,
        medium: 15,
        large: 20
    };

    sizeDropdown.addEventListener('change', function() {
        const selectedSize = sizeDropdown.value;
        const price = prices[selectedSize] || 0;
        priceDisplay.textContent = `$${price}`;
    });
});
