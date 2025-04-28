const profileImage = document.querySelector("#profile-img"); 
const fileInput = document.querySelector("#file-input");
const profileOptions = document.querySelector(".profile-option-bar");

// When the profile image is clicked, trigger file selection
profileImage.addEventListener("click", () => fileInput.click());

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

// Single event listener using event delegation
profileOptions.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(".profile-option-item");
    if (clickedItem) {
        // Remove active class from all items
        document.querySelectorAll(".profile-option-item").forEach(item => {
            item.classList.remove("active");
        });
        // Add active class to clicked item
        clickedItem.classList.add("active");
    }
});

