const express = require('express');
const router = express.Router();

// Dummy user data for testing
const users = [
    {
        id: 1,
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1',
    },
    {
        id: 2,
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2',
    },
    {
        id: 3,
        username: 'user3',
        email: 'user3@example.com',
        password: 'password3',
    },
];

// User Registration
router.post('/register', (req, res) => {
    // Simulate user registration by adding a new user to the dummy data
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    res.json({ message: 'User registered successfully' });
});

// User Authentication
router.post('/login', (req, res) => {
    // Simulate user authentication by checking credentials against the dummy data
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'User authenticated successfully', accessToken: 'your_access_token' });
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

router.post('/logout', (req, res) => {
    // Simulate user logout (no action needed for dummy data)
    res.json({ message: 'User logged out successfully' });
});

// User Profile
router.get('/profile', (req, res) => {
    // Dummy response for user profile
    const userProfile = {
        id: 1,
        username: 'user1',
        email: 'user1@example.com',
        fullName: 'John Doe',
    };
    res.json(userProfile);
});

router.put('/profile', (req, res) => {
    // Dummy response for updating user profile
    res.json({ message: 'User profile updated successfully' });
});

// User Data Retrieval (Admin Access)
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    // Simulate retrieving user data by ID (admin access)
    const user = users.find((u) => u.id === userId);

    // if (user) {
    //     res.json(user);
    // } else {
    //     res.status(404).json({ message: 'User not found' });
    // }

    // Create a dummy user with dummy data
    const dummyUser = {
        id: userId,
        username: 'dummyuser',
        email: 'dummyuser@example.com',
        // Add other dummy user data as needed
    };

    res.json(dummyUser);
});

// User Management (Admin Access)
router.get('/', (req, res) => {
    // Simulate retrieving a list of users (admin access)
    res.json(users);
});

router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    // Simulate updating user data by ID (admin access)
    const userIndex = users.findIndex((u) => u.id === userId);

    // if (userIndex !== -1) {
    //     users[userIndex] = { ...users[userIndex], ...updatedUser };
    //     res.json({ message: 'User updated successfully' });
    // } else {
    //     res.status(404).json({ message: 'User not found' });
    // }

    res.json({ message: 'User updated successfully' });

});

router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    // Simulate deleting user by ID (admin access)
    const userIndex = users.findIndex((u) => u.id === userId);

    // if (userIndex !== -1) {
    //     users.splice(userIndex, 1);
    //     res.json({ message: 'User deleted successfully' });
    // } else {
    //     res.status(404).json({ message: 'User not found' });
    // }

    res.json({ message: 'User deleted successfully' });

});

// Password Reset
router.post('/forgot-password', (req, res) => {
    // Simulate initiating the password reset process
    res.json({ message: 'Password reset initiated' });
});

router.post('/reset-password', (req, res) => {
    // Simulate resetting the user's password
    res.json({ message: 'Password reset successfully' });
});

module.exports = router;
