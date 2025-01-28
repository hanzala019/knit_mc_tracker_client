// Create a new file called nav-utils.js
function updateNavigation() {
    let user = localStorage.getItem("user");
    console.log(user)
    const navbar = document.querySelector('.nav-links');
    if (user === undefined || user === null) 
        {
            // Redirect to login page if not logged in
            window.location.href = "login.html"; // Replace with your login page
        }
    else {
        
        user = JSON.parse(user)
    }
    // First remove any existing Users link to avoid duplicates
    const existingUsersLink = navbar.querySelector('[href="./users.html"]');
    if (existingUsersLink) {
        existingUsersLink.remove();
    }
    
    // Add Users link if user is owner
    if (user && user[2] === 'owner') {
        const usersLink = document.createElement('a');
        usersLink.href = './users.html';
        usersLink.className = 'nav-link';
        usersLink.textContent = 'Users';
        
        // Add active class if on users page
        if (window.location.pathname.includes('users.html')) {
            usersLink.classList.add('active');
        }
        
        navbar.appendChild(usersLink);
    }
    
}

// Call this when the DOM is loaded
document.addEventListener('DOMContentLoaded', updateNavigation);