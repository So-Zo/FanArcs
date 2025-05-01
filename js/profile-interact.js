const profileImage = document.querySelector("#user-profile-image");
const fileInput = document.querySelector("#profile-image-upload");
const profileOptions = document.querySelector(".profile-options-bar");
const createPostButton = document.querySelector(".create-post-button");
const createPostModal = document.querySelector("#create-post-modal");
const modalCloseButton = document.querySelector(".modal-close");
const cancelPostButton = document.querySelector(".cancel-post-btn");
const postCreationForm = document.querySelector("#post-creation-form");
const postMediaInput = document.querySelector("#post-media");
const mediaPreview = document.querySelector("#media-preview");

// When the profile image is clicked, trigger file selection
profileImage.addEventListener("click", () => {
    fileInput.click();
});

// Handle file selection for profile image
fileInput.addEventListener("change", function () {
    const file = this.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Convert file to a readable format
        reader.onload = function () {
            profileImage.src = reader.result; // Set the new image
        };
    }
});

// Single event listener using event delegation for profile options
profileOptions.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(".profile-option-item");
    if (clickedItem) {
        // Remove active class from all option items
        document.querySelectorAll(".profile-option-item").forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to clicked item
        clickedItem.classList.add("active");

        // Get the option type from the button text
        const optionType = clickedItem.textContent.trim().toLowerCase();

        // Hide all content sections
        document.querySelectorAll(".profile-content-section").forEach(section => {
            section.classList.remove("active");
        });

        // Show the corresponding content section
        const targetSection = document.getElementById(optionType);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    }
});

// Post Creation Modal Functionality
if (createPostButton) {
    // Open modal when create post button is clicked
    createPostButton.addEventListener("click", () => {
        createPostModal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    });
}

// Close modal when close button is clicked
if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closePostModal);
}

// Close modal when cancel button is clicked
if (cancelPostButton) {
    cancelPostButton.addEventListener("click", closePostModal);
}

// Close modal when clicking outside the content
if (createPostModal) {
    createPostModal.addEventListener("click", (event) => {
        if (event.target === createPostModal) {
            closePostModal();
        }
    });
}

// Function to close the post creation modal
function closePostModal() {
    createPostModal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling

    // Reset form
    if (postCreationForm) {
        postCreationForm.reset();
    }

    // Clear media preview
    if (mediaPreview) {
        mediaPreview.innerHTML = "";
        mediaPreview.classList.remove("has-image");
    }
}

// Handle media upload preview
if (postMediaInput) {
    postMediaInput.addEventListener("change", function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                mediaPreview.innerHTML = `<img src="${reader.result}" alt="Post media preview">`;
                mediaPreview.classList.add("has-image");
            };
        }
    });
}

// Handle form submission (placeholder for future backend integration)
if (postCreationForm) {
    postCreationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // In a real application, this would send the form data to the server
        // For now, we'll just show a message and close the modal

        alert("Post creation functionality will be implemented with backend integration.");
        closePostModal();

        // This is where you would add code to create a new post in the UI
        // and send the data to the server
    });
}
