// This script handles loading profile data and switching between profile tabs

document.addEventListener('DOMContentLoaded', function() {
    // Get all option buttons
    const optionButtons = document.querySelectorAll('.profile-option-item');
    
    // Get all content sections
    const contentSections = document.querySelectorAll('.profile-content-section');
    
    // Add click event to each option button
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            optionButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the target content section
            const target = this.getAttribute('data-target');
            
            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Show the target content section
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Simulate loading user data (in a real app, this would fetch from a server)
    function loadUserData() {
        // This is just a placeholder for demonstration
        console.log('Loading user profile data...');
        
        // In a real application, you would fetch user data from a server
        // and update the UI accordingly
    }
    
    // Call the function to load user data
    loadUserData();
});
