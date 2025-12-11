document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
    
    // Form submission
    const loginForm = document.getElementById('loginForm');
    const notification = document.getElementById('notification');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
        // Simple validation
        if (!username.trim() || !password.trim()) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show success notification
        showNotification('Login successful! Redirecting...', 'success');
        
        // Reset form after 2 seconds (simulating login process)
        setTimeout(() => {
            loginForm.reset();
            // In a real application, you would redirect to another page here
            // window.location.href = 'dashboard.html';
        }, 2000);
        
        // Log form data to console (for demo purposes)
        console.log('Login attempt:', { username, password, rememberMe });
    });
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'GitHub';
            showNotification(`Redirecting to ${provider} login...`, 'info');
            
            // In a real application, you would initiate OAuth flow here
            console.log(`${provider} login clicked`);
        });
    });
    
    // Forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Password reset link sent to your email!', 'info');
        console.log('Forgot password clicked');
    });
    
    // Sign up link
    const signupLink = document.querySelector('.signup-link a');
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Redirecting to sign up page...', 'info');
        console.log('Sign up link clicked');
    });
    
    // Function to show notification
    function showNotification(message, type = 'info') {
        const notificationIcon = notification.querySelector('i');
        const notificationText = notification.querySelector('span');
        
        // Set notification content
        notificationText.textContent = message;
        
        // Change icon based on type
        switch(type) {
            case 'success':
                notificationIcon.className = 'fas fa-check-circle';
                notification.style.background = 'rgba(0, 255, 136, 0.15)';
                notification.style.borderColor = 'rgba(0, 255, 136, 0.3)';
                break;
            case 'error':
                notificationIcon.className = 'fas fa-exclamation-circle';
                notification.style.background = 'rgba(255, 50, 50, 0.15)';
                notification.style.borderColor = 'rgba(255, 50, 50, 0.3)';
                break;
            case 'info':
            default:
                notificationIcon.className = 'fas fa-info-circle';
                notification.style.background = 'rgba(0, 204, 255, 0.15)';
                notification.style.borderColor = 'rgba(0, 204, 255, 0.3)';
                break;
        }
        
        // Show notification
        notification.classList.add('show');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Add glow effect on focus for inputs
    const formInputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    
    formInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            const glowElement = this.parentElement.querySelector('.input-glow');
            if (glowElement) {
                glowElement.style.opacity = '1';
            }
        });
        
        // Remove glow effect when not focused
        input.addEventListener('blur', function() {
            const glowElement = this.parentElement.querySelector('.input-glow');
            if (glowElement && !this.parentElement.matches(':hover')) {
                glowElement.style.opacity = '0';
            }
        });
    });
});