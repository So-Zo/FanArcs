// JavaScript for user content pages
document.addEventListener('DOMContentLoaded', function() {
  // Tab navigation
  const tabLinks = document.querySelectorAll('.content-tabs a');
  const contentSections = document.querySelectorAll('.content-section');

  tabLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Get the target section ID from the href
      const targetId = this.getAttribute('href').substring(1);

      // Remove active class from all tabs and sections
      tabLinks.forEach(tab => {
        tab.classList.remove('active');
        tab.removeAttribute('aria-current');
      });

      contentSections.forEach(section => {
        section.classList.remove('active');
      });

      // Add active class to clicked tab and corresponding section
      this.classList.add('active');
      this.setAttribute('aria-current', 'page');
      document.getElementById(targetId).classList.add('active');

      // Update URL hash without scrolling
      history.pushState(null, null, `#${targetId}`);
    });
  });

  // Check for hash in URL on page load
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const targetTab = document.querySelector(`.content-tabs a[href="#${hash}"]`);

    if (targetTab) {
      targetTab.click();
    }
  }

  // Wiki edit functionality
  const wikiEditButton = document.querySelector('.wiki-edit-button');
  const sidebarEditButton = document.querySelector('.edit-button');

  // Function to toggle edit mode
  function toggleEditMode(button) {
    const editableContent = document.querySelectorAll('.editable-content');
    const allEditButtons = document.querySelectorAll('.wiki-edit-button, .edit-button');

    if (button.classList.contains('editing')) {
      // Save changes
      allEditButtons.forEach(btn => {
        if (btn.classList.contains('wiki-edit-button')) {
          btn.textContent = 'Edit Page';
        } else {
          btn.textContent = 'Edit Page';
        }
        btn.classList.remove('editing');
      });

      editableContent.forEach(content => {
        content.setAttribute('contenteditable', 'false');
        content.classList.remove('editing');
      });

      // In a real application, this would save the content to the server
      alert('In a real application, your changes would be saved to the database.');
    } else {
      // Enable editing
      allEditButtons.forEach(btn => {
        if (btn.classList.contains('wiki-edit-button')) {
          btn.textContent = 'Save Changes';
        } else {
          btn.textContent = 'Save Changes';
        }
        btn.classList.add('editing');
      });

      editableContent.forEach(content => {
        content.setAttribute('contenteditable', 'true');
        content.classList.add('editing');
      });
    }
  }

  // Add event listeners to both edit buttons
  if (wikiEditButton) {
    wikiEditButton.addEventListener('click', function() {
      toggleEditMode(this);
    });
  }

  if (sidebarEditButton) {
    sidebarEditButton.addEventListener('click', function() {
      toggleEditMode(this);
    });
  }

  // Section edit controls
  const sectionEditControls = document.querySelectorAll('.section-edit-control');
  if (sectionEditControls.length > 0) {
    sectionEditControls.forEach(control => {
      control.addEventListener('click', function(event) {
        event.preventDefault();

        const sectionId = this.getAttribute('data-section');
        const sectionContent = document.getElementById(`${sectionId}-content`);

        if (sectionContent) {
          // Enable editing for just this section
          sectionContent.setAttribute('contenteditable', 'true');
          sectionContent.classList.add('editing');
          sectionContent.focus();

          // Scroll to the section
          sectionContent.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Add a temporary save button
          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save Section';
          saveButton.className = 'section-save-button';
          saveButton.style.marginTop = '0.5rem';
          saveButton.style.padding = '0.5rem 1rem';
          saveButton.style.backgroundColor = 'var(--fanarc-secondary-color)';
          saveButton.style.color = 'white';
          saveButton.style.border = 'none';
          saveButton.style.borderRadius = 'var(--border-radius-small)';
          saveButton.style.cursor = 'pointer';

          // Insert the save button after the section content
          sectionContent.parentNode.insertBefore(saveButton, sectionContent.nextSibling);

          // Add event listener to the save button
          saveButton.addEventListener('click', function() {
            sectionContent.setAttribute('contenteditable', 'false');
            sectionContent.classList.remove('editing');

            // In a real application, this would save the section content to the server
            alert(`In a real application, changes to the "${sectionId}" section would be saved to the database.`);

            // Remove the save button
            this.remove();
          });
        }
      });
    });
  }

  // Keyboard shortcut for editing (press 'e')
  document.addEventListener('keydown', function(event) {
    // Check if 'e' key is pressed and not inside an input or textarea
    if (event.key === 'e' &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA' &&
        !document.activeElement.hasAttribute('contenteditable')) {

      // Trigger the wiki edit button if it exists
      const editButton = document.querySelector('.wiki-edit-button') || document.querySelector('.edit-button');
      if (editButton && !editButton.classList.contains('editing')) {
        editButton.click();
      }
    }
  });

  // View history functionality is now handled in page-history.js

  // Report issue functionality
  const reportButton = document.querySelector('.report-button');
  if (reportButton) {
    reportButton.addEventListener('click', function() {
      alert('In a real application, this would open a form to report an issue with the page.');
    });
  }

  // Add comment functionality
  const postCommentButton = document.querySelector('.post-comment-button');
  const commentInput = document.querySelector('.comment-input');

  if (postCommentButton && commentInput) {
    postCommentButton.addEventListener('click', function() {
      const commentText = commentInput.value.trim();

      if (commentText) {
        // In a real application, this would send the comment to the server
        alert('In a real application, your comment would be saved to the database.');
        commentInput.value = '';
      } else {
        alert('Please enter a comment before posting.');
      }
    });
  }

  // Add theory functionality
  const addTheoryButton = document.querySelector('.add-theory-button');

  if (addTheoryButton) {
    addTheoryButton.addEventListener('click', function() {
      alert('In a real application, this would open a form to add a new theory.');
    });
  }

  // Add CSS for editable content
  const editableStyle = document.createElement('style');
  editableStyle.textContent = `
    .editable-content.editing {
      border: 1px dashed #ccc;
      padding: 0.5rem;
      background-image: var(--base-light-gradient);
      min-height: 100px;
    }

    .editable-content.editing:focus {
      outline: 2px solid var(--fanarc-secondary-color, #A997DF);
      background-image: var(--base-light-gradient);
    }
  `;

  document.head.appendChild(editableStyle);
});
