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
const purchaseButton = document.getElementById('purchaseButton');

const availability = {
    small: 'In Stock',
    medium: 'In Stock',
    large: 'Out of Stock'
};

sizeDropdown.addEventListener('change', function() {
    const selectedSize = sizeDropdown.value;
    const price = prices[selectedSize] || 0;
    const stockStatus = availability[selectedSize];

    priceDisplay.textContent = `$${price}`;
    
    if (stockStatus === 'Out of Stock') {
        purchaseButton.disabled = true;
    } else {
        purchaseButton.disabled = false;
    }
});

// Update dropdown options to include availability statuses
for (const size in availability) {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = `${size.charAt(0).toUpperCase() + size.slice(1)}: ${availability[size]}`;
    sizeDropdown.appendChild(option);
}