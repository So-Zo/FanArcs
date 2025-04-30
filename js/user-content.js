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

  // Edit page functionality
  const editButton = document.querySelector('.edit-button');
  if (editButton) {
    editButton.addEventListener('click', function() {
      // Toggle editable content
      const editableContent = document.querySelectorAll('.editable-content');

      if (this.classList.contains('editing')) {
        // Save changes
        this.textContent = 'Edit Page';
        this.classList.remove('editing');

        editableContent.forEach(content => {
          content.setAttribute('contenteditable', 'false');
          content.classList.remove('editing');
        });

        // In a real application, this would save the content to the server
        alert('In a real application, your changes would be saved to the database.');
      } else {
        // Enable editing
        this.textContent = 'Save Changes';
        this.classList.add('editing');

        editableContent.forEach(content => {
          content.setAttribute('contenteditable', 'true');
          content.classList.add('editing');
        });
      }
    });
  }

  // View history functionality
  const historyButton = document.querySelector('.history-button');
  if (historyButton) {
    historyButton.addEventListener('click', function() {
      alert('In a real application, this would show the edit history of the page.');
    });
  }

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
      background-image: linear-gradient(
        to top,
        #c9c8c5 0%,
        #c9c8c5 1%,
        #dbdad7 31%,
        #dcdad7 75%,
        #d6d5d2 100%
      );
      min-height: 100px;
    }

    .editable-content.editing:focus {
      outline: 2px solid var(--fanarc-secondary-color, #A997DF);
      background-image: linear-gradient(
        to top,
        #c9c8c5 0%,
        #c9c8c5 1%,
        #dbdad7 31%,
        #dcdad7 75%,
        #d6d5d2 100%
      );
    }
  `;

  document.head.appendChild(editableStyle);
});
