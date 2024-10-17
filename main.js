document.addEventListener('DOMContentLoaded', function() {
    const sizeDropdown = document.getElementById('sizeDropdown');
    const priceDisplay = document.getElementById('priceDisplay');
    const purchaseButton = document.getElementById('purchaseButton')

    const prices = {
        small: 10,
        medium: 15,
        large: 20
    };

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
};

// Create Checkout Event

purchaseButton.addEventListener('click', function() {
    const selectedSize = sizeDropdown.value;
    const stockStatus = availability[selectedSize];

    if (stockStatus === 'Out of Stock') {
        alert('Sorry, this product is out of stock and cannot be purchased.');
    } else {
        alert('Thank you for your purchase!');
    }
});

// Event Delegation for Dynamic Product List
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('product-option')) {
        const selectedSize = event.target.dataset.size;
        const price = prices[selectedSize] || 0;
        const stockStatus = availability[selectedSize];

        priceDisplay.textContent = `$${price}`;
        
        if (stockStatus === 'Out of Stock') {
            purchaseButton.disabled = true;
        } else {
            purchaseButton.disabled = false;
        };
    };
});

// Form to add new product
const addProductForm = document.getElementById('addProductForm');
addProductForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newSize = document.getElementById('newSize').value;
    const newPrice = parseFloat(document.getElementById('newPrice').value);
    const newAvailability = document.getElementById('newAvailability').value;

    if (newSize && !isNaN(newPrice) && newAvailability) {
        prices[newSize] = newPrice;
        availability[newSize] = newAvailability;

        const option = document.createElement('option');
        option.value = newSize;
        option.textContent = `${newSize.charAt(0).toUpperCase() + newSize.slice(1)}: ${newAvailability}`;
        sizeDropdown.appendChild(option);
    } else {
        alert('Please fill out all fields correctly.');
    };
    });
});