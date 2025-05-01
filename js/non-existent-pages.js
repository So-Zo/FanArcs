// JavaScript for handling non-existent page links
document.addEventListener('DOMContentLoaded', function() {
  // Find all non-existent page links (both old and new class names)
  const nonExistentLinks = document.querySelectorAll('.non-existent-page, .non-existent-link');

  // Add click event listeners to each link
  nonExistentLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Get data attributes
      const pageType = this.getAttribute('data-page-type');
      const pageTitle = this.getAttribute('data-page-title');
      const relatedTo = this.getAttribute('data-related-to');

      // Show placeholder page or creation modal
      showCreatePageModal(pageType, pageTitle, relatedTo);
    });
  });

  // Function to show the create page modal
  function showCreatePageModal(pageType, pageTitle, relatedTo) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'create-page-modal';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = `Create New ${capitalizeFirstLetter(pageType)} Page`;

    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Close');

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const modalText = document.createElement('p');
    modalText.textContent = `The page for "${pageTitle}" doesn't exist yet. Would you like to create it?`;

    const modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';

    const pageTypeInfo = document.createElement('p');
    pageTypeInfo.innerHTML = `<strong>Page Type:</strong> ${capitalizeFirstLetter(pageType)}`;

    const pageTitleInfo = document.createElement('p');
    pageTitleInfo.innerHTML = `<strong>Title:</strong> ${pageTitle}`;

    if (relatedTo) {
      const relatedToInfo = document.createElement('p');
      relatedToInfo.innerHTML = `<strong>Related To:</strong> ${relatedTo}`;
      modalInfo.appendChild(relatedToInfo);
    }

    modalInfo.appendChild(pageTypeInfo);
    modalInfo.appendChild(pageTitleInfo);

    modalBody.appendChild(modalText);
    modalBody.appendChild(modalInfo);

    // Create modal footer
    const modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';

    const cancelButton = document.createElement('button');
    cancelButton.className = 'cancel-button';
    cancelButton.textContent = 'Cancel';

    const createButton = document.createElement('button');
    createButton.className = 'create-button';
    createButton.textContent = 'Create Page';

    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(createButton);

    // Assemble modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modal.appendChild(modalContent);

    // Add modal to the document
    document.body.appendChild(modal);

    // Add event listeners
    closeButton.addEventListener('click', function() {
      closeModal(modal);
    });

    cancelButton.addEventListener('click', function() {
      closeModal(modal);
    });

    createButton.addEventListener('click', function() {
      // In a real application, this would redirect to a page creation form
      // For now, we'll just simulate it
      modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h2>Creating New Page</h2>
            <button class="close-button" aria-label="Close">&times;</button>
          </div>
          <div class="modal-body">
            <p>In a real application, you would now be redirected to a page creation form.</p>
            <p>The following information would be pre-filled:</p>
            <ul>
              <li><strong>Page Type:</strong> ${capitalizeFirstLetter(pageType)}</li>
              <li><strong>Title:</strong> ${pageTitle}</li>
              ${relatedTo ? `<li><strong>Related To:</strong> ${relatedTo}</li>` : ''}
            </ul>
            <p>Once created, this page would automatically be linked to all references across the site.</p>
          </div>
          <div class="modal-footer">
            <button class="close-button">Close</button>
          </div>
        </div>
      `;

      // Add event listener to the new close button
      modal.querySelector('.close-button').addEventListener('click', function() {
        closeModal(modal);
      });
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal(modal);
      }
    });

    // Show modal with animation
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  }

  // Function to close the modal
  function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  }

  // Helper function to capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Add CSS for the modal
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
    .create-page-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }

    .create-page-modal.active {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background-image: var(--base-light-gradient);
      border-radius: 8px;
      width: 90%;
      max-width: 500px;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      transform: translateY(-20px);
      transition: transform 0.3s;
    }

    .create-page-modal.active .modal-content {
      transform: translateY(0);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #eee;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 1.5rem;
      color: var(--fanarc-primary-color, #0F084B);
    }

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #666;
      transition: color 0.3s;
    }

    .close-button:hover {
      color: #333;
    }

    .modal-body {
      padding: 1.5rem;
    }

    .modal-info {
      background-image: var(--base-light-gradient);
      border-radius: 4px;
      padding: 1rem;
      margin-top: 1rem;
    }

    .modal-info p {
      margin: 0.5rem 0;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      padding: 1rem 1.5rem;
      border-top: 1px solid #eee;
    }

    .cancel-button {
      padding: 0.75rem 1.5rem;
      background-image: var(--base-light-gradient);
      color: #333;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .cancel-button:hover {
      background-color: #e0e0e0;
    }

    .create-button {
      padding: 0.75rem 1.5rem;
      background-color: var(--fanarc-primary-color, #0F084B);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .create-button:hover {
      background-color: #1a0f6b;
    }
  `;

  document.head.appendChild(modalStyle);
});
