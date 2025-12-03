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

// Toggle PDF visibility
function togglePdf(pdfId) {
    const pdfElement = document.getElementById(pdfId);
    if (!pdfElement) return;
    const isHidden = pdfElement.style.display === 'none' || getComputedStyle(pdfElement).display === 'none';
    pdfElement.style.display = isHidden ? 'block' : 'none';
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

// Prevent text selection and copying
document.addEventListener('DOMContentLoaded', function() {
    // Prevent context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Prevent common keyboard shortcuts for copying
    document.addEventListener('keydown', function(e) {
        // Prevent Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+U, Ctrl+S, Ctrl+P
        if (e.ctrlKey && 
            (e.keyCode === 65 || 
             e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 83 || 
             e.keyCode === 80)) {
            e.preventDefault();
        }
        
        // Prevent F12 (developer tools)
        if (e.keyCode === 123) {
            e.preventDefault();
        }
        
        // Prevent Ctrl+Shift+I (developer tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
        }
        
        // Prevent Ctrl+Shift+J (console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
        }
    });
});