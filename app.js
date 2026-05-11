// 1. Sidebar Navigation Click Effect
function setActiveNav(element) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    // Add active class to the clicked item
    element.classList.add('active');
}

// 2. Personal Trainer & Community Dropdown Click Effect
function toggleDropdown(element) {
    // Toggle the 'open' class which rotates the arrow via CSS
    element.classList.toggle('open');
}

// 3. Chart Bar Click Effect
function activateBar(element) {
    // Remove active class from all bars
    document.querySelectorAll('.bar').forEach(bar => {
        bar.classList.remove('active');
        // Hide tooltip for non-active bars
        const tooltip = bar.querySelector('.tooltip');
        if(tooltip) {
            tooltip.remove();
        }
    });

    // Add active class to the clicked bar
    element.classList.add('active');
    
    // Add tooltip dynamically to the newly active bar
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    
    // Generate a random kcal number for demonstration
    const randomKcal = Math.floor(Math.random() * 3000 + 2000);
    tooltip.innerText = '🔥 ' + randomKcal.toLocaleString() + ' kcal';
    
    element.appendChild(tooltip);
}