document.addEventListener('DOMContentLoaded', function() {
    const priceDisplay = document.getElementById('priceDisplay');
    const availabilityDisplay = document.getElementById('availabilityDisplay');
    const sizeSelect = document.getElementById('size');
    const purchaseButton = document.getElementById('purchaseButton');
    const addProductForm = document.getElementById('addProductForm');

    const products = {
        small: { price: 10.00, availability: 'In Stock' },
        medium: { price: 12.00, availability: 'Out of Stock' },
        large: { price: 15.00, availability: 'In Stock' }
    };

    function updateProductInfo(size) {
        const product = products[size];
        if (product) {
            priceDisplay.textContent = `Price: $${product.price.toFixed(2)}`;
            availabilityDisplay.textContent = `Availability: ${product.availability}`;
            purchaseButton.disabled = product.availability === 'Out of Stock';
        }
    }

    sizeSelect.addEventListener('change', function() {
        updateProductInfo(sizeSelect.value);
    });

    // Initialize with the default selected size
    updateProductInfo(sizeSelect.value);

    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newSize = document.getElementById('newSize').value;
        const newPrice = parseFloat(document.getElementById('newPrice').value);
        const newAvailability = document.getElementById('newAvailability').value;

        if (newSize && !isNaN(newPrice) && newAvailability) {
            products[newSize] = { price: newPrice, availability: newAvailability };
            alert('New product added successfully!');
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
    
     // Event delegation for dynamically added elements
     document.body.addEventListener('change', function(event) {
        if (event.target && event.target.id === 'size') {
            updateProductInfo(event.target.value);
        }
    });
});
