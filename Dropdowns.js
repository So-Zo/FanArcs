// Improved JavaScript for the navigation menu
document.addEventListener('DOMContentLoaded', function() {
  // Get the parent container
  const bottomBar = document.getElementById('bottom-bar');
  
  // Listen for clicks on the container
  bottomBar.addEventListener('click', (event) => {
    // If the hamburger menu is clicked, toggle the main nav menu
    if (event.target.closest('.hamburger-menu')) {
      const menu = document.querySelector('.nav-menu');
      menu.classList.toggle('active');
    }
  });
  
  // Add event listeners for the dropdown toggles
  const dropdownToggles = document.querySelectorAll('.toggle-dropdown');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
      // Find the closest submenu to this toggle button
      const parentLi = toggle.closest('li');
      const dropdown = parentLi.querySelector('.drop-down');
      
      // If dropdown exists, toggle it
      if (dropdown) {
        dropdown.classList.toggle('active');
      }
      
      // Prevent the event from bubbling up and closing the main menu
      event.stopPropagation();
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-menu')) {
      // Close all dropdowns
      const dropdowns = document.querySelectorAll('.drop-down.active');
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
  
  // Optional: Add a function to toggle search
  window.toggleSearch = function() {
    // Implement your search toggle functionality here
    console.log('Search toggle clicked');
  };
});