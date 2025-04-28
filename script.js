// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const welcomeText = document.getElementById('welcome-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const featuresList = document.getElementById('features-list');
    
    // Flag to track if new item exists
    let newItemExists = false;
    
    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        if (welcomeText.textContent === 'My name is Mutebwa Charles and I was so lucky to have been selected for the award of the powerlean project scholarship') {
            welcomeText.textContent = 'I am from East Africa where swahili is a regional language though I even dont even know it well!';
        } else {
            welcomeText.textContent = 'My name is Mutebwa Charles and I was so lucky to have been selected for the award of the powerlean project scholarship';
        }
    });
    
    // 2. Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', function() {
        welcomeText.classList.toggle('highlight');
        featuresList.classList.toggle('highlight');
    });
    
    // 3. Add or remove an element when a button is clicked
    toggleElementBtn.addEventListener('click', function() {
        if (!newItemExists) {
            // Create new list item
            const newItem = document.createElement('li');
            newItem.textContent = 'Dynamic element added with JavaScript!';
            newItem.classList.add('dynamic-item');
            featuresList.appendChild(newItem);
            toggleElementBtn.textContent = 'Remove List Item';
            newItemExists = true;
        } else {
            // Remove the dynamically added list item
            const dynamicItem = document.querySelector('.dynamic-item');
            if (dynamicItem) {
                featuresList.removeChild(dynamicItem);
                toggleElementBtn.textContent = 'Add List Item';
                newItemExists = false;
            }
        }
    });
});