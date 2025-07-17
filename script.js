// Wait for the entire webpage to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the HTML elements we need to interact with
    const pullString = document.getElementById('pull-string');
    const body = document.body;

    // Listen for a click event on the pull-string element
    pullString.addEventListener('click', () => {
        // When clicked, toggle the 'light' and 'dark' classes on the body
        body.classList.toggle('light');
        body.classList.toggle('dark');
    });

});