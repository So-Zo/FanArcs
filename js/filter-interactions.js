document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll('.filter-dropdown.active').forEach(dropdown => {
      dropdown.classList.remove('active');
    });

    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
  }

  // Add click event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Prevent event from propagating to document
      event.stopPropagation();

      // Get the parent filter group
      const filterGroup = button.closest('.filter-group');

      // Get the dropdown within this filter group
      const dropdown = filterGroup.querySelector('.filter-dropdown');

      // If clicking the already active button, close the dropdown
      if (button.classList.contains('active')) {
        closeAllDropdowns();
        return;
      }

      // Close all dropdowns first
      closeAllDropdowns();

      // Open this dropdown
      if (dropdown) {
        dropdown.classList.add('active');
        button.classList.add('active');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.filter-group')) {
      closeAllDropdowns();
    }
  });

  // Prevent dropdown from closing when clicking inside
  document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });
});