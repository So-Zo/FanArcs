const profileImage = document.querySelector("#profile-img"); 
const fileInput = document.querySelector("#file-input");

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
