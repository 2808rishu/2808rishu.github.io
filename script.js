// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Restore previous theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀ Light Mode';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        toggleBtn.textContent = '☀ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Tab Navigation
function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show the selected tab content
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Add active class to the clicked button
    const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize tab navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Show home tab by default
    showTab('home');
    
    // Add event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            showTab(tabId);
            // Scroll to top when changing tabs
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
        if (!scrollButton) {
            const button = document.createElement('button');
            button.id = 'scroll-top';
            button.innerHTML = '↑';
            button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.appendChild(button);
        }
    } else if (scrollButton) {
        scrollButton.remove();
    }
});