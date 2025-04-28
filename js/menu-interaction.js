// Improved JavaScript for the navigation menu
document.addEventListener("DOMContentLoaded", function () {
  // Get the parent container
  const bottomBar = document.querySelector(".bottom-navigation");
  const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
  const mainNavigation = document.querySelector(".main-navigation");

  // Function to check if we're in sidebar mode (larger screens)
  function isSidebarMode() {
    return window.innerWidth >= 992;
  }

  // Function to toggle the navigation menu
  function toggleNavMenu() {
    mainNavigation.classList.toggle("active");

    // Update ARIA attributes for accessibility
    const isExpanded = mainNavigation.classList.contains("active");
    hamburgerIcon.setAttribute("aria-expanded", isExpanded);
  }

  // Listen for clicks on the hamburger icon
  hamburgerIcon.addEventListener("click", function(event) {
    toggleNavMenu();
    event.stopPropagation();
  });

  // Listen for clicks on the navigation icons in sidebar mode
  bottomBar.addEventListener("click", event => {
    // Only handle hamburger menu clicks if we're not in sidebar mode
    if (!isSidebarMode() && event.target.closest(".hamburger-menu-icon")) {
      toggleNavMenu();
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

  // Function to toggle search popup
  window.toggleSearchPopup = function () {
    // Focus on the search bar
    const searchBar = document.getElementById('site-search-bar');
    if (searchBar) {
      searchBar.focus();
    }
  };

  // Handle window resize events
  let resizeTimer;
  window.addEventListener('resize', function() {
    // Debounce the resize event
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // If transitioning between mobile and desktop layouts
      if (isSidebarMode()) {
        // Add ARIA attributes for sidebar mode
        hamburgerIcon.setAttribute('aria-label', 'Toggle navigation sidebar');

        // If the menu is open in mobile view and we resize to desktop, adjust the styling
        if (mainNavigation.classList.contains('active')) {
          // Keep it open but with desktop styling
          mainNavigation.style.transform = 'translateX(0)';
        }
      } else {
        // Reset for mobile mode
        hamburgerIcon.setAttribute('aria-label', 'Open navigation menu');
        mainNavigation.style.transform = '';
      }
    }, 250);
  });

  // Initialize ARIA attributes
  hamburgerIcon.setAttribute('aria-expanded', 'false');
  hamburgerIcon.setAttribute('aria-controls', 'main-navigation');
  hamburgerIcon.setAttribute('aria-label', isSidebarMode() ? 'Toggle navigation sidebar' : 'Open navigation menu');
  mainNavigation.id = 'main-navigation';
});