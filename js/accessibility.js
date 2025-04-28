// Accessibility enhancements for Fan Arc
document.addEventListener('DOMContentLoaded', function() {
  // Keyboard shortcuts
  document.addEventListener('keydown', function(event) {
    // Only apply shortcuts when not in input fields
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.tagName === 'SELECT') {
      return;
    }

    // Alt + H: Go to Home page
    if (event.altKey && event.key === 'h') {
      event.preventDefault();
      window.location.href = 'index.html';
    }

    // Alt + P: Go to Profile page
    if (event.altKey && event.key === 'p') {
      event.preventDefault();
      window.location.href = 'profile-page.html';
    }

    // Alt + C: Go to Community page
    if (event.altKey && event.key === 'c') {
      event.preventDefault();
      window.location.href = 'community-page.html';
    }

    // Alt + S: Focus on search bar
    if (event.altKey && event.key === 's') {
      event.preventDefault();
      const searchBar = document.getElementById('site-search-bar');
      if (searchBar) {
        searchBar.focus();
      }
    }

    // Alt + M: Toggle menu
    if (event.altKey && event.key === 'm') {
      event.preventDefault();
      const menu = document.querySelector('.main-navigation');
      if (menu) {
        menu.classList.toggle('active');
        // Update ARIA expanded state
        const hamburgerIcon = document.querySelector('.hamburger-menu-icon');
        if (hamburgerIcon) {
          const isExpanded = menu.classList.contains('active');
          hamburgerIcon.setAttribute('aria-expanded', isExpanded);
        }
      }
    }

    // Alt + X: Toggle sidebar in large screen mode
    if (event.altKey && event.key === 'x') {
      event.preventDefault();
      // Only apply in sidebar mode (large screens)
      if (window.innerWidth >= 992) {
        const menu = document.querySelector('.main-navigation');
        if (menu) {
          menu.classList.toggle('active');
          // Update ARIA expanded state
          const hamburgerIcon = document.querySelector('.hamburger-menu-icon');
          if (hamburgerIcon) {
            const isExpanded = menu.classList.contains('active');
            hamburgerIcon.setAttribute('aria-expanded', isExpanded);
          }
        }
      }
    }

    // Power Room specific shortcuts
    if (window.location.href.includes('power-room.html')) {
      // Alt + Left Arrow: Previous character (left side)
      if (event.altKey && event.key === 'ArrowLeft') {
        event.preventDefault();
        document.getElementById('left-prev').click();
      }

      // Alt + Right Arrow: Next character (left side)
      if (event.altKey && event.key === 'ArrowRight') {
        event.preventDefault();
        document.getElementById('left-next').click();
      }

      // Alt + Up Arrow: Previous character (right side)
      if (event.altKey && event.key === 'ArrowUp') {
        event.preventDefault();
        document.getElementById('right-prev').click();
      }

      // Alt + Down Arrow: Next character (right side)
      if (event.altKey && event.key === 'ArrowDown') {
        event.preventDefault();
        document.getElementById('right-next').click();
      }

      // Alt + F: Focus on left character search
      if (event.altKey && event.key === 'f') {
        event.preventDefault();
        document.getElementById('left-character-search').focus();
      }

      // Alt + G: Focus on right character search
      if (event.altKey && event.key === 'g') {
        event.preventDefault();
        document.getElementById('right-character-search').focus();
      }
    }
  });

  // Add keyboard shortcut information to the page
  const addKeyboardShortcutsInfo = function() {
    // Check if the info already exists
    if (document.querySelector('.keyboard-shortcuts-info')) {
      return;
    }

    // Create the info element
    const infoElement = document.createElement('div');
    infoElement.className = 'keyboard-shortcuts-info';
    infoElement.setAttribute('role', 'region');
    infoElement.setAttribute('aria-label', 'Keyboard shortcuts information');

    // Add a button to toggle the visibility
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Keyboard Shortcuts';
    toggleButton.className = 'shortcuts-toggle';
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-controls', 'shortcuts-list');

    // Create the shortcuts list
    const shortcutsList = document.createElement('div');
    shortcutsList.id = 'shortcuts-list';
    shortcutsList.className = 'shortcuts-list';
    shortcutsList.style.display = 'none';

    // Add the shortcuts
    shortcutsList.innerHTML = `
      <h3>Keyboard Shortcuts</h3>
      <ul>
        <li><kbd>Alt</kbd> + <kbd>H</kbd>: Go to Home page</li>
        <li><kbd>Alt</kbd> + <kbd>P</kbd>: Go to Profile page</li>
        <li><kbd>Alt</kbd> + <kbd>C</kbd>: Go to Community page</li>
        <li><kbd>Alt</kbd> + <kbd>S</kbd>: Focus on search bar</li>
        <li><kbd>Alt</kbd> + <kbd>M</kbd>: Toggle menu</li>
        <li><kbd>Alt</kbd> + <kbd>X</kbd>: Toggle sidebar (large screens)</li>
      </ul>
    `;

    // Add Power Room specific shortcuts if on that page
    if (window.location.href.includes('power-room.html')) {
      const powerRoomShortcuts = document.createElement('div');
      powerRoomShortcuts.innerHTML = `
        <h4>Power Room Shortcuts</h4>
        <ul>
          <li><kbd>Alt</kbd> + <kbd>←</kbd>: Previous character (left side)</li>
          <li><kbd>Alt</kbd> + <kbd>→</kbd>: Next character (left side)</li>
          <li><kbd>Alt</kbd> + <kbd>↑</kbd>: Previous character (right side)</li>
          <li><kbd>Alt</kbd> + <kbd>↓</kbd>: Next character (right side)</li>
          <li><kbd>Alt</kbd> + <kbd>F</kbd>: Focus on left character search</li>
          <li><kbd>Alt</kbd> + <kbd>G</kbd>: Focus on right character search</li>
        </ul>
      `;
      shortcutsList.appendChild(powerRoomShortcuts);
    }

    // Toggle the shortcuts list visibility
    toggleButton.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      shortcutsList.style.display = isExpanded ? 'none' : 'block';
    });

    // Add the elements to the page
    infoElement.appendChild(toggleButton);
    infoElement.appendChild(shortcutsList);

    // Add the info element to the page
    document.body.appendChild(infoElement);
  };

  // Call the function to add keyboard shortcuts info
  addKeyboardShortcutsInfo();
});
