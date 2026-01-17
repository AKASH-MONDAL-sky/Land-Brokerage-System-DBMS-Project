

// // Function to change form section
// function showSection(sectionId) {
//     document.querySelectorAll('.form-section').forEach(sec => {
//         sec.classList.remove('active');
//     });
//     document.getElementById(sectionId).classList.add('active');
// }

// // Signup handle
// function handleSignup(event) {
//     event.preventDefault();

//     const name = document.getElementById('signup-name').value.trim();
//     const email = document.getElementById('signup-email').value.trim().toLowerCase();
//     const phone = document.getElementById('signup-phone').value.trim();
//     const nid = document.getElementById('signup-nid').value.trim();
//     const password = document.getElementById('signup-password').value;
//     const confirm = document.getElementById('signup-confirm').value;

//     if (password !== confirm) {
//         alert('Passwords don not match!');
//         return;
//     }

//     if (!email || !password || !name || !nid) {
//         alert('Fill in all required fields.');
//         return;
//     }

//     // Get user list from local storage
//     let users = JSON.parse(localStorage.getItem('users') || '[]');

//     //Let's check if the email already exists.
//     if (users.find(user => user.email === email)) {
//         alert('There is already an account with this email.');
//         return;
//     }

//     // Add new user
//     users.push({ name, email, phone, nid, password });
//     localStorage.setItem('users', JSON.stringify(users));

//     alert('Account created successfully! Login now.');
//     showSection('login');
// }

// // Login handle
// function handleLogin(event) {
//     event.preventDefault();

//     const email = document.getElementById('login-email').value.trim().toLowerCase();
//     const password = document.getElementById('login-password').value;

//     if (!email || !password) {
//         alert('Enter email and password.');
//         return;
//     }

//     let users = JSON.parse(localStorage.getItem('users') || '[]');
//     const user = users.find(u => u.email === email && u.password === password);

//     if (!user) {
//         alert('Incorrect email or password!');
//         return;
//     }

//     // Login successful – save to local storage
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('currentUser', email);

//     //Redirect check (if coming from product.html)
//     const urlParams = new URLSearchParams(window.location.search);
//     const redirect = urlParams.get('redirect');

//     if (redirect) {
//         window.location.href = redirect;
//     } else {
//         // Default product page
//         window.location.href = 'product.html'; 
//     }
// }

// // Forgot Password (Demo)
// function handleForgot(event) {
//     event.preventDefault();
//     const email = document.getElementById('forgot-email').value.trim();
//     if (email) {
//         alert('Reset link sent (demo)!');
//     }
// }

// Function to change form section
function showSection(sectionId) {
    document.querySelectorAll('.form-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Signup handle
function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim().toLowerCase();
    const phone = document.getElementById('signup-phone').value.trim();
    const nid = document.getElementById('signup-nid').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;

    if (password !== confirm) {
        alert('Passwords don’t match!');
        return;
    }

    if (!email || !password || !name || !nid) {
        alert('Fill in all required fields.');
        return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.find(user => user.email === email)) {
        alert('There is already an account with this email.');
        return;
    }

    // Add new user
    users.push({ name, email, phone, nid, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Login now.');
    showSection('login');
}

// Login handle
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Enter email and password.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert('Incorrect email or password!');
        return;
    }

    // Login successful – save to localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', email);

    // Redirect to Dashboard
    window.location.href = './connection_admin.html';
}

// Forgot Password (Demo)
function handleForgot(event) {
    event.preventDefault();
    const email = document.getElementById('forgot-email').value.trim();
    if (email) {
        alert('Reset link sent (demo)!');
        showSection('login');
    }
}
