document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterDropdowns = document.querySelectorAll('.filter-dropdown');

  // Close all dropdowns
  function closeAllDropdowns() {
    filterDropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
    });
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
  }

  // Add click event listeners to filter buttons
  filterButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      // Prevent event from propagating to document
      event.stopPropagation();

      // If clicking the already active button, close the dropdown
      if (button.classList.contains('active')) {
        closeAllDropdowns();
        return;
      }

      // Close all dropdowns first
      closeAllDropdowns();

      // Open the corresponding dropdown
      const correspondingDropdown = filterDropdowns[index];
      if (correspondingDropdown) {
        correspondingDropdown.classList.add('active');
        button.classList.add('active');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.filter-btn, .filter-dropdown')) {
      closeAllDropdowns();
    }
  });

  // Prevent dropdown from closing when clicking inside
  filterDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });
});