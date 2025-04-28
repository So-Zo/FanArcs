// Improved JavaScript for the navigation menu
document.addEventListener("DOMContentLoaded", function () {
  // Get the parent container
  const bottomBar = document.querySelector(".bottom-navigation");

  // Listen for clicks on the container
  bottomBar.addEventListener("click", event => {
    // If the hamburger menu is clicked, toggle the main nav menu
    if (event.target.closest(".hamburger-menu-icon")) {
      const menu = document.querySelector(".main-navigation");
      menu.classList.toggle("active");
    }
  });

  // Add event listeners for the dropdown toggles
  const dropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", event => {
      // Find the closest submenu to this toggle button
      const parentLi = toggle.closest("li");
      const dropdown = parentLi.querySelector(".nav-dropdown-menu");

      // If dropdown exists, toggle it
      if (dropdown) {
        dropdown.classList.toggle("active");
      }

      // Prevent the event from bubbling up and closing the main menu
      event.stopPropagation();
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", event => {
    if (!event.target.closest(".main-navigation")) {
      // Close all dropdowns
      const dropdowns = document.querySelectorAll(".nav-dropdown-menu.active");
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove("active");
      });
    }
  });

  // Optional: Add a function to toggle search
  window.toggleSearchPopup = function () {
    // Implement your search toggle functionality here
    console.log("Search toggle clicked");
  };
});