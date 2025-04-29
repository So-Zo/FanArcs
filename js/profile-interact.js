const profileImage = document.querySelector("#user-profile-image");
const fileInput = document.querySelector("#profile-image-upload");
const profileOptions = document.querySelector(".profile-options-bar");

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
