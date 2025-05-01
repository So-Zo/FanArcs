/**
 * Page History JavaScript
 * This file handles the page history modal and contributor information functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Sample revision data (in a real app, this would come from a database)
  const pageRevisions = [
    {
      id: 1,
      author: 'JaneDoe',
      authorId: 'user123',
      avatar: '../images/default-profile.jpg',
      date: '2023-11-15T14:30:00',
      comment: 'Initial page creation',
      sections: ['all'],
      changes: '+2500 characters'
    },
    {
      id: 2,
      author: 'JohnSmith',
      authorId: 'user456',
      avatar: '../images/default-profile.jpg',
      date: '2023-11-16T09:45:00',
      comment: 'Added background information',
      sections: ['background'],
      changes: '+750 characters'
    },
    {
      id: 3,
      author: 'AlexWong',
      authorId: 'user789',
      avatar: '../images/default-profile.jpg',
      date: '2023-11-18T16:20:00',
      comment: 'Updated character abilities and fixed typos',
      sections: ['abilities', 'profile'],
      changes: '+320 characters, -50 characters'
    },
    {
      id: 4,
      author: 'SarahJohnson',
      authorId: 'user101',
      avatar: '../images/default-profile.jpg',
      date: '2023-11-20T11:05:00',
      comment: 'Added notable achievements section',
      sections: ['achievements'],
      changes: '+1200 characters'
    },
    {
      id: 5,
      author: 'JaneDoe',
      authorId: 'user123',
      avatar: '../images/default-profile.jpg',
      date: '2023-11-22T15:30:00',
      comment: 'Updated with latest information and fixed formatting',
      sections: ['profile', 'background', 'abilities'],
      changes: '+450 characters, -200 characters'
    }
  ];

  // Get all page history links
  const pageHistoryLinks = document.querySelectorAll('.page-history-link');
  
  // Add event listeners to all page history links
  pageHistoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      showPageHistoryModal();
    });
  });
  
  // Get all history buttons in the sidebar
  const historyButtons = document.querySelectorAll('.history-button');
  
  // Add event listeners to all history buttons
  historyButtons.forEach(button => {
    button.addEventListener('click', function() {
      showPageHistoryModal();
    });
  });
  
  // Function to show the page history modal
  function showPageHistoryModal() {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'page-history-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'page-history-title');
    
    // Get the current page title
    const pageTitle = document.querySelector('.content-title')?.textContent || 'Page';
    
    // Create modal content
    modal.innerHTML = `
      <div class="page-history-container">
        <div class="page-history-header">
          <h2 id="page-history-title">Revision History: ${pageTitle}</h2>
          <button class="page-history-close" aria-label="Close">&times;</button>
        </div>
        <div class="page-history-content">
          <ul class="revision-list">
            ${generateRevisionList(pageRevisions)}
          </ul>
        </div>
      </div>
    `;
    
    // Add modal to the document
    document.body.appendChild(modal);
    
    // Add event listener to close button
    const closeButton = modal.querySelector('.page-history-close');
    closeButton.addEventListener('click', function() {
      closePageHistoryModal(modal);
    });
    
    // Add event listener to close when clicking outside
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closePageHistoryModal(modal);
      }
    });
    
    // Add event listener for escape key
    document.addEventListener('keydown', function escapeListener(event) {
      if (event.key === 'Escape') {
        closePageHistoryModal(modal);
        document.removeEventListener('keydown', escapeListener);
      }
    });
    
    // Show modal with animation
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
    
    // Add event listeners to compare buttons
    setTimeout(() => {
      const compareButtons = modal.querySelectorAll('.revision-action[data-action="compare"]');
      compareButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          const revisionId = this.getAttribute('data-revision-id');
          alert(`In a real application, this would show a comparison between revision #${revisionId} and the current version.`);
        });
      });
      
      // Add event listeners to view buttons
      const viewButtons = modal.querySelectorAll('.revision-action[data-action="view"]');
      viewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          const revisionId = this.getAttribute('data-revision-id');
          alert(`In a real application, this would show revision #${revisionId} of the page.`);
        });
      });
      
      // Add event listeners to restore buttons
      const restoreButtons = modal.querySelectorAll('.revision-action[data-action="restore"]');
      restoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          const revisionId = this.getAttribute('data-revision-id');
          alert(`In a real application, this would restore the page to revision #${revisionId}.`);
        });
      });
    }, 100);
  }
  
  // Function to close the page history modal
  function closePageHistoryModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  }
  
  // Function to generate the revision list HTML
  function generateRevisionList(revisions) {
    return revisions.map(revision => {
      const date = new Date(revision.date);
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      const sectionBadges = revision.sections.map(section => {
        if (section === 'all') {
          return '<span class="revision-section">All Sections</span>';
        } else {
          return `<span class="revision-section">${capitalizeFirstLetter(section)}</span>`;
        }
      }).join('');
      
      return `
        <li class="revision-item">
          <div class="revision-header">
            <img src="${revision.avatar}" alt="${revision.author}" class="revision-avatar">
            <div class="revision-info">
              <a href="#user/${revision.authorId}" class="revision-author">${revision.author}</a>
              <div class="revision-date">${formattedDate}</div>
            </div>
          </div>
          <div class="revision-comment">${revision.comment}</div>
          <div class="revision-changes">
            ${sectionBadges}
            <span>${revision.changes}</span>
          </div>
          <div class="revision-actions">
            <a href="#" class="revision-action" data-action="view" data-revision-id="${revision.id}">View</a>
            <a href="#" class="revision-action" data-action="compare" data-revision-id="${revision.id}">Compare with current</a>
            <a href="#" class="revision-action" data-action="restore" data-revision-id="${revision.id}">Restore this version</a>
          </div>
        </li>
      `;
    }).join('');
  }
  
  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Update the contributor footer with multiple contributors
  updateContributorFooter();
  
  // Function to update the contributor footer
  function updateContributorFooter() {
    const contributorFooters = document.querySelectorAll('.contributor-footer');
    
    contributorFooters.forEach(footer => {
      // Get the contributor info element
      const contributorInfo = footer.querySelector('.contributor-info');
      
      if (contributorInfo) {
        // Get unique contributors from the revisions
        const uniqueContributors = [...new Map(pageRevisions.map(rev => [rev.authorId, rev])).values()];
        const lastEditor = pageRevisions[pageRevisions.length - 1];
        
        // Format the date
        const lastEditDate = new Date(lastEditor.date);
        const formattedDate = lastEditDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        
        // Update the last editor information
        contributorInfo.innerHTML = `
          <img src="${lastEditor.avatar}" alt="${lastEditor.author}" class="contributor-avatar">
          <span>Last edited by <a href="#user/${lastEditor.authorId}">${lastEditor.author}</a> on ${formattedDate}</span>
        `;
        
        // If there are multiple contributors, add them to the footer
        if (uniqueContributors.length > 1) {
          // Create a contributor list element
          const contributorList = document.createElement('div');
          contributorList.className = 'contributor-list';
          
          // Add the text
          contributorList.innerHTML = `<span>${uniqueContributors.length} contributors: </span>`;
          
          // Add the avatars (up to 5)
          const maxAvatars = Math.min(5, uniqueContributors.length);
          for (let i = 0; i < maxAvatars; i++) {
            const contributor = uniqueContributors[i];
            const avatar = document.createElement('img');
            avatar.src = contributor.avatar;
            avatar.alt = contributor.author;
            avatar.className = 'mini-avatar';
            avatar.title = contributor.author;
            contributorList.appendChild(avatar);
          }
          
          // If there are more than 5 contributors, add a count
          if (uniqueContributors.length > 5) {
            const countSpan = document.createElement('span');
            countSpan.className = 'contributor-count';
            countSpan.textContent = `+${uniqueContributors.length - 5}`;
            contributorList.appendChild(countSpan);
          }
          
          // Insert the contributor list before the page history link
          const pageHistoryLink = footer.querySelector('.page-history-link');
          if (pageHistoryLink) {
            footer.insertBefore(contributorList, pageHistoryLink);
          } else {
            footer.appendChild(contributorList);
          }
        }
      }
    });
  }
});
