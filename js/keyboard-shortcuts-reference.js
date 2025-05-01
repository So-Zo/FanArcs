/**
 * Keyboard Shortcuts Reference JavaScript
 * This file handles the keyboard shortcuts reference functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get all keyboard shortcuts reference buttons
  const shortcutsReferenceButtons = document.querySelectorAll('.keyboard-shortcuts-reference');
  
  // Add event listeners to all keyboard shortcuts reference buttons
  shortcutsReferenceButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      showKeyboardShortcutsModal();
    });
  });
  
  // Add keyboard shortcut to show the shortcuts modal (Alt + ?)
  document.addEventListener('keydown', function(event) {
    // Check if Alt + ? is pressed and not inside an input or textarea
    if (event.altKey && 
        event.key === '?' && 
        document.activeElement.tagName !== 'INPUT' && 
        document.activeElement.tagName !== 'TEXTAREA' &&
        !document.activeElement.hasAttribute('contenteditable')) {
      
      event.preventDefault();
      showKeyboardShortcutsModal();
    }
  });
  
  // Function to show the keyboard shortcuts modal
  function showKeyboardShortcutsModal() {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'keyboard-shortcuts-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'keyboard-shortcuts-title');
    
    // Create modal content
    modal.innerHTML = `
      <div class="keyboard-shortcuts-container">
        <div class="keyboard-shortcuts-header">
          <h2 id="keyboard-shortcuts-title">Keyboard Shortcuts</h2>
          <button class="keyboard-shortcuts-close" aria-label="Close">&times;</button>
        </div>
        <div class="keyboard-shortcuts-content">
          <div class="shortcut-category">
            <h3>Wiki Editing</h3>
            <ul class="shortcut-list">
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>E</kbd>
                </div>
                <div class="shortcut-description-inline">Edit page (when not in a text field)</div>
              </li>
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>Esc</kbd>
                </div>
                <div class="shortcut-description-inline">Close modals and dialogs</div>
              </li>
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>Ctrl</kbd> + <kbd>S</kbd>
                </div>
                <div class="shortcut-description-inline">Save changes (when editing)</div>
              </li>
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>Alt</kbd> + <kbd>H</kbd>
                </div>
                <div class="shortcut-description-inline">View page history</div>
              </li>
            </ul>
          </div>
          
          <div class="shortcut-category">
            <h3>Navigation</h3>
            <ul class="shortcut-list">
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>Alt</kbd> + <kbd>H</kbd>
                </div>
                <div class="shortcut-description-inline">Go to Home page</div>
              </li>
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>Alt</kbd> + <kbd>P</kbd>
                </div>
                <div class="shortcut-description-inline">Go to Profile page</div>
              </li>
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>Alt</kbd> + <kbd>C</kbd>
                </div>
                <div class="shortcut-description-inline">Go to Community page</div>
              </li>
              <li class="shortcut-item">
                <div class="shortcut-keys-inline">
                  <kbd>Alt</kbd> + <kbd>S</kbd>
                </div>
                <div class="shortcut-description-inline">Focus on search bar</div>
              </li>
            </ul>
          </div>
          
          <a href="keyboard-shortcuts.html" class="view-all-shortcuts">View all keyboard shortcuts</a>
        </div>
      </div>
    `;
    
    // Add modal to the document
    document.body.appendChild(modal);
    
    // Add event listener to close button
    const closeButton = modal.querySelector('.keyboard-shortcuts-close');
    closeButton.addEventListener('click', function() {
      closeKeyboardShortcutsModal(modal);
    });
    
    // Add event listener to close when clicking outside
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeKeyboardShortcutsModal(modal);
      }
    });
    
    // Add event listener for escape key
    document.addEventListener('keydown', function escapeListener(event) {
      if (event.key === 'Escape') {
        closeKeyboardShortcutsModal(modal);
        document.removeEventListener('keydown', escapeListener);
      }
    });
    
    // Show modal with animation
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  }
  
  // Function to close the keyboard shortcuts modal
  function closeKeyboardShortcutsModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  }
  
  // Add keyboard shortcuts reference buttons to wiki controls containers
  addKeyboardShortcutsReferenceButtons();
  
  // Function to add keyboard shortcuts reference buttons to wiki controls containers
  function addKeyboardShortcutsReferenceButtons() {
    const wikiControlsContainers = document.querySelectorAll('.wiki-controls-container');
    
    wikiControlsContainers.forEach(container => {
      // Check if the container already has a keyboard shortcuts reference button
      if (!container.querySelector('.keyboard-shortcuts-reference')) {
        // Create the button
        const button = document.createElement('button');
        button.className = 'keyboard-shortcuts-reference';
        button.setAttribute('aria-label', 'Keyboard shortcuts reference');
        button.setAttribute('type', 'button');
        
        // Add event listener to the button
        button.addEventListener('click', function(event) {
          event.preventDefault();
          showKeyboardShortcutsModal();
        });
        
        // Add the button to the container
        container.appendChild(button);
      }
    });
  }
});
